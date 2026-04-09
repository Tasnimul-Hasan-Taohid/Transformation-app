# 6-Day Transformation Plan

A clean, interactive 6-week workout plan built with vanilla HTML, CSS, and JavaScript. No frameworks, no dependencies — just open `index.html` in any browser and go.

![Plan Preview](https://img.shields.io/badge/status-ready%20to%20use-brightgreen) ![No Dependencies](https://img.shields.io/badge/dependencies-none-blue) ![Dark Mode](https://img.shields.io/badge/dark%20mode-supported-black)

---

## What it is

A progressive 6-week bodyweight training plan combining daily running with strength work — designed for someone starting from zero, targeting fat loss and muscle building simultaneously. No gym required.

**The goal:** lose face/body fat + build chest and upper body, using only bodyweight at home.

---

## Structure

```
6day-transformation-plan/
├── index.html   — markup and layout
├── style.css    — all styling, light + dark mode
├── data.js      — all workout data (phases, days, exercises)
├── app.js       — rendering and interaction logic
└── README.md
```

---

## How the plan works

6 days on, 1 day rest. Each day has a specific purpose:

| Day | Type | Focus |
|-----|------|-------|
| Monday | Run | Easy aerobic base |
| Tuesday | Strength | Upper body — chest, shoulders, core |
| Wednesday | Run | Easy or intervals |
| Thursday | Combo | Full body + fat burn |
| Friday | Run | Longer easy run |
| Saturday | Strength | Lower body + core |
| Sunday | Rest | Walk + stretch |

### Three progressive phases

| Phase | Weeks | Run | Strength | Est. burn |
|-------|-------|-----|----------|-----------|
| Starter | 1–2 | 20 min easy | 3×10 reps | ~350 kcal/day |
| Build | 3–4 | 25 min + intervals | 3×12 reps | ~420 kcal/day |
| Push | 5–6 | 30–35 min + HIIT | 4×12–15 reps | ~500 kcal/day |

---

## Features

- **Interactive weekly calendar** — tap any day to view its workout
- **Expandable exercises** — tap any exercise to read the form tip
- **Phase switcher** — jump between Week 1–2, 3–4, 5–6
- **Run session visualizer** — bar chart showing warm-up / run / cool-down split
- **Dark mode** — auto-detects system preference
- **Mobile friendly** — responsive layout, works on phone

---

## How to use

### Option A — open locally
Just download and open `index.html` in any browser. No server needed.

### Option B — GitHub Pages
1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to `main` branch, `/ (root)`
4. Your plan will be live at `https://your-username.github.io/6day-transformation-plan`

---

## Customizing

All workout data lives in `data.js`. Each phase has a `days` array. Each day has an `exercises` array with `name`, `meta` (sets/reps), and `tip` (form cue).

To change a workout, edit the relevant object in `data.js`. The UI updates automatically.

---

## Tech

- Vanilla HTML / CSS / JavaScript
- Zero dependencies
- CSS custom properties for theming
- `prefers-color-scheme` for automatic dark mode

---

## License

MIT — use it, modify it, share it.
