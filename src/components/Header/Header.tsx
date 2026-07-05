import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import logoIcon from "../../assets/logo-icon.png";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();
  const { totalItems } = useCart();

  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__logo">
          Golden Brew Caffe
        </Link>

        <nav className="header__nav" aria-label="Meniu principal">
          <ul className="header__nav-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <a href="#gallery">Blog</a>
            </li>
            <li>
              <Link to="/order">Menu</Link>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
          </ul>
        </nav>

        <div className="header__actions">
          <button
            type="button"
            className="header__cart"
            onClick={() => navigate("/order")}
            aria-label="Coș de cumpărături"
          >
            🛒 <span>{totalItems}</span>
          </button>
          <button
            type="button"
            className="header__contact-btn"
            onClick={() => navigate("/contact")}
          >
            Contact us
          </button>
          <span className="header__avatar" aria-hidden="true">
            <img src={logoIcon} alt="" className="header__avatar-img" />
          </span>
        </div>
      </div>
    </header>
  );
}
