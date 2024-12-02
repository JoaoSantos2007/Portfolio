import { ReactComponent as GitHubIcon } from "../../assets/images/github.svg";
import { ReactComponent as ExternalIcon } from "../../assets/images/external.svg";
import "./Featured.css"

const Featured = () => {
  const projects = [
    {
      name: "Pede Pizza",
      description: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
      techList: ["Vs Code", "Sublime Text", "Atom", "iTerm2", "Hyper"],
      externalLink: "https://webisk.com.br/pizza",
      github: "https://github.com/JoaoSantos2007/PedePizza",
      img: "https://raw.githubusercontent.com/JoaoSantos2007/PedePizza/main/screenshot.png"
    },
    {
      name: "NodeCraft",
      description: "A api and a website create with the aim to manage and control minecraft servers on linux",
      techList: ["Node.js", "Express", "Json", "React", "Hyper"],
      externalLink: "https://webisk.com.br/pizza",
      github: "https://github.com/JoaoSantos2007/Nodecraft",
      img: "https://raw.githubusercontent.com/JoaoSantos2007/PedePizza/main/screenshot.png"
    },
    {
      name: "SmartWiki",
      description: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
      techList: ["html", "css", "javascript", "bootstrap", "json"],
      externalLink: "https://webisk.com.br/smartwiki/",
      github: "https://github.com/JoaoSantos2007/SmartWiki",
      img: "https://raw.githubusercontent.com/JoaoSantos2007/SmartWiki/main/screenshot.png"
    },
  ]

  return (
    <section id="projects" className="featured">
      <div className="section__header">
        <p className="section__number">03.</p>
        <h2 className="section__title">Some Things I've built</h2>
        <hr className="section__spacer"/>
      </div>

      <ul className="featured__list">
        {projects.map((project, index) => (
          <li key={`featured-${index}`} className="featured__element">
            <div className="featured__content">
              <div>
                <p className="featured__overline">Featured Project</p>
                <h3 className="featured__title">
                  <a href={project.externalLink} rel="noopener noreferrer" target="_blank">{project.name}</a>
                </h3>
              </div>

              <div className="featured__description">
                <p>{project.description}</p>
              </div>

              <ul className="featured__techList">
                {project.techList.map((tech) => (
                  <li>{tech}</li>
                ))}
              </ul>

              <div className="featured__links">
                <a href={project.github} aria-label="GitHub Link" rel="noopener noreferrer" target="_blank">
                  <GitHubIcon />
                </a>
                <a href={project.externalLink} aria-label="External Link" className="external" rel="noopener noreferrer" target="_blank">
                  <ExternalIcon />
                </a>
              </div>
            </div>

            <div className="featured__image">
              <a href={project.externalLink} rel="noopener noreferrer" className="featured__image-overlay">
                <img className="test1" src={project.img} alt="Descrição da Imagem" />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Featured