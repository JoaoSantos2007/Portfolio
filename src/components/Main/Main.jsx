import About from '../../sections/About/About'
import Contact from '../../sections/Contact'
import Experience from '../../sections/Experience/Experience'
import Featured from '../../sections/Featured/Featured'
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
        <Featured />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default Main