/* Shared behaviour for every acta-legal.ro page: theme switch, header glass on scroll,
   section reveal, Umami helper. The inline <head> snippet has already applied a stored
   theme and added the `js` class; window.actaSite tells it this file loaded. */
(function () {
  "use strict";
  var root = document.documentElement;
  window.actaSite = true;

  // Every event goes through actaTrack, a no-op when Umami is unavailable
  // (ad-blocked, offline, still loading, or opted out via /exclude/).
  window.actaTrack = function (name, data) {
    if (window.umami && typeof window.umami.track === "function") {
      window.umami.track(name, data);
    }
  };
  document.querySelectorAll("[data-track]").forEach(function (el) {
    el.addEventListener("click", function () { window.actaTrack(el.getAttribute("data-track")); });
  });

  /* ----- theme: system by default, the switch overrides and is remembered ----- */
  var dark = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
  function effectiveTheme() {
    var set = root.getAttribute("data-theme");
    if (set === "light" || set === "dark") return set;
    return dark && dark.matches ? "dark" : "light";
  }
  var toggle = document.querySelector(".theme-toggle");
  function label() {
    if (!toggle) return;
    toggle.setAttribute("aria-label", effectiveTheme() === "dark" ? "Temă deschisă" : "Temă întunecată");
  }
  if (toggle) {
    label();
    toggle.addEventListener("click", function () {
      var next = effectiveTheme() === "dark" ? "light" : "dark";
      root.classList.add("theme-anim");
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("acta-theme", next); } catch (e) { /* private mode: not remembered */ }
      label();
      window.actaTrack("theme-" + next);
      setTimeout(function () { root.classList.remove("theme-anim"); }, 350);
    });
    if (dark && dark.addEventListener) dark.addEventListener("change", label);
  }

  /* ----- header turns to glass once the page scrolls ----- */
  var head = document.querySelector(".site-head");
  if (head) {
    var onScrollHead = function () { head.classList.toggle("scrolled", window.scrollY > 8); };
    window.addEventListener("scroll", onScrollHead, { passive: true });
    onScrollHead();
  }

  /* ----- reveal: fade + rise as each element enters the viewport ----- */
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("in"); });
  }
})();
