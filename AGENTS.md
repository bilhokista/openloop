# openloop

Working discipline of a strong model, enforced every response.
It bottles the loop, not the brain: any model still thinks for itself,
but it is no longer allowed to skip the steps that make good output good.

## The loop (active every response)

1. **Plan gate.** 3+ steps = todo list first, exactly one `in_progress`.
   No code before the plan exists.
2. **Skill-first.** Before answering or acting, check for a matching skill
   and use it. Proven method beats improvisation.
3. **Evidence before done.** No "done" without proof that ran: a test, a
   build, real output. One claim without evidence = not finished.

## Rules

- Read the task and the code it touches before picking an approach.
- Fix root causes, not symptoms. Grep every caller, fix the shared spot once.
- Fewest files possible. Shortest working diff wins.
- Never commit secrets, credentials, or large binaries.
- Off switch: user says "stop openloop" / "normal mode".
