import { useMemo, useState } from "react";
import FilterBar from "./components/FilterBar";
import ProjectList from "./components/ProjectList";
import projects from "./data/projects";

function App() {
  const [activeFilter, setActiveFilter] = useState("All");

  const technologies = useMemo(
    () => ["All", ...new Set(projects.flatMap((project) => project.techStack))],
    []
  );

  const filteredProjects = projects.filter((project) =>
    activeFilter === "All" || project.techStack.includes(activeFilter)
  );

  return (
    <main className="app-shell">
      <header className="hero">
        <p className="eyebrow">WEEK 11.1 · REACT ASSIGNMENT</p>
        <h1>Project <span>Gallery</span></h1>
        <p className="hero-copy">
          A collection of projects built with reusable React components.
          Choose a technology to explore the work.
        </p>
        <div className="hero-stats">
          <div><strong>{projects.length}</strong><span>Projects</span></div>
          <div><strong>{technologies.length - 1}</strong><span>Technologies</span></div>
          <div><strong>03</strong><span>Reusable components</span></div>
        </div>
      </header>

      <section className="gallery-section" aria-labelledby="gallery-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">EXPLORE THE WORK</p>
            <h2 id="gallery-title">My projects</h2>
          </div>
          <span className="result-count">{filteredProjects.length} shown</span>
        </div>
        <FilterBar
          technologies={technologies}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
        <ProjectList projects={filteredProjects} />
      </section>

      <footer className="footer">
        <span>Built by Saiman Silwal</span>
        <span>React · Components · Props · State</span>
      </footer>
    </main>
  );
}

export default App;
