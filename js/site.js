// Theme toggle. Follows the system setting until the visitor picks one.
(function () {
  var root = document.documentElement;
  var btn = document.querySelector("[data-theme-toggle]");
  if (!btn) return;

  function systemDark() {
    return !!(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
  }
  function current() {
    return root.getAttribute("data-theme") || (systemDark() ? "dark" : "light");
  }
  function paint() {
    btn.textContent = current() === "dark" ? "Switch to light" : "Switch to dark";
  }

  btn.addEventListener("click", function () {
    var next = current() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    paint();
  });
  paint();
})();

// Hero email line. "iga" stays and the back of the address types through my four addresses:
//   iga + @sakumedis.id, iga + @pukulenam.id, iga + narendrainp@telkomuniversity.ac.id, iga + .narendra@gmail.com
// Loops, with a Pause button (it stops at the end of the current address). Not animated when the
// visitor prefers reduced motion; the first address stays on screen.
(function () {
  var root = document.querySelector("[data-mail]");
  var tail = root && root.querySelector(".tail");
  var btn = document.querySelector("[data-mail-pause]");
  if (!tail || !btn) return;
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var TAILS = ["@sakumedis.id", "@pukulenam.id", "narendrainp@telkomuniversity.ac.id", ".narendra@gmail.com"];
  var TYPE_MS = 45, ERASE_MS = 22, HOLD_MS = 1700;
  var paused = false, i = 0;

  function wait(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }
  async function erase() {
    while (tail.textContent.length) { tail.textContent = tail.textContent.slice(0, -1); await wait(ERASE_MS); }
  }
  async function type(text) {
    for (var n = 1; n <= text.length; n++) { tail.textContent = text.slice(0, n); await wait(TYPE_MS); }
  }

  btn.hidden = false;
  btn.addEventListener("click", function () {
    paused = !paused;
    btn.textContent = paused ? "Play" : "Pause";
    root.classList.toggle("is-paused", paused);
  });

  (async function run() {
    root.classList.add("typing");
    for (;;) {
      await wait(HOLD_MS);
      while (paused) await wait(150);
      i = (i + 1) % TAILS.length;
      await erase();
      await type(TAILS[i]);
    }
  })();
})();
