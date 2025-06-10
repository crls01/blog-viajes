import './Header.css';

export default function Header() {
    return (
        <header className="header">
            <div className="header-left">
                <h1>PlanYourTrip</h1>
            </div>
            <div className="header-center">
                <img src="/logo.png" alt="" className="header-logo" />
            </div>
            <div className="header-right">
                {/* <button className="btn-login">Iniciar Sesión</button> */}
            </div>
        </header>
    );
}
