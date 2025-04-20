import { useState, useEffect } from "react";
import logo from "../assets/ugm-logo.png";
import "../App.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleToggle = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg fixed-top navbar-light ${
          scrolled ? "scrolled-navbar" : ""
        }`}
      >
        <div className="container">
          <img src={logo} alt="Serene Logo" width={250} draggable="false" />

          <button
            className="navbar-toggler p-1 ms-auto"
            type="button"
            onClick={handleToggle}
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>

          <div
            className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <a className="nav-link mx-2" href="#carouselExampleCaptions">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="#about-section">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2 text-nowrap" href="#whyus-section">
                  Why Us?
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="#services-section">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="#contact-section">
                  Contact
                </a>
              </li>

              <a
                href="https://wa.me/0567301136?text=Hi%2C%20I%27m%20interested%20in%20your%20cleaning%20services"
                className="navbar-book-now fw-bold mb-lg-0 mb-2"
              >
                Book Now
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
