import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>Contacto</h4>
                    <p>Email: contacto@planyourtrip.com</p>
                    <p>Teléfono: +34 652 051 835</p>
                </div>
                <div className="footer-section">
                    <h4>Síguenos</h4>
                    <div className="social-links">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                </div>
                <div className="footer-section">
                    <h4>Enlaces rápidos</h4>
                    <ul>
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/destinos">Destinos</a></li>
                        <li><a href="/sobre-nosotros">Sobre Nosotros</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 Blog Viajes. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}
