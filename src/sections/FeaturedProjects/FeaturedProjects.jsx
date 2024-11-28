import { ReactComponent as GitHubIcon } from "../../assets/images/github.svg";
import { ReactComponent as ExternalIcon } from "../../assets/images/external.svg";
import "./FeaturedProjects.css"

const FeaturedProjects = ({projects}) => {
  return (
    <section id="projects" className="featuredProjects">
      <div className="section__header">
        <p className="section__number">03.</p>
        <h2 className="section__title">Some Things I've built</h2>
        <hr className="section__spacer"/>
      </div>

      <ul className="featuredProjects__list">
        {projects.map((project, index) => (
          project.featured &&
          <li id={`featuredProject-${index}`} className="featuredProject__element">
            <div className="featuredProject__content">
              <div>
                <p className="featuredProject__overline">Featured Project</p>
                <h3 className="featuredProject__title">
                  <a href={project.externalLink} rel="noopener noreferrer" target="_blank">{project.name}</a>
                </h3>
              </div>

              <div className="featuredProject__description">
                <p>{project.description}</p>
              </div>

              <ul className="featuredProject__techList">
                {project.techList.map((tech) => (
                  <li>{tech}</li>
                ))}
              </ul>

              <div className="featuredProject__links">
                <a href={project.github} aria-label="GitHub Link" rel="noopener noreferrer" target="_blank">
                  <GitHubIcon />
                </a>
                <a href={project.externalLink} aria-label="External Link" className="external" rel="noopener noreferrer" target="_blank">
                  <ExternalIcon />
                </a>
              </div>
            </div>

            <div className="featuredProject__image">
              <a href={project.externalLink} rel="noopener noreferrer" className="featuredProject__image-overlay">
                <img className="test1" src={project.img} alt="Descrição da Imagem" />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default FeaturedProjects