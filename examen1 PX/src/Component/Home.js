import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faCss3, faHtml5, faJs, faNodeJs, faReact,  faGitAlt } from '@fortawesome/free-brands-svg-icons';
import photo from '../pxtr.png';
import styles from './Home.module.css';


library.add(faJava, faCss3, faHtml5, faJs, faNodeJs, faReact,  faGitAlt);

function Home() {
  return (
    <div className="container">
      <div className="row">
        
        <div className="col-md-6 d-flex align-items-center">
          <div style={{ marginLeft: '20px' }}>
            <div style={{ fontSize: '24px', textAlign: 'left' }}>
              <h1>Salut, Je suis Peter Banywesize</h1>
              <p style={{ fontSize: '25px', marginTop: '30px' }}>
              Programmeur et trader expérimenté avec une solide expertise en développement logiciel et finance.Expérience réussie en conception, analyse de données financières, prise de décisions éclairées et gestion des risques. Fiable, organisé et doté d'excellentes compétences en communication et travail d'équipe. Passionné par l'apprentissage continu et les nouvelles technologies. Prêt à relever de nouveaux défis.
              </p>
              <h5 
              style={{ fontSize: '50px', marginBottom: '10px', fontWeight: 'bold', color: '#2c264e' }}>
              </h5>
              
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <img src={photo} className="d-block w-100" alt="Slide 1" style={{ marginTop: '20px' }} />
        </div>
      </div>
      
      <div className={`container ${styles.skillsContainer}`}>
        <h1 className='mt-5'>Compétences professionnelles</h1>
        <div className="row justify-content-center">
          
          <div className="col-md-6 col-lg-3 mt-5">
            <div className={`card shadow ${styles.skillCard}`}>
              <div className="card-body text-center">
                <FontAwesomeIcon icon={faReact} className="skill-icon" />
                <h5 className="card-title">React.js</h5>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 col-lg-3 mt-5">
            <div className={`card shadow ${styles.skillCard}`}>
              <div className="card-body text-center">
                <FontAwesomeIcon icon={faCss3} className="skill-icon" />
                <h5 className="card-title">CSS</h5>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mt-5">
            <div className={`card shadow ${styles.skillCard}`}>
              <div className="card-body text-center">
                <FontAwesomeIcon icon={faHtml5} className="skill-icon" />
                <h5 className="card-title">HTML</h5>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mt-5">
            <div className={`card shadow ${styles.skillCard}`}>
              <div className="card-body text-center">
                <FontAwesomeIcon icon={faJava} className="skill-icon" />
                <h5 className="card-title">Java</h5>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mt-5">
            <div className={`card shadow ${styles.skillCard}`}>
              <div className="card-body text-center">
                <FontAwesomeIcon icon={faJs} className="skill-icon" />
                <h5 className="card-title">JavaScript</h5>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mt-5">
            <div className={`card shadow ${styles.skillCard}`}>
              <div className="card-body text-center">
                <FontAwesomeIcon icon={faNodeJs} className="skill-icon" />
                <h5 className="card-title">Node.js</h5>
              </div>
            </div>
          </div>
         
          <div className="col-md-6 col-lg-3 mt-5">
            <div className={`card shadow ${styles.skillCard}`}>
              <div className="card-body text-center">
                <FontAwesomeIcon icon={faGitAlt} className="skill-icon" />
                <h5 className="card-title">Git</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default Home;
