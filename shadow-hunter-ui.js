/* SHADOW HUNTER UI v1.3 – optional helpers. No dependencies.
   SH.toast("Rule #112 disabled", "ok" | "crit" | "warn" | "info")
   SH.tabs(containerElement)       – click handling for .sh-tabs (auto for [data-sh-tabs])
*/
(function () {
  "use strict";

  function toast(message, kind, ms) {
    var box = document.querySelector(".sh-toasts");
    if (!box) {
      box = document.createElement("div");
      box.className = "sh-toasts";
      box.setAttribute("role", "status");
      box.setAttribute("aria-live", "polite");
      document.body.appendChild(box);
    }
    var t = document.createElement("div");
    t.className = "sh-toast" + (kind && kind !== "ok" ? " is-" + kind : "");
    t.textContent = message;
    box.appendChild(t);
    setTimeout(function () { t.remove(); }, ms || 3200);
    return t;
  }

  function tabs(root) {
    var list = root.querySelectorAll(".sh-tab");
    list.forEach(function (tab) {
      tab.setAttribute("role", "tab");
      tab.addEventListener("click", function () {
        list.forEach(function (t) {
          var on = t === tab;
          t.classList.toggle("is-active", on);
          t.setAttribute("aria-selected", on ? "true" : "false");
          var panel = t.getAttribute("aria-controls") && document.getElementById(t.getAttribute("aria-controls"));
          if (panel) panel.hidden = !on;
        });
      });
    });
  }

  function init() {
    document.querySelectorAll("[data-sh-tabs]").forEach(tabs);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();

  window.SH = { toast: toast, tabs: tabs };
})();
