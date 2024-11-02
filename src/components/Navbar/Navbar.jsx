import "./Navbar.css"

const Navbar = () => {
  const links = [
    {id: 1, name: "About", url: "#about"},
    {id: 2, name: "Experience", url: "#experience"},
    {id: 3, name: "Work", url: "#work"},
    {id: 4, name: "Contact", url: "#contact"},
  ]

  const gambiarra = "< />"

  return (
    <header className="navbar">
      <nav className="navbar__content">
        <div className="navbar__logo logo">
          <a href="/">{gambiarra}</a>
        </div>

        <div className="navbar__links">
          <ol>
            {links.map((link, index) => (
              <li key={link.id}>
                <a href={link.url} style={{transitionDelay: `${index * 10}ms`}}>{link.name}</a>
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