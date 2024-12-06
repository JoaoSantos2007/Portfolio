import "./ProjectCard.css"
import { ReactComponent as FolderIcon } from "../../assets/images/folder.svg"
import { ReactComponent as ExternalIcon } from "../../assets/images/external.svg"
import { ReactComponent as GitHubIcon } from "../../assets/images/github.svg"

const ProjectCard = ({project}) => {
  return (
    <li className="projectCard">
      <div className="projectCard__inner">
        <header>
          <div className="projectCard__top">
            <div className="folder">
              <FolderIcon />
            </div>
            <div className="projectCard__links">
              {project.github && 
                <a href={project.github} aria-label="Gihub Link" target="_blank" rel="noopener noreferrer">
                  <GitHubIcon className="projectCard__link"/>
                </a>
              }
              {
                project.externalLink &&
                <a href={project.externalLink} aria-label="External Link" target="_blank" rel="noopener noreferrer">
                  <ExternalIcon className="projectCard__link"/>
                </a>
              }

            </div>
          </div>
      
          <h3 className="projectCard__title">
            <a href={project.externalLink ? project.externalLink : project.github} target="_blank" rel="noopener noreferrer">
              {project.name}
            </a>
          </h3>
      
          <div className="projectCard__description">
            <p>{project.description}</p>
          </div>
        </header>
    
        <footer>
          <ul className="projectCard__techList">
            {project.techList.map(tech => (
              <li>{tech}</li>
            ))}
          </ul>
        </footer>
      </div>
    </li>
  )
}

export default ProjectCard