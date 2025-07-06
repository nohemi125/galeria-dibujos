import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Navigation from "./components/Navegation"
import SesionTiempo from "./components/SesionTiempo"
import SobreMi from "./components/SobreMi"
import Infancia from "./components/Infancia"
import Comienzos from "./components/Comienzos"
import Actuales from "./components/Actuales"
import AColor from "./components/AColor"

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <SobreMi />
              <SesionTiempo />
            </div>
          }
        />
        <Route path="/infancia" element={<Infancia />} />
        <Route path="/comienzos" element={<Comienzos />} />
        <Route path="/actuales" element={<Actuales />} />
        <Route path="/color" element={<AColor />} />
      </Routes>
    </Router>
  )
}

export default App
