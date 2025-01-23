import "./ExperiencePanel.css";
import Button from "../Button/Button.jsx";
import PropTypes from "prop-types";

const ExperiencePanel = ({ experience, index }) => {
  return (
    <div
      role="tabpanel"
      tabIndex="0"
      aria-labelledby="tab-0"
      aria-hidden="false"
      className="experiencePanel"
    >
      <h3 className="experiencePanel__title">
        <span>{experience.name}</span>
        <span className="experiencePanel__author">
          &nbsp;@&nbsp;
          <a
            href={experience.link}
            className="inline-link"
            rel="noopener noreferrer"
            target="_blank"
          >
            {experience.author}
          </a>
        </span>
      </h3>
      <p className="experiencePanel__date">{experience.devDate}</p>
      <div>
        <ul className="experiencePanel__list">
          {experience.texts.map((text, textIndex) => (
            <li
              key={`experience-${index}-text-${textIndex}`}
              className="experiencePanel__element"
            >
              {text}
            </li>
          ))}
        </ul>
      </div>
      <div className="experiencePanel__button">
        <Button text="Visit" href={experience.link} />
      </div>
    </div>
  );
};
ExperiencePanel.propTypes = {
  experience: PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    devDate: PropTypes.string.isRequired,
    texts: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default ExperiencePanel;
