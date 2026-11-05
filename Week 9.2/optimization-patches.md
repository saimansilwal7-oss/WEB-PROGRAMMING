# Week 9.2 — Prepared optimization patches

These files are individual assignment copies for the Team 4 Student Budget Tracker. They are kept in the personal repository and do not modify the shared Team 4 repository.

## Files
- `optimized-index.html`: loads `optimized-app.js` with `defer` and `optimized-style.css`.
- `optimized-app.js`: one-pass totals, DocumentFragment rendering, and event delegation.
- `optimized-style.css`: removes a large remote Unsplash CSS background and the costly backdrop blur.

## Five changes
1. Defer the application script: `<script src="optimized-app.js" defer></script>`.
2. Remove the remote CSS background image and use a local CSS gradient instead. The current background is an external Unsplash image URL; removing it avoids that additional network image request.
3. Remove `backdrop-filter: blur(12px)` from each card to reduce paint/compositing work.
4. Calculate income and expenses in one loop instead of two separate `filter().reduce()` chains.
5. Build transaction rows in a `DocumentFragment`, replace the list once, and use one delegated click handler rather than creating a click listener for every delete button.

## Important
The official screenshots currently show 100/100 before and 100/100 after. The before screenshot displays the proposal URL while the after screenshot displays the tracker page. They are not a controlled same-URL comparison. To demonstrate a measured improvement, run Lighthouse before and after on the same page URL using the prepared optimized page, and capture the full metric breakdown (FCP, LCP, Speed Index, TBT, CLS) and final score. No changes to the shared Team 4 repository are required for this individual assignment. Do not report a measured score increase until that test is completed.


## Accessibility addition requested by the professor
The optimized HTML page now provides a keyboard skip link before the header:

```html
<a class="skip-link" href="#main-content">Skip to main content</a>
<main id="main-content" tabindex="-1">
  <!-- page content -->
</main>
```

The same skip-link pattern is included in the Week 9.2 report and performance practice pages. The final Lighthouse run must be performed against the final deployed page after these changes; existing screenshots are historical evidence and must not be presented as a new post-change measurement.
