/* ==========================================================================
   OffyAI — Wires the GitHub release data into the page:
   hero badge, download card, changelog, and GitHub stats.
   ========================================================================== */

(() => {
  const els = {
    releaseBadge: document.getElementById("releaseBadge"),
    releaseBadgeText: document.getElementById("releaseBadgeText"),
    downloadBtn: document.getElementById("downloadBtn"),
    downloadHint: document.getElementById("downloadHint"),
    ddVersion: document.getElementById("ddVersion"),
    ddDate: document.getElementById("ddDate"),
    ddName: document.getElementById("ddName"),
    ddSize: document.getElementById("ddSize"),
    viewAllReleases: document.getElementById("viewAllReleases"),
    viewSource: document.getElementById("viewSource"),
    viewReleaseNotes: document.getElementById("viewReleaseNotes"),
    changelogVersion: document.getElementById("changelogVersion"),
    changelogDate: document.getElementById("changelogDate"),
    changelogTitle: document.getElementById("changelogTitle"),
    changelogBody: document.getElementById("changelogBody"),
    fullReleaseNotesLink: document.getElementById("fullReleaseNotesLink"),
    ghStars: document.getElementById("ghStars"),
    ghForks: document.getElementById("ghForks"),
    ghIssues: document.getElementById("ghIssues"),
  };

  let resolvedDownloadUrl = null;
  let downloadState = "loading";

  function setDownloadState(state) {
    downloadState = state;
    if (!els.downloadBtn) return;
    switch (state) {
      case "loading":
        els.downloadBtn.textContent = "Loading release…";
        els.downloadBtn.disabled = true;
        break;
      case "ready":
        els.downloadBtn.textContent = "Download Latest Windows Release";
        els.downloadBtn.disabled = false;
        break;
      case "unavailable":
        els.downloadBtn.textContent = "Download unavailable";
        els.downloadBtn.disabled = true;
        break;
    }
  }

  setDownloadState("loading");

  if (els.downloadBtn) {
    els.downloadBtn.addEventListener("click", () => {
      if (!resolvedDownloadUrl || els.downloadBtn.disabled) return;
      els.downloadBtn.textContent = "Downloading…";
      window.location.href = resolvedDownloadUrl;
      if (els.downloadHint) els.downloadHint.textContent = "Download started.";
      setTimeout(() => setDownloadState("ready"), 1800);
    });
  }

  async function init() {
    const urls = OffyGitHub.getUrls();
    document.querySelectorAll("[data-github-link]").forEach((link) => {
      const target = urls[link.dataset.githubLink];
      if (target) link.href = target;
    });

    try {
      const release = await OffyGitHub.getLatestRelease();
      const asset = OffyGitHub.pickWindowsAsset(release.assets);
      const version = release.tag_name || release.name || "Unknown";
      const dateStr = OffyGitHub.formatDate(release.published_at);

      if (els.releaseBadgeText) els.releaseBadgeText.textContent = `Latest release: ${version}`;
      if (els.releaseBadge) els.releaseBadge.href = release.html_url || els.releaseBadge.href;

      if (els.ddVersion) els.ddVersion.textContent = version;
      if (els.ddDate) els.ddDate.textContent = dateStr;

      if (els.viewAllReleases) els.viewAllReleases.href = `${release.html_url ? release.html_url.split("/tag/")[0] : els.viewAllReleases.href}`;
      if (els.viewReleaseNotes) els.viewReleaseNotes.href = release.html_url || els.viewReleaseNotes.href;
      if (els.fullReleaseNotesLink) els.fullReleaseNotesLink.href = release.html_url || els.fullReleaseNotesLink.href;

      if (els.changelogVersion) els.changelogVersion.textContent = version;
      if (els.changelogDate) els.changelogDate.textContent = dateStr;
      if (els.changelogTitle) els.changelogTitle.textContent = release.name || version;
      if (els.changelogBody) els.changelogBody.innerHTML = OffyGitHub.renderSafeMarkdown(release.body);

      if (asset) {
        resolvedDownloadUrl = asset.browser_download_url;
        if (els.ddName) els.ddName.textContent = asset.name;
        if (els.ddSize) els.ddSize.textContent = OffyGitHub.formatBytes(asset.size);
        if (els.downloadHint) els.downloadHint.textContent = `${asset.name} · ${OffyGitHub.formatBytes(asset.size)}`;
        setDownloadState("ready");
      } else {
        useUnavailable("Windows installer not detected in the latest release.");
      }
    } catch (err) {
      useUnavailable("Release information is temporarily unavailable.");
      if (els.releaseBadgeText) els.releaseBadgeText.textContent = "Release information unavailable";
    }

    fetchRepoStats();
  }

  function useUnavailable(message) {
    resolvedDownloadUrl = null;
    setDownloadState("unavailable");
    if (els.downloadHint) els.downloadHint.textContent = message;
    if (els.ddVersion) els.ddVersion.textContent = "Unavailable";
    if (els.ddDate) els.ddDate.textContent = "—";
    if (els.ddName) els.ddName.textContent = "—";
    if (els.ddSize) els.ddSize.textContent = "—";
    if (els.changelogTitle) els.changelogTitle.textContent = "Release information unavailable";
    if (els.changelogBody) els.changelogBody.innerHTML = "<p>Visit the GitHub releases page directly for the latest notes.</p>";
  }

  async function fetchRepoStats() {
    try {
      const repo = await OffyGitHub.getRepo();
      if (els.ghStars) els.ghStars.textContent = repo.stargazers_count ?? "—";
      if (els.ghForks) els.ghForks.textContent = repo.forks_count ?? "—";
      if (els.ghIssues) els.ghIssues.textContent = repo.open_issues_count ?? "—";
    } catch {
      const statsBlock = document.getElementById("githubStats");
      if (statsBlock) statsBlock.style.display = "none";
    }
  }

  init();
})();
