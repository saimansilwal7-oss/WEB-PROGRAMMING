# Week 9.1 — Accessibility Fix Log

**Audit date shown in supplied reports:** 1 November 2026  
**Lighthouse version shown:** 13.6.0  
**Audit category:** Accessibility

## Supplied Lighthouse results

| Site | Accessibility score shown | Evidence |
|---|---:|---|
| Personal website | **95/100** | `SCREENSHOTS/personal-website-lighthouse.png` (provided screenshot) |
| Team 4 project | **100/100** | `SCREENSHOTS/team-4-lighthouse.png` (provided screenshot) |

These are the scores visible in the two screenshots supplied for this assignment. They are recorded as observed results, not described as a before-and-after comparison. The screenshots show the manual-check section as well as the scores.

## Accessibility improvements implemented in the personal website

The following code improvements are present in the personal website repository:

| # | Improvement | Implementation | Verification status |
|---|---|---|---|
| 1 | Keyboard skip navigation | Added a first-focusable skip link targeting `#main-content`. | Code change made; keyboard test still required. |
| 2 | Main content landmark | Wrapped the page content in one `<main id="main-content" tabindex="-1">` landmark. | Code change made; screen-reader/manual test still required. |
| 3 | Visible keyboard focus | Added a clear `:focus-visible` outline and made the skip link visible on focus. | Code change made; keyboard test still required. |

**Important distinction:** These are real code improvements already made to the personal website. The supplied Lighthouse screenshots do not show the failing-audit details, so they do not prove that these were the three failed Lighthouse audits. Do not describe them as report-derived failures unless an initial report with the failing-audit list confirms that.

## Team 4 project

The Team 4 site was audited and the supplied screenshot shows **100/100**. No files in the Team 4 repository were changed. A proposed accessibility patch is retained in `team-project-accessibility-patch.md` for reference only; it is not applied because the assignment submission is being maintained in the student's own repository.

## Before-and-after requirement

The two supplied screenshots are current score evidence only. They do not establish a baseline-before-fixes and retest-after-fixes sequence. To complete that specific requirement, save an initial report captured before the changes and a fresh report after changes, using the same Lighthouse Accessibility-only settings. Do not relabel the supplied screenshots as initial/final unless their capture sequence is verified.

## Manual checks still required

- [ ] Use Tab / Shift+Tab to confirm logical keyboard order.
- [ ] Confirm the skip link appears on focus and moves focus to the main content.
- [ ] Confirm focus indicators remain visible on interactive controls.
- [ ] Check page content with a screen reader if available.
- [ ] Save original Lighthouse screenshots in this folder (the screenshot image files still need to be uploaded to GitHub).

## Submission checklist

- [x] Personal website Accessibility score recorded: 95/100.
- [x] Team 4 Accessibility score recorded: 100/100.
- [x] Three implemented personal-site accessibility improvements documented.
- [ ] Original screenshot image files uploaded to `SCREENSHOTS/`.
- [ ] Three actual failed audits verified from the initial report (if required by the rubric).
- [ ] Keyboard/manual accessibility checks completed.
- [ ] A true before-and-after retest documented.
