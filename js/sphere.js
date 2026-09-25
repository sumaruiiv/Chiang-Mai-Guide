/* 3D photo sphere (hero).
   Cards sit on a Fibonacci sphere around a 0×0 point (#world) at the centre of the
   viewport. The headline shares that point and counter-rotates every frame so it
   stays square to the camera in the middle of the ring. Scrolling the first 16vh
   dollies the camera forward; dragging rotates the world with momentum. */

(function () {
  "use strict";

  var DEG = 180 / Math.PI;
  var PITCH_LIMIT = 32;
  var DRAG_SPEED = 0.13;           // degrees per pixel
  var COARSE = window.matchMedia("(pointer: coarse)").matches;
  var CLICK_SLOP = COARSE ? 14 : 6;

  var stage, world, orb, headline;
  var cards = [];                  // { el, fig, ux, uy, uz, lat, lon, tall, lastO, lastD }
  var R = 300, persp = 1150;
  var lastW = 0, lastH = 0;

  var state = {
    spin: -60, tilt: -4, camZ: 0,   // -60° leaves the title clear of the nearest cards (26-photo layout)
    dragX: 0, dragY: 0, velX: 0, velY: 0,
    focused: -1, frozen: false, running: false
  };

  var onPick = function () {};
  var onScrollState = function () {};

  /* ---------- Build ---------- */
  function build(photos, thumbSrc) {
    stage = document.getElementById("stage");
    world = document.getElementById("world");
    orb = document.getElementById("orb");
    headline = document.getElementById("headline");

    var N = photos.length;
    var GA = Math.PI * (3 - Math.sqrt(5));
    var frag = document.createDocumentFragment();

    for (var i = 0; i < N; i++) {
      var y = 1 - (i / (N - 1)) * 2;
      var rad = Math.sqrt(Math.max(0, 1 - y * y));
      var theta = i * GA;
      var x = Math.cos(theta) * rad;
      var z = Math.sin(theta) * rad;

      var el = document.createElement("div");
      el.className = "card";
      el.dataset.idx = i;
      var fig = document.createElement("figure");
      var img = document.createElement("img");
      img.alt = "";
      img.decoding = "async";
      img.draggable = false;
      fig.appendChild(img);
      el.appendChild(fig);
      frag.appendChild(el);

      cards.push({
        el: el, fig: fig, img: img,
        ux: x, uy: y, uz: z,
        lat: Math.asin(y) * DEG,
        lon: Math.atan2(x, z) * DEG,
        lastO: -1, lastD: -1
      });
      img.src = thumbSrc(photos[i]);
    }
    orb.appendChild(frag);
    return cards.map(function (c) { return c.img; });
  }

  /* ---------- Layout ---------- */
  function layout(force) {
    var w = window.innerWidth, h = window.innerHeight;
    if (!force && Math.abs(w - lastW) < 20 && Math.abs(h - lastH) < 20) return;
    lastW = w; lastH = h;

    var hr = w <= 380 ? 0.38 : w <= 640 ? 0.42 : 0.46;
    var wr = w <= 380 ? 0.48 : w <= 640 ? 0.52 : 0.58;
    var floor = w <= 380 ? 108 : w <= 640 ? 120 : 155;
    R = Math.max(floor, Math.min(480, h * hr, w * wr));

    var scale = w <= 380 ? 0.44 : w <= 640 ? 0.46 : 0.47;
    var cw = Math.round(Math.max(72, R * scale));

    persp = w <= 380 ? 620 : w <= 640 ? 760 : w <= 900 ? 920 : 1150;
    document.documentElement.style.setProperty("--persp", persp + "px");
    document.documentElement.style.setProperty("--cw", cw + "px");

    /* The headline sits 0.62R in front of the origin, so perspective magnifies it.
       Keep its on-screen width inside the ring (≈1.5R) so edge cards never cut the words. */
    var cap = w <= 380 ? Math.min(w * 0.66, 260) : w <= 640 ? Math.min(w * 0.66, 320) : Math.min(w * 0.56, 640);
    var mag = persp / (persp - R * 0.62);
    document.documentElement.style.setProperty("--hw", Math.round(Math.min(cap, (R * 1.5) / mag)) + "px");

    cards.forEach(function (c) {
      c.el.style.height = (cw / 1.5) + "px";
      c.el.style.marginLeft = (-cw / 2) + "px";
      c.el.style.marginTop = (-cw / 3) + "px";
      c.el.style.transform =
        "translate3d(" + (c.ux * R) + "px," + (-c.uy * R) + "px," + (c.uz * R) + "px) " +
        "rotateY(" + c.lon + "deg) rotateX(" + c.lat + "deg)";
    });
  }

  /* ---------- Camera loop ---------- */
  function progress() {
    var y = window.scrollY || window.pageYOffset || 0;
    return Math.min(1, Math.max(0, y / (window.innerHeight * 0.16)));
  }

  function frame() {
    var y = window.scrollY || 0;
    var p = progress();
    onScrollState(p, y);

    /* Skip the DOM work while the sphere is scrolled away. */
    if (y > window.innerHeight * 1.3 && !document.body.classList.contains("gridview")) return;

    if (!dragging && !state.frozen) {
      state.dragX += state.velX;
      state.dragY += state.velY;
      state.velX *= 0.94;
      state.velY *= 0.94;
      if (Math.abs(state.velX) < 0.002) state.velX = 0;
      if (Math.abs(state.velY) < 0.002) state.velY = 0;
    }
    var pitch = state.tilt + state.dragY;
    if (pitch > PITCH_LIMIT) state.dragY = PITCH_LIMIT - state.tilt;
    if (pitch < -PITCH_LIMIT) state.dragY = -PITCH_LIMIT - state.tilt;

    var camZTarget = p * Math.min(64, R * 0.12);
    state.camZ += (camZTarget - state.camZ) * 0.075;

    var sx = state.tilt + state.dragY;
    var sy = state.spin + state.dragX;

    world.style.transform = "translateZ(" + state.camZ + "px) rotateY(" + sy + "deg) rotateX(" + sx + "deg)";
    headline.style.transform = "rotateX(" + (-sx) + "deg) rotateY(" + (-sy) + "deg) translateZ(" + (R * 0.62) + "px)";
    headline.style.opacity = Math.max(0, 1 - p * 0.55);

    /* Depth wash per card */
    var ry = sy / DEG, rx = sx / DEG;
    var cy = Math.cos(ry), syn = Math.sin(ry), cx = Math.cos(rx), sxn = Math.sin(rx);    var shade = 1 - Math.min(1, p * 1.6);
    var near = persp * 0.66;
    var lit = state.focused >= 0;

    for (var i = 0; i < cards.length; i++) {
      var c = cards[i];
      /* CSS applies rotateX first, then rotateY. y is screen-down, +z faces the camera. */
      var y0 = -c.uy;
      var z1 = y0 * sxn + c.uz * cx;
      var zf = -c.ux * syn + z1 * cy;

      var base = 0.14 + 0.86 * Math.pow((zf + 1) / 2, 0.85);
      var dim = shade * (1 - base);
      var absZ = zf * R + state.camZ;
      var fade = absZ > near ? Math.max(0, 1 - (absZ - near) / 190) : 1;

      if (lit) {
        dim = Math.min(1, dim + 0.78);
        if (i === state.focused) fade = 0;
      }
      var o = Math.round(fade * 1000) / 1000;
      var d = Math.round(dim * 1000) / 1000;
      if (o !== c.lastO) { c.el.style.opacity = o; c.lastO = o; }
      if (d !== c.lastD) { c.fig.style.setProperty("--d", d); c.lastD = d; }
    }
  }

  function loop() {
    frame();
    requestAnimationFrame(loop);
  }

  /* ---------- Drag ---------- */
  var dragging = false, pending = false, pointerId = null;
  var startX = 0, startY = 0, lastX = 0, lastY = 0, moved = 0, downCard = null, pointerType = "";

  function onDown(e) {
    if (state.frozen || e.button > 0) return;
    downCard = e.target.closest ? e.target.closest(".card") : null;
    pointerId = e.pointerId;
    pointerType = e.pointerType;
    startX = lastX = e.clientX;
    startY = lastY = e.clientY;
    moved = 0;
    state.velX = state.velY = 0;

    if (pointerType === "touch") {
      pending = true;               // wait to see if the gesture is horizontal
    } else {
      dragging = true;
      try { stage.setPointerCapture(pointerId); } catch (err) {}
    }
  }

  function onMove(e) {
    if (e.pointerId !== pointerId) return;
    var dx = e.clientX - lastX, dy = e.clientY - lastY;
    moved = Math.max(moved, Math.hypot(e.clientX - startX, e.clientY - startY));

    if (pending) {
      if (moved < 10) return;
      var adx = Math.abs(e.clientX - startX), ady = Math.abs(e.clientY - startY);
      pending = false;
      if (ady > adx * 1.15) { pointerId = null; return; }   // vertical: let the page scroll
      dragging = true;
      try { stage.setPointerCapture(pointerId); } catch (err) {}
    }
    if (!dragging) return;

    state.dragX += dx * DRAG_SPEED;
    state.dragY -= dy * DRAG_SPEED;
    state.velX = dx * DRAG_SPEED;
    state.velY = -dy * DRAG_SPEED;
    lastX = e.clientX; lastY = e.clientY;
  }

  function onUp(e) {
    if (e.pointerId !== pointerId) return;
    var wasClick = moved < CLICK_SLOP;
    dragging = false; pending = false; pointerId = null;
    if (wasClick) {
      state.velX = state.velY = 0;
      if (downCard) onPick(+downCard.dataset.idx, downCard.querySelector("figure"));
    }
    downCard = null;
  }

  function bindEvents() {
    stage.addEventListener("pointerdown", onDown);
    stage.addEventListener("pointermove", onMove);
    stage.addEventListener("pointerup", onUp);
    stage.addEventListener("pointercancel", function () { dragging = false; pending = false; pointerId = null; });
    stage.addEventListener("dragstart", function (e) { e.preventDefault(); });

    window.addEventListener("resize", function () { layout(false); });
    window.addEventListener("orientationchange", function () { setTimeout(function () { layout(true); }, 220); });
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", function () { layout(false); });
    }
  }

  window.Sphere = {
    init: function (opts) {
      onPick = opts.onPick || onPick;
      onScrollState = opts.onScrollState || onScrollState;
      var imgs = build(opts.photos, opts.thumbSrc);
      layout(true);
      bindEvents();
      frame();                                 // one synchronous frame first
      if (!state.running) { state.running = true; requestAnimationFrame(loop); }
      return imgs;
    },
    relayout: function () { layout(true); frame(); },
    focus: function (idx) { state.focused = idx; state.frozen = idx >= 0; },
    card: function (idx) { return cards[idx] ? cards[idx].fig : null; }
  };
})();
