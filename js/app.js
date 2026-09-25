/* Chiang Mai Field Guide — page behaviour.
   Renders the bilingual content from js/data/*, runs the splash → reveal sequence,
   and wires the menu, filters, map, grid view, lightbox, cursor and scroll animations. */

(function () {
  "use strict";

  var PHOTOS = window.CM_PHOTOS;
  var DESTS = window.CM_DESTINATIONS;
  var CATS = window.CM_CATEGORIES;
  var T = window.I18N;

  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };
  var body = document.body;
  var html = document.documentElement;
  var esc = T.escape;

  var photoIndex = {};
  PHOTOS.forEach(function (p, i) { photoIndex[p.id] = i; });
  var destIndex = {};
  DESTS.forEach(function (d, i) { destIndex[d.id] = i; });

  function thumbSrc(p) { return "assets/img/thumb/" + p.id + ".jpg"; }
  function fullSrc(p) { return "assets/img/" + p.id + ".jpg"; }
  function destOf(p) { return DESTS[destIndex[p.dest]]; }
  function pad2(n) { return (n < 10 ? "0" : "") + n; }
  function fmtCoord(c) {
    return Math.abs(c[0]).toFixed(4) + "° " + (c[0] >= 0 ? "N" : "S") + ", " +
           Math.abs(c[1]).toFixed(4) + "° " + (c[1] >= 0 ? "E" : "W");
  }
  function mapsUrl(c) { return "https://www.google.com/maps/search/?api=1&query=" + c[0] + "," + c[1]; }
  function dirUrl(c) { return "https://www.google.com/maps/dir/?api=1&destination=" + c[0] + "," + c[1]; }
  function embedUrl(c) { return "https://maps.google.com/maps?q=" + c[0] + "," + c[1] + "&z=14&hl=" + T.lang + "&output=embed"; }

  function creditHTML(p, short) {
    var author = '<a href="' + esc(p.source) + '" target="_blank" rel="noopener">' + esc(p.author) + "</a>";
    var lic = '<a href="' + esc(p.licenseUrl) + '" target="_blank" rel="noopener">' + esc(p.license) + "</a>";
    return (short ? "" : esc(T.t("label.photo")) + ": ") + author + " · " + lic + (short ? "" : " · Wikimedia Commons");
  }

  var ICONS = {
    clock:  '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    ticket: '<svg viewBox="0 0 24 24"><path d="M4 7h16v3a2 2 0 0 0 0 4v3H4v-3a2 2 0 0 0 0-4z"/><path d="M14 7v10" stroke-dasharray="2 2"/></svg>',
    hour:   '<svg viewBox="0 0 24 24"><path d="M7 3h10M7 21h10M8 3c0 5 8 5 8 9s-8 4-8 9M16 3c0 5-8 5-8 9"/></svg>',
    route:  '<svg viewBox="0 0 24 24"><circle cx="6" cy="18" r="2"/><circle cx="18" cy="6" r="2"/><path d="M8 18h6a3 3 0 0 0 0-6h-4a3 3 0 0 1 0-6h6"/></svg>',
    pin:    '<svg viewBox="0 0 24 24"><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    nav:    '<svg viewBox="0 0 24 24"><path d="M3 11l18-8-8 18-2-8z"/></svg>',
    copy:   '<svg viewBox="0 0 24 24"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h8"/></svg>',
    map:    '<svg viewBox="0 0 24 24"><path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/></svg>',
    ext:    '<svg viewBox="0 0 24 24"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>',
    plane:  '<svg viewBox="0 0 24 24"><path d="M2 16l20-7-3-2-7 2-5-5H5l3 6-5 2z"/><path d="M3 21h18"/></svg>',
    temple: '<svg viewBox="0 0 24 24"><path d="M12 2l3 5H9zM6 11l6-4 6 4M4 14h16M6 14v7M18 14v7M10 21v-4h4v4M3 21h18"/></svg>',
    wallet: '<svg viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="14" rx="2"/><path d="M3 10h18M16 15h2"/></svg>',
    health: '<svg viewBox="0 0 24 24"><path d="M12 21s-8-5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6-8 11-8 11z"/><path d="M12 10v5M9.5 12.5h5"/></svg>'
  };

  /* =============================================================
     Headline (5 words, centred on the sphere origin)
     ============================================================= */
  var GOLD = { en: [1], th: [2] };
  function renderHeadline(animate) {
    var h = $("#headline");
    var inner = $("#headline .inner");
    var words = T.t("hero.headline");
    var sep = T.lang === "th" ? "<wbr>" : " ";   // Thai has no spaces: allow breaks between words
    var gold = GOLD[T.lang] || [];
    inner.innerHTML = words.map(function (w, i) {
      return '<span class="w' + (gold.indexOf(i) > -1 ? " gold" : "") + '" style="--i:' + i + '">' + esc(w) + "</span>";
    }).join(sep);
    if (animate && body.classList.contains("revealed")) {
      h.classList.add("pre", "swap");
      void h.offsetWidth;
      requestAnimationFrame(function () { h.classList.remove("pre"); });
    }
  }

  /* =============================================================
     Marquee of place names
     ============================================================= */
  function renderMarquee() {
    var items = DESTS.map(function (d) { return "<span>" + esc(T.pick(d.name)) + "</span><i></i>"; }).join("");
    $("#marquee").innerHTML = items + items;   // doubled for a seamless loop
  }

  /* =============================================================
     Places
     ============================================================= */
  var filter = "all";

  function renderFilters() {
    var counts = { all: DESTS.length, family: 0 };
    DESTS.forEach(function (d) {
      counts[d.cat] = (counts[d.cat] || 0) + 1;
      if (d.family) counts.family++;
    });
    var keys = ["all"].concat(Object.keys(CATS), ["family"]);
    $("#filters").innerHTML = keys.map(function (k) {
      var label = k === "all" ? T.t("filter.all") : k === "family" ? T.t("filter.family") : T.pick(CATS[k]);
      return '<button type="button" class="chip" data-filter="' + k + '" aria-pressed="' + (k === filter) + '">' +
        esc(label) + '<span class="n">' + counts[k] + "</span></button>";
    }).join("");
  }

  function galleryHTML(d) {
    var ps = d.photos.map(function (id) { return PHOTOS[photoIndex[id]]; });
    var main = ps[0];
    var out = '<button type="button" class="gallery-main reveal-img" data-photo="' + photoIndex[main.id] + '" aria-label="' + esc(T.pick(main.caption)) + '">' +
      '<img src="' + fullSrc(main) + '" alt="' + esc(T.pick(main.caption)) + '" loading="lazy" decoding="async"></button>' +
      '<span class="credit">' + esc(T.pick(main.caption)) + " — " + creditHTML(main) + "</span>";
    if (ps.length > 1) {
      out += '<div class="thumbs">' + ps.slice(1).map(function (p) {
        return '<div class="thumb-wrap"><button type="button" class="gallery-thumb" data-photo="' + photoIndex[p.id] + '" aria-label="' + esc(T.pick(p.caption)) + '">' +
          '<img src="' + thumbSrc(p) + '" alt="' + esc(T.pick(p.caption)) + '" loading="lazy" decoding="async"></button>' +
          '<span class="credit">' + creditHTML(p, true) + "</span></div>";
      }).join("") + "</div>";
    }
    return out;
  }

  function placeHTML(d, n) {
    var other = T.lang === "th" ? d.name.en : d.name.th;
    var pct = Math.round((d.rating / 5) * 100);
    var f = d.facts;
    var facts = [
      ["clock", "label.hours", f.hours, true],
      ["ticket", "label.price", f.price, true],
      ["hour", "label.time", f.time],
      ["route", "label.distance", f.distance]
    ].map(function (x) {
      return '<div class="fact' + (x[3] ? " wide" : "") + '"><dt>' + ICONS[x[0]] + esc(T.t(x[1])) + "</dt><dd>" + T.rich(T.pick(x[2])) + "</dd></div>";
    }).join("");

    var details = [
      ["label.what", d.what], ["label.who", d.who], ["label.prepare", d.prepare],
      ["label.join", d.join], ["label.getting", d.getting]
    ].map(function (x) {
      return '<div class="detail"><h4>' + esc(T.t(x[0])) + "</h4><p>" + T.rich(T.pick(x[1])) + "</p></div>";
    }).join("");

    var tips = d.tips && d.tips.length
      ? '<div class="tips"><h4>' + esc(T.t("label.tips")) + "</h4><ul>" +
        d.tips.map(function (tp) { return "<li>" + T.rich(T.pick(tp)) + "</li>"; }).join("") + "</ul></div>"
      : "";

    var official = d.link
      ? '<a class="pill ghost" href="' + esc(d.link) + '" target="_blank" rel="noopener">' + ICONS.ext + esc(T.t("label.official")) + "</a>"
      : "";

    return '<article class="place" id="place-' + d.id + '" data-cat="' + d.cat + '" data-family="' + (d.family ? 1 : 0) + '">' +
      '<div class="place-media">' + galleryHTML(d) + "</div>" +
      '<div class="place-body">' +
        '<header class="place-head" data-reveal>' +
          '<div class="place-tags"><span class="place-no">' + pad2(n + 1) + "</span>" +
            '<span class="tag">' + esc(T.pick(CATS[d.cat])) + "</span>" +
            (d.family ? '<span class="tag fam">' + esc(T.t("label.family")) + "</span>" : "") +
          "</div>" +
          "<h3>" + esc(T.pick(d.name)) + "</h3>" +
          '<p class="alt">' + esc(other) + "</p>" +
          '<p class="area">' + esc(T.pick(d.area)) + "</p>" +
          '<div class="rating"><span class="stars" aria-hidden="true"><span style="width:' + pct + '%"></span></span>' +
            "<b>" + d.rating.toFixed(1) + "</b><small>" + esc(T.t("label.rating")) + "</small></div>" +
        "</header>" +
        '<dl class="facts" data-reveal>' + facts + "</dl>" +
        '<div class="details" data-reveal>' + details + "</div>" +
        '<div class="review" data-reveal><h4>' + esc(T.t("label.review")) + "</h4><p>" + T.rich(T.pick(d.review)) + "</p></div>" +
        '<div data-reveal>' + tips + "</div>" +
        '<div class="locate" data-reveal>' +
          '<div class="coords"><small>' + esc(T.t("label.coords")) + "</small><code>" + fmtCoord(d.coords) + "</code></div>" +
          '<div class="btns">' +
            '<a class="pill" href="' + mapsUrl(d.coords) + '" target="_blank" rel="noopener">' + ICONS.pin + esc(T.t("label.maps")) + "</a>" +
            '<a class="pill ghost" href="' + dirUrl(d.coords) + '" target="_blank" rel="noopener">' + ICONS.nav + esc(T.t("label.directions")) + "</a>" +
            '<button type="button" class="pill ghost" data-copy="' + d.coords[0] + ", " + d.coords[1] + '">' + ICONS.copy + "<span>" + esc(T.t("label.copy")) + "</span></button>" +
            '<button type="button" class="pill ghost" data-showmap="' + d.id + '">' + ICONS.map + esc(T.t("label.showmap")) + "</button>" +
            official +
          "</div>" +
        "</div>" +
      "</div>" +
    "</article>";
  }

  function renderPlaces() {
    $("#placeList").innerHTML = DESTS.map(placeHTML).join("");
    applyFilter();
  }

  function applyFilter() {
    var shown = 0;
    $$(".place").forEach(function (el) {
      var ok = filter === "all" ||
        (filter === "family" ? el.dataset.family === "1" : el.dataset.cat === filter);
      el.classList.toggle("hide", !ok);
      if (ok) shown++;
    });
    $("#placesEmpty").hidden = shown > 0;
    $$("#filters .chip").forEach(function (c) { c.setAttribute("aria-pressed", String(c.dataset.filter === filter)); });
  }

  /* =============================================================
     Map
     ============================================================= */
  var mapSel = 0, mapLoaded = false;

  function renderMap() {
    $("#mapList").innerHTML = DESTS.map(function (d, i) {
      return '<li><button type="button" data-map="' + i + '" aria-current="' + (i === mapSel) + '">' +
        '<span class="n">' + pad2(i + 1) + "</span><b>" + esc(T.pick(d.name)) + "</b><code>" + fmtCoord(d.coords) + "</code></button></li>";
    }).join("");
    renderMapCard();
  }

  function renderMapCard() {
    var d = DESTS[mapSel];
    $("#mapCard").innerHTML = "<b>" + esc(T.pick(d.name)) + "</b><code>" + fmtCoord(d.coords) + "</code>" +
      '<a class="pill" href="' + mapsUrl(d.coords) + '" target="_blank" rel="noopener">' + ICONS.pin + esc(T.t("label.maps")) + "</a>";
    $("#mapFrame").title = T.pick(d.name);
    if (mapLoaded) $("#mapFrame").src = embedUrl(d.coords);
  }

  function selectMap(i) {
    mapSel = i;
    $$("#mapList button").forEach(function (b) { b.setAttribute("aria-current", String(+b.dataset.map === i)); });
    renderMapCard();
  }

  /* =============================================================
     Plan your trip
     ============================================================= */
  var monthSel = new Date().getMonth();

  function renderPlan() {
    var months = T.t("months");
    $("#months").innerHTML = months.map(function (m, i) {
      return '<button type="button" role="tab" class="month ' + window.CM_SEASONS[i] + '" data-month="' + i + '" aria-selected="' + (i === monthSel) + '"><span>' + esc(m) + "</span></button>";
    }).join("");
    renderSeason();

    $("#planGrid").innerHTML = window.CM_PLAN.map(function (c) {
      return '<article class="plan-card" data-reveal><span class="ico">' + (ICONS[c.icon] || "") + "</span><h3>" + esc(T.pick(c.title)) + "</h3><ul>" +
        c.items.map(function (it) { return "<li>" + T.rich(T.pick(it)) + "</li>"; }).join("") + "</ul></article>";
    }).join("");

    $("#itins").innerHTML = window.CM_ITINERARIES.map(function (it) {
      return '<div class="itin"><h4>' + esc(T.pick(it.title)) + "</h4><ol>" + it.stops.map(function (s) {
        var label = esc(T.pick(s.text));
        var time = s.t === "or" ? (T.lang === "th" ? "หรือ" : "or") : s.t;
        return "<li><time>" + time + "</time>" + (s.id ? '<a href="#place-' + s.id + '">' + label + "</a>" : "<span>" + label + "</span>") + "</li>";
      }).join("") + "</ol></div>";
    }).join("");

    $("#food").innerHTML = window.CM_FOOD.map(function (f) {
      var alt = T.lang === "th" ? "" : '<span class="th">' + esc(f.name.th) + "</span>";
      return "<li><b>" + esc(T.pick(f.name)) + alt + "</b><p>" + esc(T.pick(f.text)) + "</p></li>";
    }).join("");

    $("#fests").innerHTML = window.CM_FESTIVALS.map(function (f) {
      return "<li><small>" + esc(T.pick(f.when)) + "</small><b>" + esc(T.pick(f.name)) + "</b><p>" + esc(T.pick(f.text)) + "</p></li>";
    }).join("");
  }

  function renderSeason() {
    var key = window.CM_SEASONS[monthSel];
    var s = window.CM_SEASON_INFO[key];
    $("#seasonCard").innerHTML = "<div><h4>" + esc(T.pick(s.label)) + "</h4><small>" + esc(T.pick(s.range)) + "</small></div><p>" + T.rich(T.pick(s.text)) + "</p>";
    $$("#months .month").forEach(function (b) { b.setAttribute("aria-selected", String(+b.dataset.month === monthSel)); });
  }

  /* =============================================================
     Credits & grid
     ============================================================= */
  function renderCredits() {
    $("#creditList").innerHTML = PHOTOS.map(function (p, i) {
      var d = destOf(p);
      return '<li class="credit-item" data-reveal>' +
        '<button type="button" data-photo="' + i + '" aria-label="' + esc(T.pick(p.caption)) + '"><img src="' + thumbSrc(p) + '" alt="" loading="lazy" decoding="async"></button>' +
        "<div><b>" + esc(T.pick(d.name)) + "</b>" +
        "<p>" + esc(T.pick(p.caption)) + "</p>" +
        "<p><span>" + esc(T.t("credits.col.author")) + ":</span> " + esc(p.author) + "</p>" +
        "<p><span>" + esc(T.t("credits.col.license")) + ':</span> <a href="' + esc(p.licenseUrl) + '" target="_blank" rel="noopener">' + esc(p.license) + "</a></p>" +
        "<p><span>" + esc(T.t("credits.col.source")) + ':</span> <a href="' + esc(p.source) + '" target="_blank" rel="noopener">Wikimedia Commons</a></p>' +
        "</div></li>";
    }).join("");
  }

  function renderGrid() {
    $("#gridRows").innerHTML = PHOTOS.map(function (p, i) {
      return '<figure data-idx="' + i + '"><img src="' + thumbSrc(p) + '" alt="' + esc(T.pick(p.caption)) + '" loading="lazy" decoding="async">' +
        "<figcaption>" + esc(T.pick(destOf(p).name)) + "<small>" + esc(p.author) + " · " + esc(p.license) + "</small></figcaption></figure>";
    }).join("");
  }

  function toggleGrid(force) {
    var on = typeof force === "boolean" ? force : !body.classList.contains("gridview");
    body.classList.toggle("gridview", on);
    $("#grid").setAttribute("aria-hidden", String(!on));
    syncScrollLock();
    if (on) $("#grid").scrollTop = 0;
  }

  /* =============================================================
     Lightbox (FLIP from the clicked image)
     ============================================================= */
  var lit = { idx: -1, src: null, token: 0, fromSphere: false, timer: 0 };
  var plate = $("#lit .plate");
  var shot = $("#lit .shot");

  function fillLightbox(i) {
    var p = PHOTOS[i];
    var d = destOf(p);
    var token = ++lit.token;
    var img = $("#litImg");
    img.src = thumbSrc(p);
    img.alt = T.pick(p.caption);
    var full = new Image();
    full.onload = function () { if (token === lit.token) img.src = full.src; };
    full.src = fullSrc(p);

    $("#litTitle").textContent = T.pick(d.name);
    $("#litWhere").textContent = T.pick(p.caption);
    $("#litNote").innerHTML = creditHTML(p) + (p.date ? " · " + esc(p.date.slice(0, 4)) : "") + "<br>" + esc(T.pick(d.area));
    $("#litSource").href = p.source;
    $("#litCount").textContent = (i + 1) + " / " + PHOTOS.length;
  }

  function flipFrom(el) {
    if (!el || !el.getBoundingClientRect) return;
    var r = el.getBoundingClientRect();
    if (!r.width) return;
    plate.style.transition = "none";
    plate.style.transform = "none";
    var pr = plate.getBoundingClientRect();
    var sr = shot.getBoundingClientRect();
    var ox = sr.left - pr.left + sr.width / 2;
    var oy = sr.top - pr.top + sr.height / 2;
    var s = Math.max(0.04, r.width / sr.width);
    var dx = (r.left + r.width / 2) - (sr.left + sr.width / 2);
    var dy = (r.top + r.height / 2) - (sr.top + sr.height / 2);
    plate.style.transformOrigin = ox + "px " + oy + "px";
    plate.style.transform = "translate(" + dx + "px," + dy + "px) scale(" + s + ")";
    plate.style.opacity = "0";
    return { dx: dx, dy: dy, s: s };
  }

  function openLit(i, srcEl, fromSphere) {
    clearTimeout(lit.timer);
    lit.idx = i; lit.src = srcEl; lit.fromSphere = !!fromSphere;
    fillLightbox(i);
    body.classList.add("lit");
    $("#lit").setAttribute("aria-hidden", "false");
    window.Sphere.focus(fromSphere ? i : -1);
    syncScrollLock();

    flipFrom(srcEl);
    void plate.offsetWidth;
    plate.style.transition = "";
    plate.style.transform = "";
    plate.style.opacity = "";
    setTimeout(function () { $("#lit .close").focus({ preventScroll: true }); }, 50);
  }

  function closeLit() {
    if (!body.classList.contains("lit")) return;
    window.Sphere.focus(-1);
    body.classList.remove("lit");
    $("#lit").setAttribute("aria-hidden", "true");
    syncScrollLock();

    var src = lit.fromSphere ? window.Sphere.card(lit.idx) : lit.src;
    if (src && document.contains(src)) {
      var r = src.getBoundingClientRect();
      var inView = r.bottom > 0 && r.top < window.innerHeight;
      if (inView) {
        var pr = plate.getBoundingClientRect();
        var sr = shot.getBoundingClientRect();
        var s = Math.max(0.04, r.width / sr.width);
        plate.style.transformOrigin = (sr.left - pr.left + sr.width / 2) + "px " + (sr.top - pr.top + sr.height / 2) + "px";
        plate.style.transform = "translate(" + ((r.left + r.width / 2) - (sr.left + sr.width / 2)) + "px," +
          ((r.top + r.height / 2) - (sr.top + sr.height / 2)) + "px) scale(" + s + ")";
      }
    }
    plate.style.opacity = "0";
    lit.timer = setTimeout(function () {
      plate.style.transition = "none";
      plate.style.transform = "";
      plate.style.opacity = "";
      void plate.offsetWidth;
      plate.style.transition = "";
    }, 640);
    lit.idx = -1;
  }

  function stepLit(dir) {
    if (lit.idx < 0) return;
    var n = (lit.idx + dir + PHOTOS.length) % PHOTOS.length;
    lit.idx = n;
    lit.src = null; lit.fromSphere = false;
    window.Sphere.focus(-1);
    fillLightbox(n);
  }

  function goToPlace(id) {
    var el = document.getElementById("place-" + id);
    if (!el) return;
    if (el.classList.contains("hide")) { filter = "all"; applyFilter(); }
    closeLit();
    toggleGrid(false);
    setTimeout(function () { el.scrollIntoView({ behavior: "smooth", block: "start" }); }, 80);
  }

  /* =============================================================
     Menu
     ============================================================= */
  function toggleMenu(force) {
    var on = typeof force === "boolean" ? force : !body.classList.contains("menu-open");
    body.classList.toggle("menu-open", on);
    var btn = $("#menuBtn");
    btn.setAttribute("aria-expanded", String(on));
    btn.setAttribute("data-i18n-aria", on ? "nav.close" : "nav.open");
    btn.setAttribute("aria-label", T.t(on ? "nav.close" : "nav.open"));
    $("#menu").setAttribute("aria-hidden", String(!on));
    syncScrollLock();
  }

  function syncScrollLock() {
    var lock = body.classList.contains("lit") || body.classList.contains("gridview") || body.classList.contains("menu-open");
    html.classList.toggle("noscroll", lock);
  }

  /* =============================================================
     Scroll reveal + counters
     ============================================================= */
  var io = "IntersectionObserver" in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add("is-in");
      io.unobserve(e.target);
      if (e.target.classList.contains("stats")) countUp(e.target);
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }) : null;

  function observe(root, instant) {
    /* Image curtains are observed through their wrapper: IntersectionObserver
       ignores a target that is fully clipped by its own clip-path. */
    $$("[data-reveal], .place-media", root).forEach(function (el, i) {
      if (instant || !io) { el.classList.add("is-in"); return; }
      if (!el.classList.contains("is-in")) {
        el.style.setProperty("--rd", ((i % 4) * 0.07) + "s");
        io.observe(el);
      }
    });
  }

  function countUp(root) {
    $$("dt[data-count]", root).forEach(function (dt) {
      var to = +dt.dataset.count, t0 = performance.now(), dur = 1400;
      (function tick(now) {
        var k = Math.min(1, (now - t0) / dur);
        dt.textContent = Math.round(to * (1 - Math.pow(1 - k, 3)));
        if (k < 1) requestAnimationFrame(tick);
      })(t0);
    });
  }

  /* =============================================================
     Custom cursor
     ============================================================= */
  function initCursor() {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    var dot = $("#dot");
    var x = -100, y = -100, cx = -100, cy = -100;
    window.addEventListener("pointermove", function (e) {
      x = e.clientX; y = e.clientY;
      var t = e.target;
      var wide = t.closest && t.closest(".card, a, button, #grid figure");
      dot.classList.toggle("wide", !!wide);
      dot.classList.remove("hidden");
    }, { passive: true });
    document.addEventListener("pointerleave", function () { dot.classList.add("hidden"); });
    (function loop() {
      cx += (x - cx) * 0.2; cy += (y - cy) * 0.2;
      dot.style.transform = "translate3d(" + cx + "px," + cy + "px,0)";
      requestAnimationFrame(loop);
    })();
  }

  /* =============================================================
     Events (delegated)
     ============================================================= */
  function bind() {
    document.addEventListener("click", function (e) {
      var t = e.target;
      var el;

      if ((el = t.closest(".lang-btn"))) { T.set(el.dataset.lang); return; }
      if (t.closest("#menuBtn")) { toggleMenu(); return; }
      if (t.closest("#gridBtn")) { toggleGrid(); return; }

      if ((el = t.closest("#menu a"))) {
        e.preventDefault();
        var href = el.getAttribute("href");
        toggleMenu(false);
        if (el.hasAttribute("data-grid")) {
          window.scrollTo({ top: 0, behavior: "instant" });
          setTimeout(function () { toggleGrid(true); }, 350);
        } else {
          setTimeout(function () { var target = $(href); if (target) target.scrollIntoView({ behavior: "smooth" }); }, 350);
        }
        return;
      }

      if ((el = t.closest("#lit [data-close]"))) { closeLit(); return; }
      if (t.closest("#litGuide")) { if (lit.idx >= 0) goToPlace(PHOTOS[lit.idx].dest); return; }

      if ((el = t.closest("#grid figure"))) { openLit(+el.dataset.idx, el, false); return; }
      if ((el = t.closest("[data-photo]"))) { openLit(+el.dataset.photo, el, false); return; }

      if ((el = t.closest("[data-filter]"))) { filter = el.dataset.filter; applyFilter(); return; }

      if ((el = t.closest("[data-map]"))) { selectMap(+el.dataset.map); return; }
      if ((el = t.closest("[data-showmap]"))) {
        selectMap(destIndex[el.dataset.showmap]);
        loadMap();
        $("#map").scrollIntoView({ behavior: "smooth" });
        return;
      }

      if ((el = t.closest("[data-copy]"))) { copyText(el); return; }

      if ((el = t.closest("[data-month]"))) { monthSel = +el.dataset.month; renderSeason(); return; }

      if ((el = t.closest('a[href^="#"]')) && !el.closest("#menu")) {
        var target = $(el.getAttribute("href"));
        if (target) { e.preventDefault(); target.scrollIntoView({ behavior: "smooth" }); }
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        if (body.classList.contains("lit")) closeLit();
        else if (body.classList.contains("menu-open")) toggleMenu(false);
        else if (body.classList.contains("gridview")) toggleGrid(false);
      } else if (body.classList.contains("lit")) {
        if (e.key === "ArrowRight") stepLit(1);
        if (e.key === "ArrowLeft") stepLit(-1);
      }
    });
  }

  function copyText(btn) {
    var text = btn.dataset.copy;
    var done = function () {
      var span = btn.querySelector("span");
      btn.classList.add("done");
      if (span) span.textContent = T.t("label.copied");
      setTimeout(function () { btn.classList.remove("done"); if (span) span.textContent = T.t("label.copy"); }, 1600);
    };
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(done, fallback);
    } else fallback();
    function fallback() {
      var ta = document.createElement("textarea");
      ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); } catch (err) {}
      ta.remove(); done();
    }
  }

  function loadMap() {
    if (mapLoaded) return;
    mapLoaded = true;
    $("#mapFrame").src = embedUrl(DESTS[mapSel].coords);
  }

  /* =============================================================
     Render everything / language changes
     ============================================================= */
  function renderAll(instant) {
    T.apply();
    renderHeadline(!instant);
    renderMarquee();
    renderFilters();
    renderPlaces();
    renderMap();
    renderPlan();
    renderCredits();
    renderGrid();
    observe(document, instant);
    $$(".lang-btn").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.lang === T.lang)); });
    if (lit.idx >= 0) fillLightbox(lit.idx);
  }

  T.onChange(function () { renderAll(true); });

  /* =============================================================
     Splash → reveal
     ============================================================= */
  function start() {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    html.lang = T.lang;
    html.setAttribute("data-lang", T.lang);
    document.title = T.t("meta.title");

    var born = performance.now();
    var imgs = window.Sphere.init({
      photos: PHOTOS,
      thumbSrc: thumbSrc,
      onPick: function (i, fig) { openLit(i, fig, true); },
      onScrollState: function (p, y) {
        body.classList.toggle("deep", p > 0.5);
        body.classList.toggle("pasthero", y > window.innerHeight * 0.85);
      }
    });

    renderAll(false);
    bind();
    initCursor();

    /* Load the Google map only when its section approaches. */
    if (io) {
      var mio = new IntersectionObserver(function (en) {
        if (en[0].isIntersecting) { loadMap(); mio.disconnect(); }
      }, { rootMargin: "400px 0px" });
      mio.observe($("#map"));
    } else loadMap();

    var total = imgs.length, done = 0, revealed = false;
    var bar = $("#bar");
    function tick() {
      done++;
      bar.style.transform = "scaleX(" + Math.min(1, done / total) + ")";
      if (done >= total) finish();
    }
    imgs.forEach(function (img) {
      var ok = function () { img.classList.add("in"); tick(); };
      if (img.complete && img.naturalWidth) ok();
      else {
        img.addEventListener("load", ok, { once: true });
        img.addEventListener("error", tick, { once: true });
      }
    });
    var backstop = setTimeout(finish, 9000);

    function finish() {
      if (revealed) return;
      var wait = Math.max(0, 1150 - (performance.now() - born));
      setTimeout(function () {
        if (revealed) return;
        revealed = true;
        clearTimeout(backstop);
        bar.style.transform = "scaleX(1)";
        imgs.forEach(function (img) { img.classList.add("in"); });
        setTimeout(function () {
          var splash = $("#splash");
          splash.classList.add("out");
          body.classList.remove("locked");
          window.Sphere.relayout();
          requestAnimationFrame(function () { window.Sphere.relayout(); });
          body.classList.add("revealed");
          setTimeout(function () { splash.remove(); }, 950);
        }, 450);
      }, wait);
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
