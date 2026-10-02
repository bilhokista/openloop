# openloop

The working discipline of a strong model, as an OpenCode plugin.
It bottles the loop, not the brain: plan gate, skill-first, evidence
before done. Honest claim: it narrows the discipline gap, it does not
transplant intelligence.

## Install (one line in `opencode.json`)

```json
{ "plugin": ["openloop@git+https://github.com/bilhokista/openloop.git"] }
```

Then quit and restart opencode (config loads once at startup).

Local path also works:

```json
{ "plugin": ["./path/to/openloop/.opencode/plugins/openloop.mjs"] }
```

## What it enforces, every response

1. **Plan gate** — 3+ steps become a todo list first, one `in_progress`.
2. **Skill-first** — matching skill is used before answering or acting.
3. **Evidence before done** — no done-claim without proof that ran.

`/openloop` prints the active rules. Say "stop openloop" to turn it off.

## Proof

A/B on free models, same task both sides: without openloop vs with it.
See `docs/2026-10-02-openloop-design.md`. No A/B win, no bragging.

## License

MIT.
