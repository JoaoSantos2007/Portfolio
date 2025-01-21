import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import './Hero.css'

const Hero = () => {
  const navigate = useNavigate()

  return (
    <section className='hero'>
      <h1>Hi, my name is</h1>
      <h2>João Santos.</h2>
      <h3>I build things for the web.</h3>
      <p>
      I’m a high school student with a strong passion for technology and self-learning. I’ve taught myself everything I know about computers and programming through online resources, and I’m always eager to learn more.
      </p>

      <Button className="viewFormation" text="View my Achievements!" task={() => navigate('/achievements')} rel="noreferrer"/>
    </section>
  )
}

export default Hero