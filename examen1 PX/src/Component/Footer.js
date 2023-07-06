import React from 'react';
import styles from './Footer.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <div className={`${styles.footer}`}>
      <p className="text-center text-light">
        © 2023 Peter. Tous droits réservés.
        Designed and Developed by Peter
      </p>
      <div className="text-center">
        <a href="https://portfolio-by-peter.jimdosite.com/" target="_blank" rel="noopener noreferrer"> Portfolio/Art</a>
        {" "}
        |{" "}
        <a href="https://github.com/pet" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        {" "}
        |{" "}
        <a href="https://www.linkedin.com/in/peter-banywesize" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default Footer;
