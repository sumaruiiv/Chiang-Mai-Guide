/* Interface strings (EN / TH) and the language switcher.
   Elements use data-i18n="key" (text) or data-i18n-html="key" (allows **bold**). */

(function () {
  "use strict";

  var STRINGS = {
    en: {
      "meta.title": "Chiang Mai Field Guide — Discover Chiang Mai for Yourself",
      "splash.tag": "Field Guide 2026",
      "nav.menu": "Menu",
      "nav.open": "Open menu",
      "nav.close": "Close menu",
      "nav.places": "Places",
      "nav.map": "Map",
      "nav.plan": "Plan Your Trip",
      "nav.credits": "Photo Credits",
      "nav.about": "About",
      "nav.archive": "Photo Sphere",
      "hero.headline": ["Discover", "Chiang Mai", "for", "Yourself"],
      "hero.name": "Chiang Mai Field Guide",
      "hero.bio": "Fourteen real places checked for 2026: temples, trails, markets and waterfalls, with **prices, opening hours, coordinates** and honest notes for visitors and foreign residents.",
      "hero.cue": "Drag to rotate · Scroll to explore",
      "hero.colophon": "Field Guide 2026",
      "hero.grid": "Toggle grid view",
      "hero.down": "Explore the guide",

      "about.kicker": "About this guide",
      "about.title": "Everything you need to **go and do it** — not just look at it.",
      "about.lead": "Chiang Mai rewards people who go out and explore. For each place we answer the **six questions** a visitor or new resident actually asks, then give you the coordinates to get there.",
      "q.what": "What can I do?",
      "q.what.d": "The real activities and experiences.",
      "q.when": "Where & when?",
      "q.when.d": "Location, opening hours and how to get there.",
      "q.cost": "How much?",
      "q.cost.d": "Real costs in Thai Baht and what they include.",
      "q.who": "Who is it for?",
      "q.who.d": "Beginner-friendly? What to prepare?",
      "q.join": "How do I join?",
      "q.join.d": "Walk-in, booking or contact.",
      "q.why": "Why go?",
      "q.why.d": "Our honest review and tips.",
      "stat.places": "Places",
      "stat.photos": "Real photos",
      "stat.cats": "Categories",
      "stat.langs": "Languages",

      "places.kicker": "The places",
      "places.title": "Fourteen places worth your time",
      "places.lead": "Filter by what you enjoy. Tap any photo to see it large with its credit.",
      "filter.all": "All",
      "filter.family": "Family-friendly",
      "label.hours": "Opening hours",
      "label.price": "Price",
      "label.time": "Time needed",
      "label.distance": "Distance",
      "label.what": "What to do",
      "label.who": "Who it's for",
      "label.prepare": "What to prepare",
      "label.join": "How to join",
      "label.getting": "Getting there",
      "label.review": "Our review",
      "label.tips": "Tips",
      "label.rating": "Our rating",
      "label.coords": "Coordinates",
      "label.maps": "Open in Google Maps",
      "label.directions": "Directions",
      "label.copy": "Copy",
      "label.copied": "Copied",
      "label.official": "Official website",
      "label.photo": "Photo",
      "label.family": "Family-friendly",
      "label.showmap": "Show on map",
      "label.readguide": "Read the guide",
      "label.close": "Close",
      "label.of": "of",
      "places.empty": "No places match this filter.",

      "map.kicker": "Map",
      "map.title": "Every place, exactly located",
      "map.lead": "Choose a place to show it on the map. Coordinates are in decimal degrees (WGS84) and open directly in Google Maps.",

      "plan.kicker": "Plan your trip",
      "plan.title": "Practical things to know before you go",
      "plan.seasons": "When to go",
      "plan.seasons.lead": "Chiang Mai has three seasons. Tap a month to see what to expect.",
      "plan.itin": "Three-day plan",
      "plan.food": "Eat like a local",
      "plan.fest": "Festivals",
      "plan.disclaimer": "Prices and hours were checked in **September 2026** and change often. Please confirm on arrival, especially for national parks and temples.",
      "months": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],

      "credits.kicker": "Photo credits",
      "credits.title": "Real photographs, properly credited",
      "credits.lead": "Every photograph shows the actual place. All images come from **Wikimedia Commons** under Creative Commons licences; they were resized for the web. Tap an author or licence to see the original source.",
      "credits.col.photo": "Photo",
      "credits.col.place": "Place",
      "credits.col.author": "Author",
      "credits.col.license": "Licence",
      "credits.col.source": "Source",
      "credits.view": "View original",

      "footer.created": "Created by",
      "footer.name": "Ms. Nichapa Rungsakulsongsang",
      "footer.nameth": "(นางสาวณิชาภา รุ้สกุลส่องแสง)",
      "footer.id": "Student ID",
      "footer.course": "Course project · 009212",
      "footer.note": "An information website — no bookings or accounts. Photos © their authors, licensed under Creative Commons via Wikimedia Commons.",
      "footer.top": "Back to top",
      "lang.switch": "Switch language"
    },

    th: {
      "meta.title": "คู่มือเที่ยวเชียงใหม่ — ออกไปค้นพบเชียงใหม่ด้วยตัวเอง",
      "splash.tag": "คู่มือภาคสนาม 2569",
      "nav.menu": "เมนู",
      "nav.open": "เปิดเมนู",
      "nav.close": "ปิดเมนู",
      "nav.places": "สถานที่",
      "nav.map": "แผนที่",
      "nav.plan": "วางแผนการเดินทาง",
      "nav.credits": "เครดิตภาพ",
      "nav.about": "เกี่ยวกับ",
      "nav.archive": "ทรงกลมภาพถ่าย",
      "hero.headline": ["ออกไป", "ค้นพบ", "เชียงใหม่", "ด้วย", "ตัวเอง"],
      "hero.name": "คู่มือเที่ยวเชียงใหม่",
      "hero.bio": "สถานที่จริง 14 แห่งที่ตรวจสอบข้อมูลปี 2569 ทั้งวัด เส้นทางเดินป่า ตลาด และน้ำตก พร้อม**ราคา เวลาเปิด-ปิด พิกัด** และคำแนะนำตรงไปตรงมาสำหรับนักท่องเที่ยวและชาวต่างชาติที่พำนักอยู่",
      "hero.cue": "ลากเพื่อหมุน · เลื่อนเพื่อสำรวจ",
      "hero.colophon": "คู่มือภาคสนาม 2569",
      "hero.grid": "สลับมุมมองตาราง",
      "hero.down": "เริ่มอ่านคู่มือ",

      "about.kicker": "เกี่ยวกับคู่มือนี้",
      "about.title": "ทุกอย่างที่ต้องรู้เพื่อ**ออกไปทำจริง** ไม่ใช่แค่ดูรูป",
      "about.lead": "เชียงใหม่ให้รางวัลกับคนที่ออกไปสำรวจ ทุกสถานที่ในคู่มือนี้ตอบ**คำถามหกข้อ**ที่นักท่องเที่ยวและผู้พำนักใหม่อยากรู้จริง ๆ พร้อมพิกัดสำหรับเดินทาง",
      "q.what": "ที่นี่ทำอะไรได้?",
      "q.what.d": "กิจกรรมและประสบการณ์จริง",
      "q.when": "ไปที่ไหน / เมื่อไร?",
      "q.when.d": "สถานที่ วันเวลา และวิธีเดินทาง",
      "q.cost": "ราคาเท่าไร?",
      "q.cost.d": "ค่าใช้จ่ายจริงเป็นเงินบาทและสิ่งที่รวม",
      "q.who": "เหมาะกับใคร?",
      "q.who.d": "มือใหม่ได้ไหม ต้องเตรียมอะไร",
      "q.join": "จะเข้าร่วมอย่างไร?",
      "q.join.d": "Walk-in จองล่วงหน้า หรือติดต่อ",
      "q.why": "ทำไมควรไป?",
      "q.why.d": "รีวิวตรงไปตรงมาและเคล็ดลับ",
      "stat.places": "สถานที่",
      "stat.photos": "ภาพถ่ายจริง",
      "stat.cats": "หมวดหมู่",
      "stat.langs": "ภาษา",

      "places.kicker": "สถานที่",
      "places.title": "สิบสี่สถานที่ที่คุ้มค่ากับเวลาของคุณ",
      "places.lead": "เลือกตามสิ่งที่คุณชอบ แตะรูปใดก็ได้เพื่อดูภาพใหญ่พร้อมเครดิต",
      "filter.all": "ทั้งหมด",
      "filter.family": "เหมาะกับครอบครัว",
      "label.hours": "เวลาเปิด-ปิด",
      "label.price": "ราคา",
      "label.time": "เวลาที่ใช้",
      "label.distance": "ระยะทาง",
      "label.what": "ทำอะไรได้บ้าง",
      "label.who": "เหมาะกับใคร",
      "label.prepare": "สิ่งที่ต้องเตรียม",
      "label.join": "วิธีเข้าร่วม",
      "label.getting": "การเดินทาง",
      "label.review": "รีวิวของเรา",
      "label.tips": "เคล็ดลับ",
      "label.rating": "คะแนนของเรา",
      "label.coords": "พิกัด",
      "label.maps": "เปิดใน Google Maps",
      "label.directions": "นำทาง",
      "label.copy": "คัดลอก",
      "label.copied": "คัดลอกแล้ว",
      "label.official": "เว็บไซต์ทางการ",
      "label.photo": "ภาพ",
      "label.family": "เหมาะกับครอบครัว",
      "label.showmap": "ดูบนแผนที่",
      "label.readguide": "อ่านคู่มือ",
      "label.close": "ปิด",
      "label.of": "จาก",
      "places.empty": "ไม่มีสถานที่ที่ตรงกับตัวกรองนี้",

      "map.kicker": "แผนที่",
      "map.title": "ทุกสถานที่ พร้อมพิกัดที่แม่นยำ",
      "map.lead": "เลือกสถานที่เพื่อแสดงบนแผนที่ พิกัดเป็นองศาทศนิยม (WGS84) และเปิดใน Google Maps ได้ทันที",

      "plan.kicker": "วางแผนการเดินทาง",
      "plan.title": "สิ่งที่ควรรู้ก่อนออกเดินทาง",
      "plan.seasons": "ช่วงเวลาที่ควรไป",
      "plan.seasons.lead": "เชียงใหม่มีสามฤดู แตะที่เดือนเพื่อดูว่าจะเจออะไร",
      "plan.itin": "แผนเที่ยว 3 วัน",
      "plan.food": "กินแบบคนท้องถิ่น",
      "plan.fest": "เทศกาล",
      "plan.disclaimer": "ราคาและเวลาเปิด-ปิดตรวจสอบเมื่อ**กันยายน 2569** และอาจเปลี่ยนแปลงได้ โปรดตรวจสอบอีกครั้งเมื่อไปถึง โดยเฉพาะอุทยานแห่งชาติและวัด",
      "months": ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."],

      "credits.kicker": "เครดิตภาพ",
      "credits.title": "ภาพถ่ายจริง พร้อมให้เครดิตอย่างถูกต้อง",
      "credits.lead": "ทุกภาพเป็นภาพของสถานที่จริง มาจาก **Wikimedia Commons** ภายใต้สัญญาอนุญาตครีเอทีฟคอมมอนส์ และถูกย่อขนาดสำหรับเว็บ แตะชื่อผู้ถ่ายหรือสัญญาอนุญาตเพื่อดูต้นฉบับ",
      "credits.col.photo": "ภาพ",
      "credits.col.place": "สถานที่",
      "credits.col.author": "ผู้ถ่ายภาพ",
      "credits.col.license": "สัญญาอนุญาต",
      "credits.col.source": "แหล่งที่มา",
      "credits.view": "ดูต้นฉบับ",

      "footer.created": "จัดทำโดย",
      "footer.name": "Ms. Nichapa Rungsakulsongsang",
      "footer.nameth": "(นางสาวณิชาภา รุ้สกุลส่องแสง)",
      "footer.id": "รหัสนักศึกษา",
      "footer.course": "โครงงานรายวิชา 009212",
      "footer.note": "เว็บไซต์ให้ข้อมูล ไม่มีระบบจองหรือสมาชิก ภาพถ่ายเป็นลิขสิทธิ์ของผู้ถ่ายแต่ละท่าน เผยแพร่ภายใต้สัญญาอนุญาตครีเอทีฟคอมมอนส์ผ่าน Wikimedia Commons",
      "footer.top": "กลับด้านบน",
      "lang.switch": "เปลี่ยนภาษา"
    }
  };

  var KEY = "cm-guide-lang";
  var listeners = [];
  var lang = "en";

  try {
    var saved = localStorage.getItem(KEY);
    if (saved === "en" || saved === "th") lang = saved;
  } catch (e) { /* storage blocked — keep default */ }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* Minimal markdown: **bold** only, everything else escaped. */
  function rich(s) {
    return escapeHtml(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  }

  function t(key) {
    var v = STRINGS[lang][key];
    return v === undefined ? STRINGS.en[key] : v;
  }

  /* Pick the current language from a { en, th } object. */
  function pick(obj) {
    if (!obj) return "";
    return obj[lang] || obj.en || "";
  }

  function apply(root) {
    root = root || document;
    root.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    root.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      el.innerHTML = rich(t(el.getAttribute("data-i18n-html")));
    });
    root.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
    });
  }

  function set(next) {
    if (next !== "en" && next !== "th") return;
    lang = next;
    try { localStorage.setItem(KEY, lang); } catch (e) {}
    document.documentElement.lang = lang;
    document.documentElement.setAttribute("data-lang", lang);
    document.title = t("meta.title");
    apply();
    listeners.forEach(function (fn) { fn(lang); });
  }

  window.I18N = {
    t: t,
    pick: pick,
    rich: rich,
    escape: escapeHtml,
    apply: apply,
    set: set,
    get lang() { return lang; },
    onChange: function (fn) { listeners.push(fn); }
  };
})();
