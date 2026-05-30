import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Navigation from "./components/Navegation"
import SesionTiempo from "./components/SesionTiempo"
import SobreMi from "./components/SobreMi"
import Infancia from "./components/Infancia"
import Comienzos from "./components/Comienzos"
import Actuales from "./components/Actuales"
import AColor from "./components/AColor"
import BoligrafoColor from "./components/BoligrafoColor"
import MuroDeAmor from "./components/MuroDeAmor"
import Footer from "./components/Footer"

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
        <Route path="/boligrafo" element={<BoligrafoColor />} />
        <Route path="/muro-de-amor" element={<MuroDeAmor />} />

      </Routes>

    <Footer />

    </Router>
  )
}

export default App
