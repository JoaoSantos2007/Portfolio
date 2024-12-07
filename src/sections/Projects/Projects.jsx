import "./Projects.css"
import { useState } from "react"
import ProjectCard from "../../components/ProjectCard"
import Button from "../../components/Button"

const Projects = () => {
  const [viewFull, setViewFull] = useState(false)

  const projects = [
    {
      name: "NodeCraft",
      description: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
      techList: ["Node", "API", "Html", "Css", "JS"],
      github: "https://github.com/JoaoSantos2007/NodeCraft",
      img: "https://raw.githubusercontent.com/JoaoSantos2007/SmartWiki/main/screenshot.png"
    },
    {
      name: "SmartWiki",
      description: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
      techList: ["html", "css", "javascript", "bootstrap", "json"],
      externalLink: "https://webisk.com.br/smartwiki/",
      github: "https://github.com/JoaoSantos2007/SmartWiki",
      img: "https://raw.githubusercontent.com/JoaoSantos2007/SmartWiki/main/screenshot.png"
    },
    {
      name: "SmartWiki",
      description: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
      techList: ["html", "css", "javascript", "bootstrap", "json"],
      externalLink: "https://webisk.com.br/smartwiki/",
      github: "https://github.com/JoaoSantos2007/SmartWiki",
      img: "https://raw.githubusercontent.com/JoaoSantos2007/SmartWiki/main/screenshot.png"
    },
    {
      name: "SmartWiki",
      description: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
      techList: ["html", "css", "javascript", "bootstrap", "json"],
      externalLink: "https://webisk.com.br/smartwiki/",
      github: "https://github.com/JoaoSantos2007/SmartWiki",
      img: "https://raw.githubusercontent.com/JoaoSantos2007/SmartWiki/main/screenshot.png"
    },
    {
      name: "SmartWiki",
      description: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
      techList: ["html", "css", "javascript", "bootstrap", "json"],
      externalLink: "https://webisk.com.br/smartwiki/",
      github: "https://github.com/JoaoSantos2007/SmartWiki",
      img: "https://raw.githubusercontent.com/JoaoSantos2007/SmartWiki/main/screenshot.png"
    },
    {
      name: "SmartWiki",
      description: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
      techList: ["html", "css", "javascript", "bootstrap", "json"],
      externalLink: "https://webisk.com.br/smartwiki/",
      github: "https://github.com/JoaoSantos2007/SmartWiki",
      img: "https://raw.githubusercontent.com/JoaoSantos2007/SmartWiki/main/screenshot.png"
    },
    {
      name: "SmartWiki",
      description: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
      techList: ["html", "css", "javascript", "bootstrap", "json"],
      externalLink: "https://webisk.com.br/smartwiki/",
      github: "https://github.com/JoaoSantos2007/SmartWiki",
      img: "https://raw.githubusercontent.com/JoaoSantos2007/SmartWiki/main/screenshot.png"
    }
  ]

  return (
    <section className="projects">
      <h2 className="projects__title">Other Noteworthy Projects</h2>

      <ul className="projects__list">
        {projects.map((project, index) => (
          (viewFull === true || index+1 <= 6) &&
          <ProjectCard key={`project-${index}`} project={project} index={index} />
        ))}
      </ul>

      <Button text={viewFull ? "Show Less" : "Show More"} task={() => setViewFull(!viewFull)} />
    </section>
  )
}

export default Projects