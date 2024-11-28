
import FeaturedProjects from "../FeaturedProjects"
import OtherProjects from "../OtherProjects"

const Projects = () => {
  const projects = [
    {
      featured: true,
      name: "Pede Pizza",
      description: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
      techList: ["Vs Code", "Sublime Text", "Atom", "iTerm2", "Hyper"],
      externalLink: "https://webisk.com.br/pizza",
      github: "https://github.com/JoaoSantos2007/PedePizza",
      img: "https://raw.githubusercontent.com/JoaoSantos2007/PedePizza/main/screenshot.png"
    },
    {
      featured: true,
      name: "NodeCraft",
      description: "A api and a website create with the aim to manage and control minecraft servers on linux",
      techList: ["Node.js", "Express", "Json", "React", "Hyper"],
      externalLink: "https://webisk.com.br/pizza",
      github: "https://github.com/JoaoSantos2007/Nodecraft",
      img: "https://raw.githubusercontent.com/JoaoSantos2007/PedePizza/main/screenshot.png"
    },
    {
      featured: true,
      name: "SmartWiki",
      description: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
      techList: ["html", "css", "javascript", "bootstrap", "json"],
      externalLink: "https://webisk.com.br/smartwiki/",
      github: "https://github.com/JoaoSantos2007/SmartWiki",
      img: "https://raw.githubusercontent.com/JoaoSantos2007/SmartWiki/main/screenshot.png"
    },
    {
      featured: false,
      name: "SmartWiki",
      description: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
      techList: ["html", "css", "javascript", "bootstrap", "json"],
      externalLink: "https://webisk.com.br/smartwiki/",
      github: "https://github.com/JoaoSantos2007/SmartWiki",
      img: "https://raw.githubusercontent.com/JoaoSantos2007/SmartWiki/main/screenshot.png"
    },
    {
      featured: false,
      name: "SmartWiki",
      description: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
      techList: ["html", "css", "javascript", "bootstrap", "json"],
      externalLink: "https://webisk.com.br/smartwiki/",
      github: "https://github.com/JoaoSantos2007/SmartWiki",
      img: "https://raw.githubusercontent.com/JoaoSantos2007/SmartWiki/main/screenshot.png"
    },
    {
      featured: false,
      name: "SmartWiki",
      description: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
      techList: ["html", "css", "javascript", "bootstrap", "json"],
      externalLink: "https://webisk.com.br/smartwiki/",
      github: "https://github.com/JoaoSantos2007/SmartWiki",
      img: "https://raw.githubusercontent.com/JoaoSantos2007/SmartWiki/main/screenshot.png"
    },
    {
      featured: false,
      name: "SmartWiki",
      description: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
      techList: ["html", "css", "javascript", "bootstrap", "json"],
      externalLink: "https://webisk.com.br/smartwiki/",
      github: "https://github.com/JoaoSantos2007/SmartWiki",
      img: "https://raw.githubusercontent.com/JoaoSantos2007/SmartWiki/main/screenshot.png"
    },
    {
      featured: false,
      name: "SmartWiki",
      description: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
      techList: ["html", "css", "javascript", "bootstrap", "json"],
      externalLink: "https://webisk.com.br/smartwiki/",
      github: "https://github.com/JoaoSantos2007/SmartWiki",
      img: "https://raw.githubusercontent.com/JoaoSantos2007/SmartWiki/main/screenshot.png"
    }
  ]

  return (
    <>
      <FeaturedProjects projects={projects} />
      <OtherProjects projects={projects}/>
    </>
  )
}

export default Projects