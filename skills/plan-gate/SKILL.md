---
name: plan-gate
description: Break any 3+ step task into a todo list before acting. Use when starting multi-step work, features, fixes, or whenever the user lists several tasks. Enforces one in_progress at a time.
license: MIT
---

# Plan Gate

No code, no edits, no shell commands for the goal until the plan exists.

1. List the steps as todos: specific, ordered, each verifiable.
2. Mark exactly one `in_progress`. Never two.
3. Work the list top to bottom. Mark `completed` only after the step's own
   proof ran (test, build, real output) — never on intent.
4. New work discovered mid-task becomes a new todo. It does not jump the queue.
5. Blocked? Keep it `in_progress` and add a todo describing the blocker.
   Ask the user instead of guessing past it.
