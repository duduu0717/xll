# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

JavaScript30 Drum Kit — a vanilla JS browser app where pressing keys (A, S, D, F, G, H, J, K, L) plays corresponding drum sounds.

No build tools, no package manager, no tests. Just open the HTML file in a browser.

## How to view

Open `index-FINISHED.html` (or `index-START.html`) directly in a browser — no server needed. Audio files are `.wav` files in `sounds/`.

## Architecture

- **Key binding pattern**: Each drum pad uses `data-key` attributes matching the keyboard `keyCode`. The same integer keys appear on both the `<div class="key">` elements (visual keys) and `<audio>` elements (sound sources).
- **`index-START.html`**: Skeleton with markup and CSS linked, no JS — the starting point for the tutorial.
- **`index-FINISHED.html`**: Complete implementation. On `keydown`, JS finds the matching `<audio>` by `data-key`, resets `currentTime` to 0 so rapid hits retrigger, and calls `play()`. The `.playing` CSS class is added for the visual pop effect and removed on `transitionend` (only for the `transform` property to avoid flicker from other transitions).
- **`style.css`**: Flexbox-centered keys, `.playing` class applies scale + yellow glow.
