import "../CSS/Footer.css"

function Footer() {
  return (
    <footer className="footer-artista">
      <div className="footer-contenido">
        <div className="footer-nombre-bloque">
          <span className="footer-titulo"> Nohemy Morelo</span>
          <span className="footer-subtitulo-texto">Artista Autodidacta · Realismo · Retratos</span>
        </div>

        <hr className="footer-divisor" />

        <div className="footer-redes-bloque">
          <a
            href="https://www.tiktok.com/@nohemi_dibuja?_r=1&_t=ZS-96mdGxUYwLc" 
            target="_blank"
            rel="noopener noreferrer"
            className="footer-red tiktok"
            aria-label="TikTok de Nohemy Morelo"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
            </svg>
            <span>TikTok</span>
          </a>

          <a
            href="https://www.facebook.com/share/17YyLGmixv/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-red facebook"
            aria-label="Facebook de Nohemy Morelo"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span>Facebook</span>
          </a>
        </div>

        <div className="footer-copy">
          <p>© {new Date().getFullYear()} Nohemy Morelo · Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
