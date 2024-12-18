import "./Projects.css"
import { useState } from "react"
import ProjectCard from "../../components/ProjectCard"
import Button from "../../components/Button"

const Projects = () => {
  const [viewFull, setViewFull] = useState(false)

  const projects = [
    {
      name: "NodeCraft",
      description: "A streamlined solution for managing Minecraft servers on Linux, featuring a Node.js API and a React-powered web interface.",
      techList: ["Node", "Api", "React", "Html", "Css", "Js"],
      github: "https://github.com/JoaoSantos2007/NodeCraft",
    },
    {
      name: "PedePizza",
      description: "A responsive pizza ordering website built with HTML, CSS, JavaScript, and a Node.js REST API. Designed to provide a user-friendly experience across all devices.",
      techList: ["Node", "Api", "Html", "Css", "Js"],
      externalLink: "https://webisk.com.br/pizza/",
      github: "https://github.com/JoaoSantos2007/PedePizza",
    },
    {
      name: "SmartWiki",
      description: "A responsive wiki platform built with HTML, CSS, JavaScript, and Bootstrap, focused on smart cities and smart home products. Features articles, guides, and a store, optimized for all devices.",
      techList: ["Html", "Css", "Js", "Bootstrap", "Json"],
      externalLink: "https://webisk.com.br/smartwiki/",
      github: "https://github.com/JoaoSantos2007/SmartWiki",
    },
    {
      name: "Portfolio",
      description: "A personal portfolio website built with React, showcasing my experience in software development. It highlights projects, skills, and achievements with a modern and responsive design.",
      techList: ["React", "Html", "Css", "Javascript"],
      externalLink: "https://webisk.com.br",
      github: "https://github.com/JoaoSantos2007/Portfolio",
    },
    {
      name: "ArduinoIOT",
      description: "A C++ project for IoT devices using ESP, featuring Wi-Fi and MQTT connectivity, sensor compatibility, and a built-in access point server for easy configuration.",
      techList: ["C++", "Arduino", "Esp"],
      github: "https://github.com/JoaoSantos2007/ArduinoIOT",
    },
    {
      name: "TripConnectAPI",
      description: "A travel API built with Node.js, Express, and Sequelize, featuring MySQL integration. TripConnectAPI provides destination insights and authentic traveler testimonials, enhanced with OpenAI API for smarter experiences.",
      techList: ["Node", "Api", "Js", "OpenAI"],
      github: "https://github.com/JoaoSantos2007/TripConnectAPI",
    },
    {
      name: "DataFlight",
      description: "An IoT management API built with Node.js, leveraging MongoDB and MQTT. DataFlight streamlines the control and monitoring of connected devices in a seamless and efficient system.",
      techList: ["Node", "Api", "Js", "Mqtt", "Express"],
      github: "https://github.com/JoaoSantos2007/DataFlight",
    },
    {
      name: "Culturafro",
      description: "A responsive website built with HTML, CSS, and JavaScript, CulturaFro highlights African culture in Brazil, offering an engaging and educational experience.",
      techList: ["Html", "Css", "Javascript"],
      externalLink: "https://webisk.com.br/culturafro/",
      github: "https://github.com/JoaoSantos2007/Culturafro",
    },
    {
      name: "WebSnake",
      description: "A classic Snake game and my first website, built with HTML, CSS, and JavaScript. WebSnake features simple controls, dynamic gameplay, and an on-screen score tracker for endless fun.",
      techList: ["Html", "Css", "Javascript"],
      externalLink: "https://webisk.com.br/snake/",
      github: "https://github.com/JoaoSantos2007/WebSnake",
    },
    {
      name: "PythonPulse",
      description: "A media player built with Python, featuring a Pygame interface and audio playback capabilities. PythonPulse offers a simple and functional solution for enjoying your favorite audio files.",
      techList: ["Python", "PyGame", "AudioPlayer"],
      github: "https://github.com/JoaoSantos2007/PythonPulse",
    },
    {
      name: "Phoenix",
      description: "A responsive news website built with HTML, CSS, JavaScript, and Bootstrap. Phoenix delivers the latest updates on smart cities in Brazil, focusing on innovation, sustainability, and urban development.",
      techList: ["Html", "Css", "Javascript", "Bootstrap", "Json"],
      externalLink: "https://webisk.com.br/phoenix/",
      github: "https://github.com/JoaoSantos2007/Phoenix",
    },
    {
      name: "TicTaCpp",
      description: "A command-line Tic Tac Toe game for two players, built in C++. TicTaCpp offers a simple and fun implementation of the classic game, perfect for quick matches.",
      techList: ["C++"],
      github: "https://github.com/JoaoSantos2007/TicTaCpp",
    },
    {
      name: "SnakePy",
      description: "A simple Snake game built with Python and Pygame. SnakePy features intuitive controls, dynamic gameplay, and a classic challenge of collecting food while avoiding collisions.",
      techList: ["Python", "PyGame"],
      github: "https://github.com/JoaoSantos2007/SnakePy",
    },
    {
      name: "DeterminantesCpp",
      description: "A determinant calculator built in C++, designed for square matrices up to 3x3. DeterminantesCPP offers a simple interface for quick and accurate calculations.",
      techList: ["C++"],
      github: "https://github.com/JoaoSantos2007/DeterminantesCpp",
    },
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