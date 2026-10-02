# Hyperframes Composition Brief: openloop (5s YouTube opening)

## Objective
Create a 5-second terminal-style channel ident for openloop.

## Output
- Composition directory: `brag-output/composition/`
- Rendered video: `brag-output/brag.mp4`
- Format: landscape — 1920x1080
- Duration: 5 seconds (user-specified ident length; overrides the 15-25s default)

## Source Material
- Project root: `C:\Users\bilho\openloop`
- Primary files read: README.md, AGENTS.md, skills/plan-gate/SKILL.md
- Product name: openloop
- Tagline / strongest claim: "Bottles the loop, not the brain."
- Key visual moment to recreate: terminal typing + rule list (text-forward; plugin has no UI)
- Copy that must appear verbatim:
  - `openloop`
  - `1 plan gate` / `2 skill-first` / `3 evidence`
  - `github.com/bilhokista/openloop`

## Creative Direction
- Tone preset: cinematic (compressed to ident length)
- Creative direction: 5-second terminal ident
- Interpretation: big mono type, hard cuts, restrained sound
- Angle: an ident that behaves like the product — no fluff, three rules, done in 5 seconds
- Hook: cursor types `openloop` with key ticks (0-1.5s)
- Outro / punchline: logo lockup + repo URL, one dry hit (3.5-5.0s)
- Avoid: generic SaaS language, abstract filler visuals, unrelated redesign

## Visual Identity
- Background: #0a0a0f
- Text: #f5f5f5
- Accent: #4ade80
- Display font: monospace (JetBrains Mono, ui-monospace fallback)
- Body font: same mono
- Visual references: terminal line, rule list

## Storyboard
Use `brag-output/brag-plan.md` as the creative contract.
1. type-in — 1.5s — cursor types `openloop`, holds bright
2. three rules — 2.0s — 3 lines snap in 0.4s apart, full set holds
3. lockup — 1.5s — giant `openloop` + repo URL, end frame = poster

## Audio
- Audio role: sparse professional accents (bed intentionally silent)
- Audio arc: ticks → ticks → single hit → silence
- Music: none (intentionally silent; 5s too short for a bed)
- Audio-reactive treatment: none (no music bed to react to)
- Audio-coupled moments:
  - Scene 1 — typing (key ticks)
  - Scene 2 — beat reveal (one tick per rule line)
  - Scene 3 — final logo (single dry impact hit)
- SFX selection guidance: keyboard ticks, soft UI ticks, dry impact hit. See brag skill `assets/sfx/sfx-analysis.md` for low-risk picks.
- Audio files: Hyperframes copies selected SFX into `composition/assets/`

## Hyperframes Instructions
Load `hyperframes-core`, `hyperframes-animation`, `hyperframes-creative`, `hyperframes-keyframes`, `hyperframes-cli`. /brag is its own workflow: no entry-point interview, no generic promo workflow. Requirements: real project copy on screen, readable text, 5.0s total, SFX layer included, `hyperframes check` before render.
