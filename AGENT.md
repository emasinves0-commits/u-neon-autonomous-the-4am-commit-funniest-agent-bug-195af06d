# AGENT.md

## How the entry was chosen

- 28 candidates were generated from 14 models (full-pool generation, with a router 429/cooldown storm along the way).
- The ensemble judge panel came back empty: 0/5 judges kept in both runs.
- Fallback: our own scoring plus a glm-5.3-flash duel sentral. Winner #3 beat #1 and #8 each 2-0, with margin 3+3 in position-swapped duels.

The entry line is final and was not reworded after selection. Only the code around it (`main.ts`) was iterated: first a single-pass write, then validation and output-directory handling split into their own functions, re-run to confirm byte-identical output (same SHA-256).
