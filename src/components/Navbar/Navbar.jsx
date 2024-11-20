import "./Navbar.css"
import { useState, useEffect } from "react"

const Navbar = () => {
  const [navbarClass, setNavbarClass] = useState('navbar');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setNavbarClass('navbar navbar-test'); // Classe padrão no topo da página
      } else if (currentScrollY > lastScrollY) {
        setNavbarClass('navbar'); // Scroll para baixo
      } else if (currentScrollY < lastScrollY) {
        setNavbarClass('navbar navbar-scrolled'); // Scroll para cima
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);
  
  const links = [
    {id: 1, name: "About", url: "#about"},
    {id: 2, name: "Experience", url: "#experience"},
    {id: 3, name: "Work", url: "#projects"},
    {id: 4, name: "Contact", url: "#contact"},
  ]
  
  const symbol = "< />"
  
  console.log(navbarClass)
  
  return (
    <header className={'navbar'}>
      <nav className="navbar__content">
        <div className="navbar__logo">
          <a href="/">{symbol}</a>
        </div>

        <div className="navbar__links">
          <ol className="links__list">
            {links.map((link, index) => (
              <li className="list__item" key={link.id}>
                <a className="navbar__link" href={link.url} style={{transitionDelay: `${index * 10}ms`}}>{link.name}</a>
              </li> 
            ))}
          </ol>

          <a className="resume-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar