# Linqbot lander

Single-screen (non-scrolling) landing page for [Linqbot](https://github.com/amzoeee/soma-hackathon) — the SOMA hackathon project where an iMessage goes through Linq to a Luna planner, comes out as ordered SO-101 tool calls, and hands control back to a human through AR glasses when a step fails.

Everything lives in [app/page.tsx](app/page.tsx). The pixel-art background is `public/mars.png`, mirrored horizontally so the arm sits clear of the copy.

```bash
pnpm dev
```

Open http://localhost:3000.

The page is deliberately fixed to the viewport: `html, body { height: 100%; overflow: hidden }` in [app/globals.css](app/globals.css), with a `grid-rows-[auto_1fr_auto]` header / hero / footer inside `h-dvh`. Text sizes use `clamp()` so the hero keeps fitting as the viewport shrinks — check short viewports (≈560px tall) after any copy change.
