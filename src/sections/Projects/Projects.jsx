import { ReactComponent as GitHubIcon } from "../../assets/images/github.svg";
import { ReactComponent as ExternalIcon } from "../../assets/images/external.svg";
import "./Project.css"


const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="section__header">
        <p className="section__number">03.</p>
        <h2 className="section__title">Some Things I've built</h2>
        <hr className="section__spacer"/>
      </div>

      <ul className="dnNJYD">
        <li className="gvznfB">
          <div className="project-content">
            <div>
              <p className="project-overline">Featured Project</p>
              <h3 class="project-title"><a href="https://halcyon-theme.netlify.com/" rel="noopener noreferrer" target="_blank">Halcyon Theme</a></h3>
            </div>

            <div class="project-description">
              <p>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on <a href="https://marketplace.visualstudio.com/items?itemName=brittanychiang.halcyon-vscode" target="_blank" rel="noopener noreferrer">Visual Studio Marketplace</a>, <a href="https://packagecontrol.io/packages/Halcyon%20Theme" target="_blank" rel="noopener noreferrer">Package Control</a>, <a href="https://atom.io/themes/halcyon-syntax" target="_blank" rel="noopener noreferrer">Atom Package Manager</a>, and <a href="https://www.npmjs.com/package/hyper-halcyon-theme" target="_blank" rel="noopener noreferrer">npm</a>.</p>
            </div>

            <ul class="project-tech-list">
              <li>VS Code</li>
              <li>Sublime Text</li>
              <li>Atom</li>
              <li>iTerm2</li>
              <li>Hyper</li>
            </ul>

            <div class="project-links">
              <a href="https://github.com/bchiang7/halcyon-site" aria-label="GitHub Link" rel="noopener noreferrer" target="_blank">
                <GitHubIcon />
              </a>
              <a href="https://halcyon-theme.netlify.com/" aria-label="External Link" class="external" rel="noopener noreferrer" target="_blank">
                <ExternalIcon />
              </a>
            </div>

          </div>
          <div className="project-image">
            <a href="/">
              <img className="test1" src="" alt="" />
            </a>
          </div>
        </li>

      </ul>

      
    </section>
  )
}

export default Projects