import logo from '../../assets/logo-footer.svg';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      {/* --- Logo --- */}
      <img src={logo} alt="Kasa" className="footer__logo" />

      {/* --- Copyright --- */}
      <p className="footer__copyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;