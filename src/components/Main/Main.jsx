import About from '../../sections/About/About'
import Experience from '../../sections/Experience/Experience'
import Hero from '../../sections/Hero/Hero'
import Projects from '../../sections/Projects'
import './Main.css'

const Main = () => {
  return (
    <div id='content'>
      <main className='main'>
        <Hero />

        <About />
        <Experience />
        <Projects />
      </main>
    </div>
  )
}

export default Main