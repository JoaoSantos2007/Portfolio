import "./ExperienceNav.css";
import PropTypes from "prop-types";

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

      <div
        className="experienceNav__scroll"
        style={{
          transform: `translateY(calc(${selected}* var(--tab-height)))`,
        }}
      ></div>
    </div>
  );
};
ExperienceNav.propTypes = {
  experiences: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selected: PropTypes.number.isRequired,
  ChangeSelected: PropTypes.func.isRequired,
};

export default ExperienceNav;
