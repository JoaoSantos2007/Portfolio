import "./ExperienceNav.css"

const ExperienceNav = ({ experiences, selected, ChangeSelected }) => {
  return (
    <div role="tablist" aria-label="Experiences tabs" className="experienceNav">
      {experiences.map((experience, index) => (
        <button 
          key={`experienceNav-${index}`} 
          role="tab" 
          aria-selected={index === selected} 
          tabIndex={index === selected ? "0" : "-1"} 
          aria-controls={`experienceNav-${index}`} 
          className={`experienceNav__btn ${index === selected ? "experienceNav__btn-selected" : ""}`} 
          onClick={() => ChangeSelected(index)}
        > 
          <span>{experience.name}</span>
        </button>
      ))}

      <div className="experienceNav__scroll" style={{transform: `translateY(calc(${selected}* var(--tab-height)))`}}></div>
    </div>
  )
}

export default ExperienceNav