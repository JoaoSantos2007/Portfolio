import "./Navbar.css"
import { useState, useEffect } from "react"
import Logo from "../Logo/Logo"; 
import Button from "../Button";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [navbarClass, setNavbarClass] = useState('navbar');
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setNavbarClass('navbar'); // Classe padrão no topo da página
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
    {id: 1, name: "About", section: "about"},
    {id: 2, name: "Experience", section: "experience"},
    {id: 3, name: "Work", section: "projects"},
    {id: 4, name: "Contact", section: "contact"},
  ]

  const handleNavigation = (section) => {
    navigate('/');
    setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  };
  
  return (
    <header className={navbarClass}>
      <nav className="navbar__content">
        <div className="navbar__logo">
          <Link to='/'>
            <Logo />
          </Link>
        </div>

        <div className="navbar__links">
          <ol className="navbar__list">
            {links.map((link, index) => (
              <li className="navbar__item" key={link.id}>
                <p className="navbar__link" onClick={() => handleNavigation(link.section)} style={{transitionDelay: `${index * 10}ms`}}>{link.name}</p>
              </li> 
            ))}
          </ol>

          <Button text="Resume" href="/resume.pdf" rel="noopener noreferrer" />
        </div>
      </nav>
    </header>
  )
}

export default Navbar