import Button from '../../components/Button'
import './Hero.css'

const Hero = () => {
  return (
    <section className='hero'>
      <h1>Hi, my name is</h1>
      <h2>João Santos.</h2>
      <h3>I build things for the web.</h3>
      <p>
      I’m a high school student with a strong passion for technology and self-learning. I’ve taught myself everything I know about computers and programming through online resources, and I’m always eager to learn more.
      </p>

      <Button className="viewFormation" text="Check out my Courses!" href='/courses' rel="noreferrer"/>
    </section>
  )
}

export default Hero