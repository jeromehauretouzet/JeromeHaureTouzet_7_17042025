import { NavLink } from 'react-router-dom';       // Liens 'Accueil' et 'A propos' de nav
import logo from '../../assets/logo-header.svg';  // Logo du header
import './Header.scss';

function Header() {
  return (
    <header className="header">
      {/* --- Logo --- */}
      <img src={logo} alt="Kasa" className="header__logo" />

      {/* --- Navigation --- */}
      <nav className="header__nav">
        <NavLink to="/" className="header__link">Accueil</NavLink>
        <NavLink to="/a-propos" className="header__link">A Propos</NavLink>
      </nav>
    </header>
  );
}

export default Header;