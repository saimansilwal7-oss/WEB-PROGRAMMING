# E3 — Push to GitHub: Verification Report

**Student:** Saiman Silwal  
**Coursework:** Week 10.1 — Git and GitHub

## Terminal verification

The following commands were run in the GitHub Codespace for the portfolio repository:

```bash
git remote -v
git branch --show-current
git push -u origin main
git status -sb
```

## Results reported from the Codespace

- The remote listing showed the GitHub repository configured as `origin`.
- The current branch was `main`.
- `git push -u origin main` completed successfully. The local `main` branch is set to track `origin/main`, and Git reported that it was up to date.
- `git status -sb` showed `## main...origin/main`, confirming the branch tracking relationship.
- The status output also showed `M README.md`, meaning the Codespace workspace had an uncommitted README change at the time of checking. That change was intentionally left uncommitted and was not discarded.

## Evidence note

This report records the terminal results reported during the exercise. It is **written verification, not a screenshot of the terminal**. No terminal screenshot is attached because the Codespace terminal was too small to capture clearly on the mobile device.

## Conclusion

The E3 push and remote-tracking checks were completed successfully according to the terminal output reported above. If the instructor explicitly requires a screenshot, a genuine screenshot still needs to be captured from the Codespace or another computer.
