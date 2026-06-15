# 🎨 pi-ui

**UI polish extension for the Pi coding agent framework.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-0.8.0-blue)]()
[![Node](https://img.shields.io/badge/node-%3E%3D18-brightgreen)]()
[![Pi](https://img.shields.io/badge/pi--coding--agent-%5E0.79.3-blueviolet)]()

`pi-ui` is a **Pi extension** that enhances the terminal experience with an animated startup header, a framed editor, a rich status footer, Shiki-powered diff rendering, muted thinking block styling, cross-platform image paste, a streaming session recap panel, and an interactive settings menu — all working together to give the agent UI a polished, professional feel.

---

## Features

- **🎬 Animated Startup Header** — 8×14 pixel logo with 9 animation styles (diagonal, wave, center-out, etc.). Startup sections listing (Models, Context, Prompts, Skills, Extensions, Themes). npm version check with update notice.
- **📟 Framed Editor** — Rounded border frame around the input area. Double-ESC within 500 ms in an empty editor exits pi. Autocomplete overlay with a custom `›` cursor. Transient hint messages.
- **📊 Rich Status Footer** — Two-line responsive mode for narrow terminals. Shows: directory name, git branch + status indicators (staged `+`, unstaged `±`, untracked `?`, ahead `↑N`, behind `↓N`), active model, thinking level, token usage (↑input, ↓output, R cache, W cache, $cost), context progress bar with green/yellow/red color thresholds.
- **🎨 Enhanced Diff Rendering** — Shiki-powered syntax highlighting for diffs. Split view (side-by-side) for wide terminals, unified view for narrow. Word-level diffs highlighting changed words. Auto-derived colors from the pi theme. Wraps pi's native write/edit tools.
- **💭 Thinking Block Styling** — Muted/dimmed syntax highlighting for thinking/CoT blocks. Customizable label text and RGB color. Code unindent strips common leading whitespace.
- **🖼️ Image Paste** — Cross-platform clipboard reading (macOS native, Linux wl-paste/xclip, Windows PowerShell). Inline preview via pi's message renderer. Ctrl+V / Alt+V shortcuts. Max 20 MB file size.
- **📋 Session Recap Panel** — Compact animated panel above the editor. Streaming user and agent recaps with breathing dot animation. Settling animation on finalization. Recency-based text fading. Keyboard navigation (Ctrl+Shift+R to focus, arrows to scroll, Esc to release). Session goal auto-derivation. Model picker with pi-bench integration.
- **⚙️ Interactive Settings** — Accessible via the `/ui` command. Configurable: muted theme toggle, code unindent toggle, thinking label text and RGB color, logo animation style (9 choices), diff theme (any Shiki theme), split view width thresholds. Persisted to `settings.json`.

---

## Quick Start

### Installation

```
git clone https://github.com/panuthept/pi-ui.git ~/.pi/agent/extensions/pi-ui
```

---

## Project Structure

```
src/
├── index.ts                 # Main extension activator
├── config.ts                # User-configurable settings
├── settings.ts              # Interactive /ui settings menu
├── chrome.ts                # ANSI constants, palette, theme background
├── message/
│   └── index.ts             # UserMessageComponent patches
├── editor/
│   └── index.ts             # Framed UiEditor component
├── footer/
│   ├── index.ts             # Rich status footer
│   └── utils/
│       ├── format.ts        # Token counts, context bar, git indicators
│       ├── git.ts           # Git status detection
│       ├── icons.ts         # Nerd Font icons + colors
│       └── stats.ts         # Token usage aggregation
├── diff-render/
│   ├── index.ts             # Diff-enhanced write/edit tools
│   ├── ansi.ts              # ANSI diff color system
│   ├── core/diff.ts         # Diff parsing (structuredPatch)
│   ├── shiki.ts             # Shiki syntax highlighting (LRU cache)
│   ├── render.ts            # Split & unified diff rendering
│   └── word-diff.ts         # Word-diff analysis
├── thinking/
│   ├── patch.ts             # AssistantMessageComponent patches
│   ├── theme.ts             # Muted Markdown theme builder
│   ├── transform.ts         # message_end transform hook
│   └── unindent.ts          # Code block unindent
├── startup/
│   ├── index.ts             # Animated startup header
│   ├── logo.ts              # 8×14 pixel logo with 9 animation styles
│   ├── sections.ts          # Startup sections parser
│   ├── version.ts           # npm version check
│   └── capture.ts           # console.log capture
├── image-paste/
│   ├── index.ts             # Image paste shortcuts & queue
│   ├── clipboard.ts         # Cross-platform clipboard reading
│   ├── preview.ts           # Inline image preview
│   └── types.ts             # Image types
├── recap/
│   ├── index.ts             # Recap bridge (session state, goals)
│   ├── anim.ts              # Animation primitives
│   └── status-widget.ts     # Recap panel component
└── utils/
    ├── index.ts             # Re-exports
    ├── ansi.ts              # ANSI strip/tab/fit utilities
    ├── color.ts             # HSL/RGB/ANSI color conversion
    └── text.ts              # clampLine, formatKey helpers
```

---

## License

MIT © 2026 Panuthep Tasawong — See [LICENSE](./LICENSE) for details.
