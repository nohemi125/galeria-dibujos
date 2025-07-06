import { Link, useLocation } from "react-router-dom"
import "../CSS/Navegacion.css"

function Navigation() {
  const location = useLocation()

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <h3>Galería Nohemi</h3>
        </Link>

        <div className="nav-links">
          <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>
            Inicio
          </Link>
          <Link to="/infancia" className={`nav-link ${location.pathname === "/infancia" ? "active" : ""}`}>
            Infancia
          </Link>
          <Link to="/comienzos" className={`nav-link ${location.pathname === "/comienzos" ? "active" : ""}`}>
            Mis Comienzos
          </Link>
          <Link to="/actuales" className={`nav-link ${location.pathname === "/actuales" ? "active" : ""}`}>
            Actuales
          </Link>
          <Link to="/color" className={`nav-link ${location.pathname === "/color" ? "active" : ""}`}>
            A Color
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
