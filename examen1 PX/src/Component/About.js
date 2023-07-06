import React from 'react';
import styles from './About.module.css';

function About() {
  return (
    
    <div className={`${styles.container}`}>
       <br> 
      </br>
      <br> 
      </br>
      <h1 className={`${styles.title}`}>À propos de moi</h1>
      <br> 
      </br>
      <p className={`${styles.description}`}>
        
        </p>
      <p className={`${styles.description}`}>
        Développeur ambitieux, trader autodidacte avec un an d'expérience en développement web.
      </p>
      <p className={`${styles.description}`}>
        Actuellement à la recherche de nouvelles opportunités  et prêt à travailler sur des projets stimulants et variés avec les dernières technologies.
      </p>
      <p className={`${styles.description}`}>
        Auparavant, j'ai exercé un stage en tant que développeur web.
        Les technologies sur lesquelles j'ai travaillé : Asp.Net Core, C#, Sql, Css, Js, Bootstrap, et Bien d'autre.
      </p>
      <p className={`${styles.description}`}>
        J'apprends actuellement la bibliothèque React Js.
      </p>
    </div>
  );
}

export default About;
