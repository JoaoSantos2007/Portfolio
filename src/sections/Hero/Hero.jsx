import Button from '../../components/Button'
import './Hero.css'

const Hero = () => {
  return (
    <section className='hero'>
      <h1>Hi, my name is</h1>
      <h2>João Santos</h2>
      <h3>I build things for the web.</h3>
      <p>
      I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.
      </p>

      <Button className="viewFormation" text="Check out my Courses!" href='/courses' rel="noreferrer"/>
    </section>
  )
}

export default Hero