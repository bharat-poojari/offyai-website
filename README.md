<p align="center">
  <img
    src="https://raw.githubusercontent.com/bharat-poojari/offyai/main/offyai.png"
    alt="OffyAI logo"
    width="75"
  />
</p>
<h1 align="center">OffyAI</h1>

<p align="center">
  <strong>Private. Fast. Local. Yours.</strong>
</p>

<p align="center">
  A local-first Windows AI desktop application for discovering, managing, and interacting with local AI models.
</p>

<p align="center">
  <img
    src="https://raw.githubusercontent.com/bharat-poojari/offyai-website/main/public/banner.png"
    alt="OffyAI Banner"
    width="500"
  />
</p>

<p align="center">
  <a href="https://github.com/bharat-poojari/offyai/releases/latest">
    <img
      src="https://img.shields.io/github/v/release/bharat-poojari/offyai?display_name=tag&sort=semver&style=for-the-badge&label=Latest%20Release"
      alt="Latest release"
    >
  </a>
  <a href="https://github.com/bharat-poojari/offyai/releases">
    <img
      src="https://img.shields.io/github/downloads/bharat-poojari/offyai/total?style=for-the-badge&label=Downloads"
      alt="Total downloads"
    >
  </a>
  <a href="https://github.com/bharat-poojari/offyai/blob/main/LICENSE">
    <img
      src="https://img.shields.io/github/license/bharat-poojari/offyai?style=for-the-badge&label=License"
      alt="License"
    >
  </a>
</p>

<p align="center">
  <a href="https://offyai.vercel.app/">Website</a>
  &nbsp;•&nbsp;
  <a href="https://github.com/bharat-poojari/offyai/releases/latest">Download</a>
  &nbsp;•&nbsp;
  <a href="https://github.com/bharat-poojari/offyai/issues">Issues</a>
  &nbsp;•&nbsp;
  <a href="https://github.com/bharat-poojari/offyai/discussions">Discussions</a>
</p>

---

## What is OffyAI?

**OffyAI** is a local-first AI desktop application for Windows built around a simple idea:

> **AI should be useful without forcing every interaction through the cloud.**

OffyAI brings a clean desktop workflow for discovering compatible models, downloading and managing them, configuring local inference, and having conversations with locally available AI systems.

It is designed for people who care about **privacy, control, offline-capable workflows, and transparent local resource usage**.
<div align="center">

<h3>OffyAI in Action</h3>

<table>
  <tr>
    <td><img src="https://raw.githubusercontent.com/bharat-poojari/offyai-website/main/public/1.png" alt="OffyAI Screenshot 1" width="2500"></td>
    <td><img src="https://raw.githubusercontent.com/bharat-poojari/offyai-website/main/public/2.png" alt="OffyAI Screenshot 2" width="2500"></td>
    <td><img src="https://raw.githubusercontent.com/bharat-poojari/offyai-website/main/public/3.png" alt="OffyAI Screenshot 3" width="2500"></td>
    <td><img src="https://raw.githubusercontent.com/bharat-poojari/offyai-website/main/public/4.png" alt="OffyAI Screenshot 4" width="2500"></td>
    <td><img src="https://raw.githubusercontent.com/bharat-poojari/offyai-website/main/public/5.png" alt="OffyAI Screenshot 5" width="2500"></td>
    <td><img src="https://raw.githubusercontent.com/bharat-poojari/offyai-website/main/public/6.png" alt="OffyAI Screenshot 6" width="2500"></td>
  </tr>
</table>

</div>
---

## Why OffyAI?

Cloud AI is convenient. Local AI gives you a different kind of control.

| Capability                                 | OffyAI |
| :----------------------------------------- | :----: |
| Local-first AI workflow                    |    ✅   |
| Windows desktop application                |    ✅   |
| Local model discovery                      |    ✅   |
| Model management                           |    ✅   |
| Conversational interface                   |    ✅   |
| Configurable inference                     |    ✅   |
| Local resource visibility                  |    ✅   |
| Cloud AI API required for every local chat |    ❌   |
| Build step required for the website        |    ❌   |

> **Your machine. Your models. Your workflow.**

---

## ✨ Core Experience

### 🖥️ Desktop-first

A dedicated Windows application rather than another browser tab. The product is designed around a desktop workflow for local AI.

### 🔒 Local-first by design

When you use a fully local model/runtime path, inference can happen on your own machine instead of sending every prompt to a hosted AI provider.

### 🤖 Model-centric

Discover, select, configure, and manage compatible models from a single workflow instead of treating models as opaque backend dependencies.

### ⚙️ Tunable inference

Local AI performance is highly hardware-dependent. OffyAI is designed to expose the settings that matter so users can tune the experience to their system.

### 📊 Resource visibility

Local inference can be demanding. Performance and resource information help users understand what their machine is doing while a model is running.

### 🌐 Connected when useful

The core experience is local-first, while selected features can use the internet for things such as release discovery, model discovery, downloads, or external integrations.

---

## 🧭 How it works

```text
                    ┌─────────────────────┐
                    │       OffyAI        │
                    │   Windows Desktop   │
                    └──────────┬──────────┘
                               │
               ┌───────────────┼───────────────┐
               │               │               │
               ▼               ▼               ▼
        ┌────────────┐  ┌────────────┐  ┌──────────────┐
        │   Models   │  │    Chat    │  │   Settings   │
        │ Discover & │  │  Local AI  │  │   Runtime &  │
        │   Manage   │  │ Interaction│  │  Generation  │
        └─────┬──────┘  └──────┬─────┘  └──────┬───────┘
              │                │               │
              └────────────────┼───────────────┘
                               ▼
                     ┌──────────────────┐
                     │ Local AI Runtime │
                     └────────┬─────────┘
                              ▼
                     ┌──────────────────┐
                     │  Local Model(s)  │
                     └──────────────────┘
```

The exact runtime and model compatibility are release-dependent. Check the current release documentation and application UI for the supported configuration of your version.

---

## 🚀 Get Started

### Download the latest Windows release

The easiest way to get OffyAI is through the latest GitHub release:

**[→ Download OffyAI](https://github.com/bharat-poojari/offyai/releases/latest)**

The project prefers a Windows `.exe` installer asset from the latest release. When release metadata or a compatible installer is unavailable, the website intentionally avoids guessing a download URL.

### Typical first-run flow

```text
Download
   ↓
Install / Launch
   ↓
Select or configure a local model
   ↓
Adjust runtime settings
   ↓
Start chatting
```

---

## 🧠 Local AI, without the mystery

Local inference behaves differently from hosted AI. The practical experience depends on your hardware and the model you choose.

Key factors include:

* **RAM** — determines how much model state your system can keep in memory.
* **VRAM** — can materially affect GPU-accelerated inference.
* **CPU** — matters for CPU inference and portions of model execution.
* **Model size** — larger models generally demand more memory and compute.
* **Quantization** — can reduce memory requirements with a quality/performance trade-off.
* **Context length** — larger contexts generally increase memory and compute requirements.
* **Runtime settings** — threads, GPU offload, and generation parameters can substantially change performance.

### GGUF

OffyAI's local model workflow may support **GGUF** models when the configured inference runtime supports them. GGUF is a common model container format for local inference and quantized model distribution.

Always verify the model/runtime compatibility for the specific OffyAI release you are using.

---

## 📦 Model Discovery & Library

The project website includes a model library connected to the **public Hugging Face API** to help users discover compatible models.

This gives the website a useful split between:

```text
                    OffyAI Website
                          │
          ┌───────────────┴───────────────┐
          │                               │
          ▼                               ▼
   GitHub Releases                  Hugging Face API
   Latest app build                 Model discovery
          │                               │
          │                               │
          ▼                               ▼
 Latest `.exe`          Model discovery and metadata
 Release notes
          │                               │
          └───────────────┬───────────────┘
                          ▼
                    User chooses
                    what to use
```

The website does not assume a model is compatible merely because it exists on Hugging Face. Compatibility still depends on the model format, runtime, hardware, and current OffyAI support.

---

## 🔐 Privacy & local-first architecture

Privacy is a core design goal of OffyAI.

With a fully local inference path, the intended flow is:

```text
Prompt
  │
  ▼
OffyAI
  │
  ▼
Local Runtime
  │
  ▼
Local Model
  │
  ▼
Response
```

That means a cloud AI provider is not inherently required for each local inference request.

However, **local-first does not mean “the application never uses the internet.”** Depending on the version and enabled features, connectivity may still be used for things such as:

* Downloading the application
* Downloading or discovering models
* Checking GitHub releases
* Website functionality
* External integrations
* Update-related operations

For a precise privacy assessment, inspect the specific release and any integrations you enable.

---

## 🌐 The OffyAI website

The project landing page is a lightweight static site built to stay simple and deployment-friendly.

**Website:** https://offyai.vercel.app/

### What the website does

* Presents the OffyAI product and local-first workflow
* Provides a model discovery library using the public Hugging Face API
* Pulls the latest release data from the public GitHub API
* Finds the preferred Windows `.exe` asset from the latest release
* Shows live repository statistics
* Renders the latest release notes in the browser
* Uses a deliberately small, safe Markdown subset for release notes
* Runs as a static site without a build pipeline

### GitHub configuration

The website's GitHub integration is configured around:

```js
const CONFIG = {
  githubOwner: "bharat-poojari",
  githubRepo: "offyai",
  requestTimeoutMs: 8000
};
```

### Deployment model

The website is intentionally designed for direct static hosting and can be deployed from the repository root without a framework build step.

---

## 📈 Website data flow

```text
                         OffyAI Website
                               │
        ┌──────────────────────┼──────────────────────┐
        │                      │                      │
        ▼                      ▼                      ▼
  GitHub Releases       GitHub Repository      Hugging Face
        │                      │                  Public API
        │                      │                      │
        ▼                      ▼                      ▼
 Latest `.exe`          Live repo stats      Model discovery
 Release notes
        │                      │                      │
        └──────────────────────┼──────────────────────┘
                               ▼
                         Browser UI
```

The browser only displays data that can be retrieved successfully. The site is intentionally defensive around missing release data and missing Windows installer assets.

---

## 🧩 Project structure

A simplified view of the website portion of the repository:

```text
.
├── assets/
│   └── js/
│       └── github.js
├── offyai.png
├── README.md
├── sitemap.xml
└── ...
```

The repository also contains the application itself and its supporting project files. The exact structure may evolve as the project grows.

---

## 💻 Hardware guidance

There is no single hardware requirement that makes sense for every local model.

### Practical baseline

For a usable local-AI setup, a reasonable starting point is:

* Windows 10 or Windows 11
* Modern x64 CPU
* 8 GB RAM or more
* Enough storage for the models you intend to use

### More comfortable setup

For larger models and smoother experimentation:

* 16 GB+ RAM
* SSD storage
* Modern multi-core CPU
* Dedicated GPU with sufficient VRAM when supported by the runtime

These are **general guidance, not hard application requirements**. Model choice is usually the dominant factor in real resource usage.

---

## ⚙️ Understanding the important settings

The exact controls vary by release, but local inference commonly exposes settings such as:

| Setting              | What it affects                                       |
| :------------------- | :---------------------------------------------------- |
| Temperature          | Randomness / variation of generated text              |
| Context length       | Amount of conversation/context available to the model |
| Max output tokens    | Maximum generated response length                     |
| CPU threads          | CPU-side parallelism when supported                   |
| GPU layers / offload | How much work can be moved to the GPU                 |
| Sampling parameters  | Token-selection behavior during generation            |
| System prompt        | High-level behavioral instructions for the model      |

A larger or more aggressive configuration is not automatically better. The right values depend on the model and your hardware.

---

## 📊 Performance expectations

Local AI performance is highly variable.

A response can be slower because of:

* A larger model
* CPU-only inference
* Limited VRAM
* High context length
* High output length
* Conservative GPU offload
* Memory pressure
* Runtime-specific overhead

When performance is poor, the most effective first experiment is often to test a smaller model or lower-memory configuration rather than simply increasing every setting.

---

## 🛠️ Troubleshooting

### OffyAI does not start

Try checking:

1. You are using the latest release.
2. Windows Security or antivirus has not blocked a required file.
3. The installation or extracted application files are complete.
4. Relevant application logs are available.
5. Reinstalling the current release resolves the problem.

### A model will not load

Check:

* Model format and runtime compatibility
* Model file integrity
* Available RAM
* Available VRAM
* Context length
* GPU/offload configuration
* Model quantization

### Generation is too slow

Check whether you are:

* Running on CPU only
* Using a model that is too large for your hardware
* Using a very large context window
* Generating unusually long outputs
* Constrained by RAM or VRAM

### The website cannot find the download

The website intentionally disables the download action rather than constructing an unverified installer URL.

Check the latest GitHub release directly:

**[→ Open GitHub Releases](https://github.com/bharat-poojari/offyai/releases/latest)**

---

## 🧪 Development

Clone the repository:

```bash
git clone https://github.com/bharat-poojari/offyai.git
cd offyai
```

The repository currently contains both the application and its website assets. Because development commands can change as the project evolves, use the project files and release-specific documentation as the source of truth for the current build workflow.

---

## 🏗️ Website deployment

The website is deliberately framework-free and can be deployed as static files.

```text
Repository root
      │
      ▼
Static HTML / CSS / JS
      │
      ▼
Static hosting
      │
      ├── GitHub API
      └── Hugging Face API
```

No server-side application is required for the website's release-data workflow.

---

## 🤝 Contributing

Contributions are welcome.

A good contribution should be:

* Focused on one problem or feature
* Tested before submission
* Consistent with the existing architecture
* Accompanied by documentation when behavior changes

Typical workflow:

```bash
git checkout -b feature/my-feature
# make changes
git add .
git commit -m "Add my feature"
git push origin feature/my-feature
```

Then open a pull request against the repository's `main` branch.

For larger changes, opening an issue first can help establish scope and avoid duplicated work.

---

## 🐛 Reporting bugs

When opening an issue, include enough detail to reproduce the problem.

Useful information includes:

* OffyAI version
* Windows version
* CPU
* GPU
* RAM
* Model name and format
* Quantization, when relevant
* Runtime configuration
* Steps to reproduce
* Expected behavior
* Actual behavior
* Error messages
* Relevant logs or screenshots

A reproducible report is much easier to diagnose than a description such as “it does not work.”

---

## 🔒 Security

Do not publish sensitive exploit details in a public issue before they have been responsibly assessed.

Use the repository's available security-reporting mechanism or GitHub's security features where applicable.

---

## 🗺️ Roadmap

The project is actively evolving. Areas that may expand over time include:

* [ ] Better model discovery and metadata
* [ ] One-click model installation
* [ ] Broader inference-runtime support
* [ ] Better GPU acceleration and tuning
* [ ] Conversation search and organization
* [ ] Conversation import/export
* [ ] Model benchmarking and comparison
* [ ] More advanced performance analytics
* [ ] Improved update experience
* [ ] Plugin and integration architecture
* [ ] Broader platform support

> The roadmap is directional, not a promise of delivery order or timing.

---

## 📜 License

This project is distributed under the license declared in the repository.

See [`LICENSE`](LICENSE) for the authoritative license text.

---

## ⭐ Support OffyAI

If OffyAI is useful to you:

**Star the repository.** It is the simplest way to help the project gain visibility.

You can also contribute by reporting bugs, proposing features, improving documentation, or submitting code.

**[⭐ Star OffyAI on GitHub](https://github.com/bharat-poojari/offyai)**

---

## 🔗 Project links

| Resource       | Link                                                     |
| :------------- | :------------------------------------------------------- |
| Website        | https://offyai.vercel.app/                               |
| Repository     | https://github.com/bharat-poojari/offyai                 |
| Latest release | https://github.com/bharat-poojari/offyai/releases/latest |
| Releases       | https://github.com/bharat-poojari/offyai/releases        |
| Issues         | https://github.com/bharat-poojari/offyai/issues          |
| Discussions    | https://github.com/bharat-poojari/offyai/discussions     |
| Sitemap        | https://offyai.vercel.app/sitemap.xml                    |

---

<p align="center">
  <strong>OffyAI</strong><br>
  Local AI. Simplified.
</p>

<p align="center">
  <sub>Run AI locally. Keep control locally. Build without unnecessary cloud dependency.</sub>
</p>
