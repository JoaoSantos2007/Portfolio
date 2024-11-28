import "./OtherProjects.css"
import { ReactComponent as FolderIcon } from "../../assets/images/folder.svg"
import { ReactComponent as ExternalIcon } from "../../assets/images/external.svg"

const OtherProjects = ({projects}) => {
  return (
    <section className="otherProjects">
      <h2>Other Noteworthy Projects</h2>

      <ul className="project__list">
        {projects.map((project) => (
          !project.featured &&
          <li className="project__element">
            <div className="project__inner">
              <header>
                <div className="project__top">
                  <div className="folder">
                    <FolderIcon />
                  </div>
                  <div className="project__links">
                    <a href={project.externalLink} aria-label="External Link" class="external" target="_blank" rel="noopener noreferrer">
                    <ExternalIcon className="project__externalLink"/>
                    </a>
                  </div>
                </div>
            
                <h3 className="project__title">
                  <a href={project.externalLink} target="_blank" rel="noopener noreferrer">
                    {project.name}
                  </a>
                </h3>
            
                <div class="project__description">
                  <p>{project.description}</p>
                </div>
              </header>
          
              <footer>
                <ul class="project-tech-list">
                  {project.techList.map(tech => (
                    <li>{tech}</li>
                  ))}
                </ul>
              </footer>
            </div>
          </li>
        ))}

      </ul>

      <button className="project__view">
        Show More
      </button>
    </section>
  )
}

export default OtherProjects