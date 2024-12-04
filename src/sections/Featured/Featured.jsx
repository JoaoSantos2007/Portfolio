import "./Featured.css"
import FeaturedCard from "../../components/FeaturedCard/FeaturedCard";

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
      techList: ["Html", "Css", "Javascript", "Bootstrap", "Json"],
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
          <FeaturedCard key={`featured-${index}`} project={project}/>
        ))}
      </ul>
    </section>
  )
}

export default Featured