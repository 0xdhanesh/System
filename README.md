# Kernel Quest — Offline Systems Academy

[![Deploy GitHub Pages](https://github.com/0xdhanesh/System/actions/workflows/pages.yml/badge.svg)](https://github.com/0xdhanesh/System/actions/workflows/pages.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

**Live site:** [https://0xdhanesh.github.io/System/](https://0xdhanesh.github.io/System/)

A self-contained systems programming curriculum for absolute beginners that runs entirely in the browser. No account, no install, and no network required after the page loads. Progress stays on your device via `localStorage`.

---

## Features

| Area | Details |
| --- | --- |
| **Tracks** | C, Objective-C, C++, Objective-C++, ARM64, Swift, Shell Scripting, Makefile |
| **Content** | 57 lessons · 424 concept modules · 57 recall quizzes · 8 interactive mini labs |
| **Learning loop** | Beginner-first explanations for every concept, mark progress, earn XP, unlock levels and achievements |
| **Dashboard** | Concept/lesson completion, quiz scores, and study streaks |
| **Portability** | Export and import progress as JSON from **Progress & backup** |
| **Code Explainer** | Paste a snippet, pick a language track, and get explainshell-style highlights linked to matching quests |

XP awards: **5** per checked concept · **25** per completed lesson · **30** per perfect quiz. Levels and achievements are derived from progress.

---

## Quick start

### Online (GitHub Pages)

Open the live site:

**[https://0xdhanesh.github.io/System/](https://0xdhanesh.github.io/System/)**

### Offline (local file)

1. Clone or download this repository.
2. Open `index.html` in Chrome, Edge, Firefox, or Safari.

```bash
git clone https://github.com/0xdhanesh/System.git
cd System
open index.html   # macOS; or double-click the file
```

Mobile browsers can show the UI; some in-app file viewers disable JavaScript or storage.

### Optional local server

If `file://` storage is unreliable in your browser, serve the page over loopback:

```bash
node server.js
```

Then open [http://127.0.0.1:8765/](http://127.0.0.1:8765/). The server binds only to `127.0.0.1`, serves this HTML only, and needs no `npm install`. Stop with `Ctrl+C`.

Use the same browser profile and URL each session so progress stays consistent.

---

## How to learn

1. Pick a track from the sidebar.
2. Work through lessons; click highlighted code or concept names for explanations.
3. Mark concepts learned or complete an entire lesson.
4. Take the three-question recall quiz after each lesson.
5. Try the interactive mini labs for selected ideas.
6. Use search to jump to topics; check the dashboard for streaks and completion.

---

## Progress storage

The browser stores concept checks, lesson completion, best quiz scores, recent lessons, and study dates in **`localStorage`**.

Progress can reset or diverge when you:

- use private browsing
- move files or change browsers
- switch between `file://` and `http://localhost`
- clear site data

Export JSON regularly from **Progress & backup**, and import it when you change environments. Import replaces the current record after confirmation.

---

## Scope and limits

Curriculum themes draw on systems programming ideas relevant to Dopamine / RootHide and XNU-style environments. It is a teaching resource, not a source-verified inventory of any specific repository revision.

- Examples are teaching snippets; some need platform SDKs or surrounding context.
- The code explorer explains curated snippets, not arbitrary pasted code.
- Mini labs simulate selected concepts. There is **no** in-browser compiler, shell, or native code execution.
- Dashboard metrics are self-attested learning measures, not a certification of proficiency.

---

## Repository layout

```
System/
├── index.html              # Full app (UI, curriculum, logic)
├── server.js               # Optional local static server (port 8765)
├── assets/                 # Logo, favicon, and PWA icons
├── .nojekyll               # Disable Jekyll on GitHub Pages
├── .github/workflows/
│   └── pages.yml           # Deploy to GitHub Pages on push to main
└── README.md
```

---

## GitHub Pages

Every push to `main` runs [`.github/workflows/pages.yml`](.github/workflows/pages.yml), which publishes `index.html` to GitHub Pages.

**One-time setup** (repository owner):

1. Open **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Push to `main` (or run the workflow manually under the **Actions** tab).

The site will be available at:

`https://0xdhanesh.github.io/System/`

---

## License

MIT — see [LICENSE](LICENSE) if present; otherwise free to use for personal learning.
