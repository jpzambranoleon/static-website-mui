import { ChevronRight, Close, Menu } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="header" data-header>
      <div className="container">
        <div className="overlay" data-overlay></div>

        <a href="#">
          <h1 className="logo">Desinic</h1>
        </a>

        <nav className="navbar" data-navbar>
          <div className="navbar__top">
            <a href="#" class="logo">
              Desinic
            </a>

            <button
              className="nav-close-btn"
              aria-label="Close Menu"
              data-nav-close-btn
            >
              <Close
                fontSize="large"
                sx={{ display: "block", pointerEvents: "none" }}
              />
            </button>
          </div>

          <ul className="navbar__list">
            <li className="navbar__item">
              <a href="#home" className="navbar__link" data-navbar-link>
                Home
              </a>
            </li>

            <li className="navbar__item">
              <a href="#about" className="navbar__link" data-navbar-link>
                About
              </a>
            </li>

            <li className="navbar__item">
              <a href="#services" className="navbar__link" data-navbar-link>
                Services
              </a>
            </li>

            <li className="navbar__item">
              <a href="#features" className="navbar__link" data-navbar-link>
                Features
              </a>
            </li>

            <li className="navbar__item">
              <a href="#blog" className="navbar__link" data-navbar-link>
                Blog
              </a>
            </li>

            <li className="navbar__item">
              <a href="#" className="navbar__link" data-navbar-link>
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        <a href="#" className="btn">
          <ChevronRight
            fontSize="large"
            sx={{ display: "block", pointerEvents: "none" }}
          />
          <span>Get A Quote</span>
        </a>

        <button
          className="nav-open-btn"
          aria-label="Open Menu"
          data-nav-open-btn
        >
          <Menu
            fontSize="large"
            sx={{ display: "block", pointerEvents: "none" }}
          />
        </button>
      </div>
    </header>
  );
}
