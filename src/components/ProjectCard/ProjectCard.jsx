import "./ProjectCard.css";

import FolderIcon from "../../icons/FolderIcon.jsx";
import ExternalIcon from "../../icons/ExternalIcon.jsx";
import GithubIcon from "../../icons/GithubIcon.jsx";
import PropTypes from "prop-types";

const ProjectCard = ({ project, index }) => {
  return (
    <li className="projectCard">
      <div className="projectCard__inner">
        <header>
          <div className="projectCard__top">
            <div className="folder">
              <FolderIcon />
            </div>
            <div className="projectCard__links">
              {project.github && (
                <a
                  href={project.github}
                  aria-label="Gihub Link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon className="projectCard__link" />
                </a>
              )}
              {project.externalLink && (
                <a
                  href={project.externalLink}
                  aria-label="External Link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalIcon className="projectCard__link" />
                </a>
              )}
            </div>
          </div>

          <h3 className="projectCard__title">
            <a
              href={
                project.externalLink ? project.externalLink : project.github
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.name}
            </a>
          </h3>

          <div className="projectCard__description">
            <p>{project.description}</p>
          </div>
        </header>

        <footer>
          <ul className="projectCard__techList">
            {project.techList.map((tech, techIndex) => (
              <li key={`projectCard-${index}-tech-${techIndex}`}>{tech}</li>
            ))}
          </ul>
        </footer>
      </div>
    </li>
  );
};
ProjectCard.propTypes = {
  project: PropTypes.shape({
    github: PropTypes.string,
    externalLink: PropTypes.string,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    techList: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default ProjectCard;
