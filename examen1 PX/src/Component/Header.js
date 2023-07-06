import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faProjectDiagram, faEnvelope, faUser, faComment } from '@fortawesome/free-solid-svg-icons';
import styles from './header.module.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar navbar-expand-md navbar-light bg-light ${styles.container}`}>
      <div className="container-fluid">
        <button
          className={`navbar-toggler ${isMenuOpen ? 'open' : ''}`}
          type="button"
          onClick={handleMenuToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse justify-content-center ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className={`navbar-nav ${styles.menu}`}>
            <li className={`nav-item ${styles.menuItem}`}>
              <Link to="/" className={`nav-link ${styles.item} ms-3`} onClick={handleMenuToggle}>
                <FontAwesomeIcon icon={faHome} className={styles.icon} /> Home
              </Link>
            </li>
            <li className={`nav-item ${styles.menuItem}`}>
              <Link to="/projets" className={`nav-link ${styles.item} ms-3`} onClick={handleMenuToggle}>
                <FontAwesomeIcon icon={faProjectDiagram} className={styles.icon} /> Projets
              </Link>
            </li>
            <li className={`nav-item ${styles.menuItem}`}>
              <Link to="/testimonial" className={`nav-link ${styles.item} ms-3`} onClick={handleMenuToggle}>
                <FontAwesomeIcon icon={faComment} className={styles.icon} /> Testimonial
              </Link>
            </li>
            <li className={`nav-item ${styles.menuItem}`}>
              <Link to="/contact" className={`nav-link ${styles.item} ms-3`} onClick={handleMenuToggle}>
                <FontAwesomeIcon icon={faEnvelope} className={styles.icon} /> Contact
              </Link>
            </li>
            <li className={`nav-item ${styles.menuItem}`}>
              <Link to="/about" className={`nav-link ${styles.item} ms-3`} onClick={handleMenuToggle}>
                <FontAwesomeIcon icon={faUser} className={styles.icon} /> About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
