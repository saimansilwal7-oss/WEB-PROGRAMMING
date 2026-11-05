# Week 9.2 — Performance Optimization

## Latest supplied PageSpeed Insights result
- Performance **99/100**, Accessibility **100/100**, Best Practices **100/100**, SEO **90/100**.
- FCP 0.8 s; LCP 0.8 s; TBT 0 ms; CLS 0; Speed Index 3.6 s.
- Mobile emulation (Moto G Power), slow 4G, Lighthouse 13.6.0, 5 Nov 2026 13:30 KST. No field data available.

## Opportunities in the PDF
- Render-blocking requests: estimated 300 ms potential savings.
- Efficient cache lifetimes: approximately 5 KiB flagged.

## Optimization techniques demonstrated
1. Defer JavaScript with `<script defer>`.
2. Keep CSS lightweight and avoid costly visual effects.
3. Batch DOM rendering with `DocumentFragment` and `replaceChildren`.
4. Use event delegation for delete controls.
5. Store demo transactions in localStorage.
6. Use responsive layout and semantic form controls.

## Evidence note
The supplied PDF is the source for the latest scores. Historical before/after screenshots used different URLs, so they do not prove a controlled performance improvement. Run both tests on the exact same URL, device, throttling, and Lighthouse version for a fair comparison.