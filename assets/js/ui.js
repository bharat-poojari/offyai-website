/* ==========================================================================
   OffyAI — General UI behavior: nav, theme, accordion, showcase tabs,
   scroll-based active link + header state.
   ========================================================================== */

(() => {
  /* ---------- Theme toggle ---------- */
  const root = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");
  const THEME_KEY = "offyai-theme";

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    if (themeToggle) themeToggle.setAttribute("aria-pressed", theme === "light");
  }

  const savedTheme = localStorage.getItem(THEME_KEY);
  const prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
  applyTheme(savedTheme || (prefersLight ? "light" : "dark"));

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      applyTheme(next);
      localStorage.setItem(THEME_KEY, next);
    });
  }

  /* ---------- Mobile nav ---------- */
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navMenu.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Sticky header state ---------- */
  const header = document.getElementById("site-header");
  if (header) {
    const onScroll = () => {
      header.classList.toggle("scrolled", window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Active nav link on scroll ---------- */
  const sections = ["home", "features", "how-it-works", "performance", "models", "faq", "download"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);
  const navLinks = Array.from(document.querySelectorAll(".nav-link"));

  if (sections.length && navLinks.length && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
  }

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll(".accordion-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const panel = trigger.closest(".accordion-item").querySelector(".accordion-panel");
      const expanded = trigger.getAttribute("aria-expanded") === "true";
      trigger.setAttribute("aria-expanded", String(!expanded));
      if (panel) panel.hidden = expanded;
    });
  });

  /* ---------- Interactive product showcase tabs ---------- */
  const tabs = Array.from(document.querySelectorAll(".showcase-tab"));
  const panels = Array.from(document.querySelectorAll(".showcase-panel"));

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.panel;

      tabs.forEach((t) => {
        const isActive = t === tab;
        t.classList.toggle("active", isActive);
        t.setAttribute("aria-selected", String(isActive));
      });

      panels.forEach((panel) => {
        const isActive = panel.dataset.panel === target;
        panel.classList.toggle("active", isActive);
        panel.hidden = !isActive;
      });
    });
  });

  /* ---------- Reduced motion aware ambient metric animation ---------- */
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!prefersReducedMotion) {
    animateDemoMetrics();
    animatePerfDashboard();
  }

  function randomInRange(min, max) {
    return Math.round((Math.random() * (max - min) + min) * 10) / 10;
  }

  function animateDemoMetrics() {
    const cpu = document.getElementById("mCpu");
    const mem = document.getElementById("mMem");
    const gpu = document.getElementById("mGpu");
    const tok = document.getElementById("mTok");
    const polyline = document.getElementById("mockupPolyline");
    if (!cpu) return;

    setInterval(() => {
      cpu.textContent = `${randomInRange(30, 55)}%`;
      mem.textContent = `${randomInRange(5.8, 7.6)} GB`;
      gpu.textContent = `${randomInRange(25, 48)}%`;
      tok.textContent = `${randomInRange(22, 33)}`;

      if (polyline) {
        const points = [];
        for (let i = 0; i <= 10; i++) {
          points.push(`${i * 30},${randomInRange(8, 45)}`);
        }
        polyline.setAttribute("points", points.join(" "));
      }
    }, 2200);
  }

  function animatePerfDashboard() {
    const cpuVal = document.querySelector('[data-metric="cpu"]');
    const memVal = document.querySelector('[data-metric="mem"]');
    const gpuVal = document.querySelector('[data-metric="gpu"]');
    const tokVal = document.querySelector('[data-metric="tok"]');
    const respVal = document.querySelector('[data-metric="resp"]');
    const cpuFill = document.querySelector('[data-fill="cpu"]');
    const memFill = document.querySelector('[data-fill="mem"]');
    const gpuFill = document.querySelector('[data-fill="gpu"]');
    const chartLine = document.getElementById("perfChartLine");
    if (!cpuVal) return;

    setInterval(() => {
      const cpu = randomInRange(30, 58);
      const mem = randomInRange(45, 70);
      const gpu = randomInRange(20, 52);
      if (cpuVal) cpuVal.textContent = `${cpu}%`;
      if (gpuVal) gpuVal.textContent = `${gpu}%`;
      if (memVal) memVal.textContent = `${randomInRange(5.4, 8.1)} GB`;
      if (tokVal) tokVal.textContent = `${randomInRange(21, 34)} tok/s`;
      if (respVal) respVal.textContent = `${randomInRange(1.2, 2.4)}s`;
      if (cpuFill) cpuFill.style.width = `${cpu}%`;
      if (memFill) memFill.style.width = `${mem}%`;
      if (gpuFill) gpuFill.style.width = `${gpu}%`;

      if (chartLine) {
        const points = [];
        for (let i = 0; i <= 10; i++) {
          points.push(`${i * 80},${randomInRange(30, 130)}`);
        }
        chartLine.setAttribute("points", points.join(" "));
      }
    }, 2600);
  }
})();
