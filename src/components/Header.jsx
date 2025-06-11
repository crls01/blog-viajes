import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="header-center">
        <Link to="/">
          <img src="/img/logos/logo.png" alt="PlanYourTrip Logo" className="header-logo" />
        </Link>
      </div>
    </header>
  );
}
