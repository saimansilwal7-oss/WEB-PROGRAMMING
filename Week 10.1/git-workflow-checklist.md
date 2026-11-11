# Week 10.1 — Git & GitHub Exercises and Homework Report

**Student:** Saiman Silwal  
**Student ID:** 202537200  
**Course:** Web Programming

## Homework 1 — Personal Portfolio Repository

- **Repository:** [saimansilwal7-oss/portfolio](https://github.com/saimansilwal7-oss/portfolio)
- **Live GitHub Pages site:** [Open portfolio](https://saimansilwal7-oss.github.io/portfolio/)
- **Default branch:** `main`
- **Commit history:** 18 commits currently visible on GitHub (requirement: 5+)
- **Portfolio content:** student name and introduction, profile photograph, learning/technical skills, and links to two course/team projects.
- **Deployment:** GitHub Pages deployment workflow is configured.

## E1 — Create Your First Repository

The portfolio repository is public and has an initial commit, followed by incremental commits for the README, homepage, profile photo, navigation, theme toggle, responsive styling, accessibility improvements, and deployment workflow.

- [Initial commit](https://github.com/saimansilwal7-oss/portfolio/commit/ccd3117b7940417fcf79f13572ffa22fa0f420fe)
- [Full commit history](https://github.com/saimansilwal7-oss/portfolio/commits/main/)

## E2 — Create a Branch and Merge It

A dedicated feature branch was created in the coursework repository, a workflow evidence file was added, and the change was submitted through a pull request and merged into `main`.

- **Branch:** `feature/week10-git-workflow-evidence`
- [Pull Request #1 — merged](https://github.com/saimansilwal7-oss/WEB-PROGRAMMING/pull/1)
- [Merged evidence file](./git-branch-merge-evidence.md)

## E3 — Push Your Repo to GitHub

The portfolio repository is hosted publicly on GitHub with a `main` branch and a visible commit history. GitHub confirms the remote repository exists and contains the portfolio commits.

**Local terminal verification still required:** GitHub's website cannot prove which commands were run on a student's own computer. If the repository is already cloned locally, run:

```bash
git remote -v
git branch -M main
git push -u origin main
```

The first command should show the portfolio repository URL for both fetch and push. If no `origin` appears, add it once:

```bash
git remote add origin https://github.com/saimansilwal7-oss/portfolio.git
```

Then run the push command again.

## Final status

- Homework 1 portfolio and 5+ commit requirement: **completed**
- E1 repository and initial commit evidence: **present**
- E2 feature branch and merged pull request: **completed**
- E3 GitHub remote and hosted repository: **present; local terminal output should be captured as final proof**

