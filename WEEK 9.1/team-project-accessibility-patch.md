# Team 4 project — Week 9.1 accessibility patch

The GitHub connection currently allows reading this repository but does not allow committing changes to it. Apply the following small changes to the Team 4 repository (or grant write access so they can be committed directly).

## 1. Add a skip link and main landmark

In `index.html`, immediately after `<body>`, add:

```html
<a class="skip-link" href="#main-content">Skip to main content</a>
```

Change the opening main tag to:

```html
<main id="main-content" tabindex="-1">
```

## 2. Keep the summary heading levels in order

Change the three summary card headings from `<h3>` to `<h2>`:

```html
<h2>Total Balance</h2>
<h2>Income</h2>
<h2>Expenses</h2>
```

Add this rule to `style.css` so the visual size stays compact:

```css
.summary .card h2 {
  margin: 0;
  font-size: .95rem;
  font-weight: 650;
  letter-spacing: 0;
}
```

## 3. Give the budget progress indicator an accessible name

Change:

```html
<progress id="budget-progress" value="0" max="100"></progress>
```

to:

```html
<progress id="budget-progress" value="0" max="100" aria-label="Monthly budget spent"></progress>
```

## 4. Add keyboard focus styling

Append to `style.css`:

```css
.skip-link {
  position: absolute;
  top: -5rem;
  left: 1rem;
  z-index: 1000;
  padding: .8rem 1rem;
  border: 2px solid #fff;
  border-radius: 10px;
  background: #172554;
  color: #fff;
  font-weight: 800;
  text-decoration: none;
}
.skip-link:focus { top: 1rem; }
:focus-visible { outline: 3px solid #0b6b5c; outline-offset: 3px; }
#main-content:focus { outline: none; }
```

## Retest requirement

These are code-level accessibility improvements, not proof of Lighthouse failures. Run Lighthouse Accessibility before and after the changes, then record only the issues that actually appear in the initial report. Do not claim a score or an audit fix until verified.
