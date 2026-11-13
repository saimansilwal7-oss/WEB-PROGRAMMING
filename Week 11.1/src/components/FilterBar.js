function FilterBar({ technologies, activeFilter, onFilterChange }) {
  return (
    <div className="filter-bar" aria-label="Filter projects by technology">
      {technologies.map((technology) => (
        <button
          key={technology}
          type="button"
          className={activeFilter === technology ? "filter-button active" : "filter-button"}
          aria-pressed={activeFilter === technology}
          onClick={() => onFilterChange(technology)}
        >
          {technology}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
