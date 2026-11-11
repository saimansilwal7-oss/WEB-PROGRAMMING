# Week 10.1 — Git & GitHub Exercises and Homework Report

**Student:** Saiman Silwal  
**Student ID:** 202537200  
**Course:** Web Programming

## Homework 1 — Personal Portfolio Repository

- **Repository:** [saimansilwal7-oss/portfolio](https://github.com/saimansilwal7-oss/portfolio)
- **Live GitHub Pages site:** [Open portfolio](https://saimansilwal7-oss.github.io/portfolio/)
- **Default branch:** `main`
- **Commit history:** 20 commits are currently visible on GitHub, exceeding the 5+ requirement.
- **Portfolio content:** student name and introduction, profile photograph with descriptive alt text, learning/technical skills, and two course project links (Web Programming and Team 4).
- **Deployment:** GitHub Pages deployment is configured.

## E1 — Create Your First Repository

The public portfolio repository has an initial root commit and subsequent incremental commits.

- [Initial commit](https://github.com/saimansilwal7-oss/portfolio/commit/ccd3117b7940417fcf79f13572ffa22fa0f420fe)
- [Full commit history](https://github.com/saimansilwal7-oss/portfolio/commits/main/)

## E2 — Create a Branch and Merge It

The workflow is now demonstrated directly in the portfolio repository, matching the professor's example:

- **Feature branch:** `feature/week10-git-workflow`
- A focused evidence document was committed on the feature branch.
- [Portfolio Pull Request #1 — merged](https://github.com/saimansilwal7-oss/portfolio/pull/1)
- [E2 evidence document](https://github.com/saimansilwal7-oss/portfolio/blob/main/week10-git-workflow-evidence.md)

An additional coursework evidence PR is also available:
- [WEB-PROGRAMMING Pull Request #1 — merged](https://github.com/saimansilwal7-oss/WEB-PROGRAMMING/pull/1)

## E3 — Push Your Repo to GitHub

The student completed the terminal verification in GitHub Codespaces using the portfolio repository workspace.

Commands executed:
```bash
git remote -v
git branch --show-current
git push -u origin main
git status -sb
```

Reported results:
- `git remote -v` ran successfully and showed `origin` pointing to the portfolio GitHub repository.
- `git branch --show-current` returned `main`.
- `git push -u origin main` succeeded; the remote tracking branch is `origin/main` and was already up to date.
- `git status -sb` showed `## main...origin/main`.

The latest terminal status shared on November 11 showed `## main...origin/main` with a clean worktree. No push was needed because local `main` was already aligned with `origin/main`.

## Final status

- Homework 1 portfolio, content, deployment, and 5+ commit threshold: **covered**
- E1 initial repository and root commit: **verified on GitHub**
- E2 feature branch and merged pull request in the portfolio repository: **completed**
- E3 remote, current branch, push, and upstream tracking: **verified in Codespaces**
- Screenshot of terminal output: **optional supporting evidence still recommended if the instructor specifically requires screenshots**
