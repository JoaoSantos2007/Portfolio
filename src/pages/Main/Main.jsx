import About from "../../layouts/About/About.jsx";
import Contact from "../../layouts/Contact/Contact.jsx";
import Experience from "../../layouts/Experience/Experience.jsx";
import Featured from "../../layouts/Featured/Featured.jsx";
import Hero from "../../layouts/Hero/Hero.jsx";
import Projects from "../../layouts/Projects/Projects.jsx";
import "./Main.css";

const Main = () => {
  return (
    <main className="main">
      <Hero />

      <About />
      <Experience />
      <Featured />
      <Projects />
      <Contact />
    </main>
  );
};

export default Main;
