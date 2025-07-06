import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
import "../CSS/Navegacion.css"

function Navigation() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <h3>Galería Nohemi</h3>
        </Link>

        {/* Botón hamburguesa */}
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menú de navegación */}
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`} onClick={closeMenu}>
            Inicio
          </Link>
          <Link to="/infancia" className={`nav-link ${location.pathname === "/infancia" ? "active" : ""}`} onClick={closeMenu}>
            Infancia
          </Link>
          <Link to="/comienzos" className={`nav-link ${location.pathname === "/comienzos" ? "active" : ""}`} onClick={closeMenu}>
            Mis Comienzos
          </Link>
          <Link to="/actuales" className={`nav-link ${location.pathname === "/actuales" ? "active" : ""}`} onClick={closeMenu}>
            Actuales
          </Link>
          <Link to="/color" className={`nav-link ${location.pathname === "/color" ? "active" : ""}`} onClick={closeMenu}>
            A Color
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
