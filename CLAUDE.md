# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Academic project page for **FGDM** (Focal-General Diffusion Model with Semantic Consistent Guidance for Sign Language Production), targeting CVPR 2026. Built on the [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template).

This is a **static website** — no build tools, bundlers, or package managers. Open `index.html` directly in a browser or deploy via GitHub Pages.

## Architecture

- `index.html` — Single-page site with all content. Sections: hero (title/authors), overview figure, abstract, comparison figure, video carousel, BibTeX (commented out), footer.
- `static/css/index.css` — Custom styles using CSS variables for theming (see `:root` block).
- `static/js/index.js` — Dropdown toggle, BibTeX copy, scroll-to-top, video carousel autoplay via IntersectionObserver, Bulma carousel/slider init.
- `generate.py` — Utility script that scans a directory for video files and generates `<video>` HTML snippets into `html_videos.txt`. Update the hardcoded paths before running.

## External Dependencies (CDN)

- Bulma CSS framework (bundled locally in `static/css/`)
- bulma-carousel / bulma-slider (bundled locally in `static/js/`)
- Font Awesome (bundled locally)
- MathJax 3 (CDN, for LaTeX rendering)
- jQuery 3.5.1 (CDN, required by bulma-carousel)
- Academicons (CDN)
- Inter font (Google Fonts)

## Development

No build step required. To preview locally, open `index.html` in a browser or use VS Code Live Server / the configured launch task ("Open index.html" in `.vscode/launch.json`).

## Adding Videos

1. Place `.mp4` files in `static/videos/`
2. Either manually add `<video>` items to the carousel section in `index.html`, or run `python generate.py` after updating the paths in that script to generate HTML snippets into `html_videos.txt`

## Key Conventions

- All meta tags and structured data in `<head>` contain `TODO` comments marking placeholder content (paper title, authors, URLs, descriptions) — search for `TODO` to find unfilled placeholders.
- CSS custom properties in `index.css` `:root` control the entire color scheme and spacing system.
- The "More Works" dropdown lists related papers from the same lab.
- Video carousel uses IntersectionObserver for auto-play/pause when scrolling in/out of view.
