import "./About.css"
import myPhoto from "../../assets/images/me.png"

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
            <p>Hello! My name is João Pedro Tomaz dos Santos and I enjoy creating things that live on the internet. My interest in web development started back in 2020 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML &amp; CSS!</p>
            <p>Fast-forward to today, and I’ve had the privilege of working at <a href="https://us.mullenlowe.com/" rel="noopener noreferrer" target="_blank">an advertising agency</a>, <a href="https://starry.com/" rel="noopener noreferrer" target="_blank">a start-up</a>, <a href="https://www.apple.com/" rel="noopener noreferrer" target="_blank">a huge corporation</a>, and <a href="https://scout.camd.northeastern.edu/" rel="noopener noreferrer" target="_blank">a student-led design studio</a>. My main focus these days is building accessible, inclusive products and digital experiences at <a href="https://upstatement.com/" rel="noopener noreferrer" target="_blank">Upstatement</a> for a variety of clients.</p>
            <p>I also recently <a href="https://www.newline.co/courses/build-a-spotify-connected-app" rel="noopener noreferrer" target="_blank">launched a course</a> that covers everything you need to build a web app with the Spotify API using Node &amp; React.</p>
            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>
          <ul className="about__skills">
            <li>JavaScript</li>
            <li>Linux</li>
            <li>React</li>
            <li>Arduino</li>
            <li>Node.js</li>
            <li>MongoDB</li>
          </ul>
        </div>

        <div className="about__image">
          <div className="about__image-overlay">
            <img src={myPhoto} alt="Descrição da Imagem" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About