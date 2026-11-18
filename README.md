# Shadow Hunter UI

Professional dark green design system for the Shadow Hunter firewall cleanup tool.
Plain CSS + a tiny optional JS helper. No build step, no dependencies, works with any framework.

| File | What it is |
|---|---|
| `shadow-hunter-ui.css` | Tokens (`--sh-*`) and components (`.sh-*`) |
| `shadow-hunter-ui.js` | Optional helpers: `SH.toast(msg, kind)`, `SH.tabs(el)` |
| `esittely.html` | Live demo of every component – copy markup from here |
| `.cursor/rules/shadow-hunter-ui.mdc` | Cursor rule: tells the AI how and where to use each component |

## Use in a project

1. Copy `shadow-hunter-ui.css`, `shadow-hunter-ui.js` and `esittely.html` into the project.
2. Copy `.cursor/rules/shadow-hunter-ui.mdc` into the project's `.cursor/rules/`.
3. Ask Cursor: *"Apply Shadow Hunter UI to all views according to .cursor/rules/shadow-hunter-ui.mdc"*.

Minimal page:

```html
<link rel="stylesheet" href="shadow-hunter-ui.css">
<body class="sh-root">
  <button class="sh-btn sh-btn-primary">Run analysis</button>
  <script src="shadow-hunter-ui.js"></script>
</body>
```

Fonts (IBM Plex Sans, JetBrains Mono) load from Google Fonts via `@import` in the CSS.
If the environment blocks Google Fonts, the system fallbacks (Segoe UI, Consolas) are used.
