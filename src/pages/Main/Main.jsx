import About from "../../layouts/About/About.jsx";
import Contact from "../../layouts/Contact/Contact.jsx";
import Experience from "../../layouts/Experience/Experience.jsx";
import Featured from "../../layouts/Featured/Featured.jsx";
import Hero from "../../layouts/Hero/Hero.jsx";
import Projects from "../../layouts/Projects/Projects.jsx";
import "./Main.css";
import PropTypes from "prop-types";

const Main = ({ menuMode }) => {
  return (
    <main className={`main ${menuMode ? "main-disabled" : ""}`}>
      <Hero />

      <About />
      <Experience />
      <Featured />
      <Projects />
      <Contact />
    </main>
  );
};
Main.propTypes = {
  menuMode: PropTypes.bool.isRequired,
};

export default Main;
