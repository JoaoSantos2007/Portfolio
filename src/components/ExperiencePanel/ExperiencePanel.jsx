import "./ExperiencePanel.css"

const ExperiencePanel = ({ experience, index }) => {
  return (
    <div role="tabpanel" tabIndex="0" aria-labelledby="tab-0" aria-hidden="false" className="experiencePanel">
      <h3 className="experiencePanel__title">
        <span>{experience.name}</span>
        <span className="experiencePanel__author">
          &nbsp;@&nbsp;
          <a href={experience.link} className="inline-link" rel="noopener noreferrer" target="_blank">{experience.author}</a>
        </span>
      </h3>
      <p className="experiencePanel__date">{experience.devDate}</p>
      <div>
        <ul className="experiencePanel__list">
          {experience.texts.map((text, textIndex) => (
            <li key={`experience-${index}-text-${textIndex}`} className="experiencePanel__element">{text}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ExperiencePanel