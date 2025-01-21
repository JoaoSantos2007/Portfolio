import "./Featured.css";
import FeaturedCard from "../../components/FeaturedCard/FeaturedCard";
import PedePizzaImg from "../../assets/images/pedepizza.png";
import NodeCraftImg from "../../assets/images/nodecraft.jpg";
import SmartWikiImg from "../../assets/images/smartwiki.png";

const Featured = () => {
  const projects = [
    {
      name: "Pede Pizza",
      description:
        "PedePizza is a sleek and responsive pizza-ordering platform powered by Node.js, Express, and a custom RESTful API. Built with HTML, CSS, and JavaScript, it offers a delightful user experience for browsing menus, managing orders, and customizing your cart. Perfectly designed to work across all devices, PedePizza combines functionality and style for an effortless pizza-ordering experience.",
      techList: ["Node.js", "API", "Express", "Html", "Css", "Javascript"],
      externalLink: "https://webisk.com.br/pizza",
      github: "https://github.com/JoaoSantos2007/PedePizza",
      img: PedePizzaImg,
    },
    {
      name: "NodeCraft",
      description:
        "A powerful API built with Node.js to create, manage, and control Minecraft servers on Linux. NodeCraft simplifies server setup, editing, and runtime management with a focus on efficiency and automation.",
      techList: ["Node.js", "Express", "Json", "Sqlite", "Linux"],
      externalLink: "https://github.com/JoaoSantos2007/Nodecraft",
      github: "https://github.com/JoaoSantos2007/Nodecraft",
      img: NodeCraftImg,
    },
    {
      name: "SmartWiki",
      description:
        "A modern, responsive wiki platform built with HTML, CSS, JavaScript, and Bootstrap, focusing on smart cities and smart home products. Explore insightful articles, guides, and a dedicated store for smart home devices. Perfectly optimized for seamless browsing across all devices.",
      techList: ["Html", "Css", "Javascript", "Bootstrap", "Json"],
      externalLink: "https://webisk.com.br/smartwiki/",
      github: "https://github.com/JoaoSantos2007/SmartWiki",
      img: SmartWikiImg,
    },
  ];

  return (
    <section id="projects" className="featured">
      <div className="section__header">
        <p className="section__number">03.</p>
        <h2 className="section__title">Some Things I&apos;ve built</h2>
        <hr className="section__spacer" />
      </div>

      <ul className="featured__list">
        {projects.map((project, index) => (
          <FeaturedCard
            key={`featured-${index}`}
            project={project}
            index={index}
          />
        ))}
      </ul>
    </section>
  );
};

export default Featured;
