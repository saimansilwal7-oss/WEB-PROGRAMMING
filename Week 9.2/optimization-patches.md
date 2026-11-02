# Week 9.2 — Prepared optimization patches

These files are prepared copies for the Team 4 Student Budget Tracker. They are **not deployed to the Team 4 repository** because the current GitHub connection does not have write permission there.

## Files
- `optimized-index.html`: adds `defer` to the app script.
- `optimized-app.js`: one-pass totals, DocumentFragment rendering, and event delegation.
- `optimized-style.css`: removes a large remote Unsplash CSS background and the costly backdrop blur.

## Five changes
1. Defer the application script: `<script src="app.js" defer></script>`.
2. Remove the remote CSS background image and use a local CSS gradient instead. The current background is an external Unsplash image URL; removing it avoids that additional network image request.
3. Remove `backdrop-filter: blur(12px)` from each card to reduce paint/compositing work.
4. Calculate income and expenses in one loop instead of two separate `filter().reduce()` chains.
5. Build transaction rows in a `DocumentFragment`, replace the list once, and use one delegated click handler rather than creating a click listener for every delete button.

## Important
The official screenshots currently show 100/100 before and 100/100 after. The before screenshot displays the proposal URL while the after screenshot displays the tracker page. They are not a controlled same-URL comparison. Re-run Lighthouse on the same deployed tracker URL after the Team 4 owner applies these patches, and capture the full metric breakdown (FCP, LCP, Speed Index, TBT, CLS) and final score. Do not report a measured score increase until that test is completed.
