# Week 11.1 — React Project Gallery

A Create React App project demonstrating reusable components, one-way props, list rendering with stable keys, conditional rendering, and component composition.

## Requirements covered
- `ProjectCard`: displays a project's title, description, technology stack, GitHub link, and demo link.
- `ProjectList`: renders four project cards from data.
- `FilterBar`: filters projects by technology.
- `App`: composes the filter and project list and manages the selected technology with `useState`.
- Stable keys: `project.id` for project cards and the technology value for filter buttons.
- Empty state: displays “No projects found.” when a filter has no matches.

## Run locally
1. Install Node.js (LTS).
2. Open this folder in a terminal.
3. Run `npm install`.
4. Run `npm start`.
5. Open the local address shown by Create React App (usually `http://localhost:3000`).

## Project structure
```
Week 11.1/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── FilterBar.js
│   │   ├── ProjectCard.js
│   │   └── ProjectList.js
│   ├── data/
│   │   └── projects.js
│   ├── App.js
│   ├── index.js
│   └── styles.css
├── package.json
└── README.md
```

## Key React concepts
- Components are functions that return JSX.
- Props flow one way: parent to child.
- Every rendered list item has a unique, stable `key`.
- Conditional rendering uses a conditional expression for the empty state.
- Small components are composed into the larger `App` component.
