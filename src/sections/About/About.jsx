import "./About.css"
import myPhoto from "../../assets/images/me.png"
import ImageOverlay from "../../animations/ImageOverlay"

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section__header">
        <p className="section__number">01.</p>
        <h2 className="section__title">About Me</h2>
        <hr className="section__spacer"/>
      </div>

      <div className="about__info">
        <div className="about__texts">
          <div>
            <p>Hello! My name is João Pedro Tomaz dos Santos, and I’m passionate about creating innovative solutions with technology. My journey into programming began in late 2020 when I decided to explore the world of code on my own. As a self-taught developer, I’ve built my skills by diving into a variety of technologies and projects.</p>
            <p>Starting with programming logic, I quickly moved on to learning API development with Node.js, building IoT projects with C++ and Arduino, and creating websites using HTML, CSS, and JavaScript. Over time, I expanded my knowledge into modern frameworks like React and Bootstrap, gaining hands-on experience in frontend and backend development.</p>
            <p>I’m also well-versed in configuring and managing servers like Apache and Nginx, and I’ve worked extensively with Linux systems. My curiosity has led me to explore everything from IoT innovation to building responsive, user-friendly web applications.</p>
            <p>I believe that technology should be accessible and impactful, and I’m constantly striving to learn and grow as a developer.</p>
            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>
          <ul className="about__skills">
            <li>Web</li>
            <li>Linux</li>
            <li>React</li>
            <li>Arduino</li>
            <li>API</li>
            <li>MongoDB</li>
          </ul>
        </div>

        <div className="about__image">
          <ImageOverlay href="https://github.com/JoaoSantos2007" src={myPhoto} width="300px" height="300px" />
        </div>
      </div>
    </section>
  )
}

export default About