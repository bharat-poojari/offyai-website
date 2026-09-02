/* ==========================================================================
   OffyAI — GitHub Releases integration
   Fetches the latest release from the public GitHub API and updates the
   download / changelog / repo-stats UI. No API key required.
   ========================================================================== */

const CONFIG = {
  githubOwner: "bharat-poojari",
  githubRepo: "offyai",
  requestTimeoutMs: 8000
};

const OffyGitHub = (() => {
  const apiBase = `https://api.github.com/repos/${CONFIG.githubOwner}/${CONFIG.githubRepo}`;

  function getUrls() {
    const repository = `https://github.com/${CONFIG.githubOwner}/${CONFIG.githubRepo}`;
    return {
      repository,
      releases: `${repository}/releases`,
      latestRelease: `${repository}/releases/latest`,
      issues: `${repository}/issues`,
      newIssue: `${repository}/issues/new`
    };
  }

  function withTimeout(promise, ms) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), ms);
    return { signal: controller.signal, cleanup: () => clearTimeout(timer) };
  }

  async function fetchJSON(url) {
    const { signal, cleanup } = withTimeout(null, CONFIG.requestTimeoutMs);
    try {
      const res = await fetch(url, { headers: { Accept: "application/vnd.github+json" }, signal });
      if (!res.ok) throw new Error(`GitHub API responded with ${res.status}`);
      return await res.json();
    } finally {
      cleanup();
    }
  }

  function formatBytes(bytes) {
    if (!bytes && bytes !== 0) return "Unknown";
    const units = ["B", "KB", "MB", "GB"];
    let i = 0;
    let value = bytes;
    while (value >= 1024 && i < units.length - 1) {
      value /= 1024;
      i++;
    }
    return `${value.toFixed(value < 10 && i > 0 ? 1 : 0)} ${units[i]}`;
  }

  function formatDate(iso) {
    if (!iso) return "Unknown";
    try {
      return new Date(iso).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
    } catch {
      return iso;
    }
  }

  function pickWindowsAsset(assets) {
    if (!Array.isArray(assets) || assets.length === 0) return null;
    const excluded = [".blockmap", ".yml", ".yaml", ".zip.sig"];
    const candidates = assets.filter((a) => {
      const name = (a.name || "").toLowerCase();
      if (excluded.some((ext) => name.endsWith(ext))) return false;
      if (name.includes("source")) return false;
      return name.endsWith(".exe");
    });
    if (candidates.length === 0) return null;
    // Prefer an asset that looks like an installer / setup file if multiple exist.
    const setupPreferred = candidates.find((a) => /setup|install/i.test(a.name));
    return setupPreferred || candidates[0];
  }

  /**
   * Very small, safe subset of Markdown -> text/HTML rendering.
   * Escapes everything first, then re-introduces a handful of simple tags
   * so we never inject raw GitHub-provided HTML into the page.
   */
  function renderSafeMarkdown(markdown) {
    if (!markdown) return "<p>No release notes were provided.</p>";
    const escapeHtml = (str) =>
      str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");

    const lines = markdown.split(/\r?\n/).slice(0, 40); // keep it short on the landing page
    const html = [];
    let inList = false;

    for (let rawLine of lines) {
      let line = escapeHtml(rawLine.trim());
      if (line === "") continue;

      const isBullet = /^[-*]\s+/.test(line);
      const isHeading = /^#{1,6}\s+/.test(line);

      if (isHeading) {
        if (inList) { html.push("</ul>"); inList = false; }
        line = line.replace(/^#{1,6}\s+/, "");
        html.push(`<h4>${line}</h4>`);
        continue;
      }

      if (isBullet) {
        if (!inList) { html.push("<ul>"); inList = true; }
        line = line.replace(/^[-*]\s+/, "");
        html.push(`<li>${boldify(line)}</li>`);
        continue;
      }

      if (inList) { html.push("</ul>"); inList = false; }
      html.push(`<p>${boldify(line)}</p>`);
    }
    if (inList) html.push("</ul>");
    return html.join("") || "<p>No release notes were provided.</p>";

    function boldify(text) {
      return text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    }
  }

  async function getLatestRelease() {
    return fetchJSON(`${apiBase}/releases/latest`);
  }

  async function getRepo() {
    return fetchJSON(apiBase);
  }

  return { getLatestRelease, getRepo, pickWindowsAsset, formatBytes, formatDate, renderSafeMarkdown, getUrls, CONFIG };
})();
