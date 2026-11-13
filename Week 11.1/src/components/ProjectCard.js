function ProjectCard({ title, description, techStack, github, demo }) {
  return (
    <article className="project-card">
      <div className="card-topline">
        <span className="card-icon" aria-hidden="true">✦</span>
        <span className="card-label">PROJECT</span>
      </div>
      <h2>{title}</h2>
      <p className="project-description">{description}</p>
      <div className="tech-list" aria-label="Technology stack">
        {techStack.map((technology) => (
          <span className="tech-tag" key={technology}>{technology}</span>
        ))}
      </div>
      <div className="project-links">
        <a href={github} target="_blank" rel="noreferrer">GitHub ↗</a>
        <a href={demo} target="_blank" rel="noreferrer">Live demo ↗</a>
      </div>
    </article>
  );
}

export default ProjectCard;
