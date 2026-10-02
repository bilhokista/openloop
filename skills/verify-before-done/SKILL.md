---
name: verify-before-done
description: Prove every done-claim with evidence that actually ran. Use before committing, opening PRs, or saying a task is complete. Evidence before assertions, always.
license: MIT
---

# Verify Before Done

A claim without proof is a draft, not a result.

1. Name the claim: what exactly is "done"?
2. Run the smallest proof that breaks if the work is wrong: the relevant
   test, the build, the command with real output. Read output, don't assume it.
3. If the proof fails, fix and re-run. If no proof exists for this kind of
   work (e.g. prose), say what you checked instead.
4. Only then mark complete, commit, or report success — with the evidence
   attached (command + result).
