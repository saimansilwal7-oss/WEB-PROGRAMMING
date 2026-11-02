# Week 9.1 — Lighthouse Accessibility Audit

## Recorded Lighthouse results

| Site | Accessibility score shown in supplied report |
|---|---:|
| Personal website | **95/100** |
| Team 4 project | **100/100** |

The supplied screenshots show Lighthouse 13.6.0 and a capture date of 1 November 2026. These are recorded as observed scores, not as a verified before-and-after comparison.

## Assignment files

- `accessibility_audit_report.html` — updated report page with scores and the implemented accessibility improvements.
- `audit_fixes_checklist.md` — score record, three implemented personal-site improvements, and remaining verification checklist.
- `skip_link_demo.html` — working example of a keyboard-accessible skip link.
- `team-project-accessibility-patch.md` — optional patch reference only; the Team 4 repository was not modified.
- `SCREENSHOTS/` — upload the two supplied screenshot image files here.

## Three improvements implemented in the personal website

1. Keyboard-visible skip-navigation link to the main content.
2. A single main landmark with `id="main-content"` and `tabindex="-1"`.
3. Visible keyboard focus styling using `:focus-visible`.

These are actual code changes. The supplied score screenshots do not show failing audit details, so the three improvements are not falsely labelled as three Lighthouse failures.

## Remaining submission steps

1. Upload `personal-website-lighthouse.png` and `team-4-lighthouse.png` into `SCREENSHOTS/`.
2. Complete keyboard/manual accessibility checks.
3. If the rubric strictly requires three failed audits and a before/after comparison, preserve the initial failing-audit report and run a fresh post-fix audit with the same Accessibility-only settings.

## Websites

- Personal site: https://saimansilwal7-oss.github.io/saiman-silwal-202537200/
- Team 4 project: https://sushant0101n-gif.github.io/team-4-project/
