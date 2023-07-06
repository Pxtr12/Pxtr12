import React, { useState } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  const email = 'banypierre10@gmail.com';
  const instagramUsername = 'pxtr___';
  const linkedinUsername = 'peter-banywesize';
  const twitterUsername = 'Peter61738745';

  const [name, setName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmailAddress(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const validateForm = () => {
    if (!name || !emailAddress || !message) {
      setError('Veuillez remplir tous les champs du formulaire.');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailAddress)) {
      setError('Veuillez saisir une adresse e-mail valide.');
      return false;
    }

    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      setError(''); // Reset error message

      // Code to send the form data goes here

      // Reset form fields after submission
      setName('');
      setEmailAddress('');
      setMessage('');
      setIsMessageSent(true);
    }
  };

  return (
    <div className="contact">
      <div className="container-fluid contactContainer">
        <h1 className="mt-5 text-center">Contact</h1>
        <div className="row justify-content-center">
          <div className="col-md-6">
          
              <div className="card-body text-center">
                <h5 className="card-title"></h5>
                <div className="social-icons mt-4">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="social-icon" />
                  </a>
                  <a href={`https://twitter.com/${twitterUsername}`} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} className="social-icon" />
                  </a>
                  <a href={`https://linkedin.com/in/${linkedinUsername}`} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
                  </a>
                  <a href={`https://www.instagram.com/${instagramUsername}`} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} className="social-icon" />
                  </a>
                </div>
              </div>
            
          </div>
        </div>
      </div>

      <div className="contact-form">
        <h2>Mail via ce formulaire</h2>

        <label className="con" htmlFor="name">Nom :</label>
        <input
          className="conn"
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleNameChange}
          required
        />

        <br />

        <label className="con" htmlFor="email">Email :</label>
        <input
          className="conn"
          type="email"
          id="email"
          name="email"
          value={emailAddress}
          onChange={handleEmailChange}
          required
        />

        <br />

        <label className="con" htmlFor="message">Message :</label>
        <p className="messages">Saisissez votre message ici (250 mots maximum)</p>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={handleMessageChange}
          maxLength="250"
          required
        ></textarea>

        <div className="word-count"></div>

        <br />

        {isMessageSent ? (
          <p className="success-message">Le message a été envoyé avec succès!</p>
        ) : (
          <button className="bu" type="submit" onClick={handleSubmit}>Envoyer</button>
        )}

        {error && <p className="error-message">{error}</p>}
      </div>

      <div className="social-media">
        <a href="#" className="emoji yellow">&#x1F604;</a>
        <a href="#" className="emoji red">&#x1F525;</a>
        <a href="#" className="emoji blue">&#x1F499;</a>
      </div>
    </div>
  );
}

export default Contact;
