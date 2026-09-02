# OffyAI Website

A static marketing site for **OffyAI**, a local-first Windows AI desktop application. This repository publishes the project landing page and automatically pulls the latest release data from the public GitHub API.

## Project links

- Repository: https://github.com/bharat-poojari/offyai
- Latest release: https://github.com/bharat-poojari/offyai/releases/latest
- GitHub Pages site: https://bharat-poojari.github.io/offyai/

## What this site does

This single-page site:
- explains the product and local AI workflow
- fetches the latest Windows installer from the GitHub Releases API
- shows live repo stats
- renders the latest release notes safely in the browser
- works as a static GitHub Pages site without a build step

## GitHub configuration

The live repo details are already configured in `assets/js/github.js`:

```js
const CONFIG = {
  githubOwner: "bharat-poojari",
  githubRepo: "offyai",
  requestTimeoutMs: 8000
};
```

## Deployment

This site is designed to be deployed directly to GitHub Pages from the repository root without any framework or build pipeline.

## SEO metadata

The page metadata and sitemap currently point to the GitHub Pages URL for this repository:

- https://bharat-poojari.github.io/offyai/
- https://bharat-poojari.github.io/offyai/sitemap.xml

## Notes

- The website prefers `.exe` Windows installer assets from the latest GitHub release.
- If GitHub Release data or a Windows installer is unavailable, the download action is disabled instead of guessing an installer URL.
- The release notes are rendered in a safe, minimal Markdown subset to avoid raw HTML injection.
