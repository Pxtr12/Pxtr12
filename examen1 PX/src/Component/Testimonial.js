import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Testimonials.css";
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';


function Testimonials() {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: 'Bakari',
      role: 'Programmeur',
      relation: 'Coordonateur',
      content: 'Il aura 90/100 et Peter est un programmeur exceptionnellement doué. Sa capacité à résoudre des problèmes complexes et à trouver des solutions efficaces est vraiment impressionnante. Il a une grande expertise dans différents langages de programmation et une compréhension approfondie des concepts clés.',
      rating: 4.5
    },
    {
      id: 2,
      name: 'John',
      role: 'Développeur Web',
      relation: 'famille',
      content: 'J\'ai eu le plaisir de travailler avec Peter sur plusieurs projets et je suis toujours étonné par son niveau de compétence. Il est capable de transformer des idées abstraites en codes fonctionnels en un temps record. Son attention aux détails et sa rigueur dans son travail sont remarquables.',
      rating: 5
    },
    {
      id: 3,
      name: 'Lisa',
      role: 'Designer Graphique',
      relation: 'Amis',
      content: 'Peter est un programmeur brillant et créatif. Il est constamment à l\'affût des nouvelles technologies et des meilleures pratiques de programmation. Son approche novatrice et sa capacité à penser de manière critique font de lui un atout précieux dans n\'importe quelle équipe de développement.',
      rating: 4
    },
    {
      id: 4,
      name: 'Sarah',
      role: 'Développeuse Front-end',
      relation: 'Amis',
      content: 'Travailler avec Peter est une expérience enrichissante. Il est non seulement un programmeur compétent, mais aussi un excellent collaborateur. Il est toujours prêt à partager ses connaissances et à aider les autres membres de l\'équipe. Sa passion pour la programmation est contagieuse.',
      rating: 4.5
    }
  ]);

  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    role: '',
    relation: '',
    content: '',
    rating: 0
  });

  const [editingTestimonial, setEditingTestimonial] = useState(null);

  const handleInputChange = (e) => {
    setNewTestimonial({
      ...newTestimonial,
      [e.target.name]: e.target.value
    });
  };

  const addTestimonial = () => {
    if (newTestimonial.name === '' || newTestimonial.role === '' || newTestimonial.content === '' || newTestimonial.rating === 0) {
      alert('Veuillez remplir tous les champs avant d\'ajouter un témoignage.');
      return;
    }

    const id = testimonials.length + 1;
    const testimonial = { ...newTestimonial, id };
    setTestimonials([...testimonials, testimonial]);
    setNewTestimonial({
      name: '',
      role: '',
      relation: '',
      content: '',
      rating: 0
    });
  };

  const deleteTestimonial = (id) => {
    const updatedTestimonials = testimonials.filter((testimonial) => testimonial.id !== id);
    setTestimonials(updatedTestimonials);
  };

  const editTestimonial = (id) => {
    const testimonial = testimonials.find((testimonial) => testimonial.id === id);
    setEditingTestimonial(testimonial);
    setNewTestimonial({
      name: testimonial.name,
      role: testimonial.role,
      relation: testimonial.relation,
      content: testimonial.content,
      rating: testimonial.rating
    });
  };

  const updateTestimonial = () => {
    const updatedTestimonials = testimonials.map((testimonial) =>
      testimonial.id === editingTestimonial.id ? { ...testimonial, ...newTestimonial } : testimonial
    );
    setTestimonials(updatedTestimonials);
    setEditingTestimonial(null);
    setNewTestimonial({
      name: '',
      role: '', 
      relation: '',
      content: '',
      rating: 0
    });
  };

  const renderRatingStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - Math.ceil(rating);

    return (
      <div className="testimonial-rating">
        {[...Array(fullStars)].map((_, index) => (
          <FontAwesomeIcon key={index} icon={faStar} className="star filled" />
        ))}
        {halfStar && <FontAwesomeIcon icon={faStarHalfAlt} className="star half" />}
        {[...Array(emptyStars)].map((_, index) => (
          <FontAwesomeIcon key={index} icon={faStar} className="star empty" />
        ))}
      </div>
    );
  };

  return (
    <section className="testimonials-page">
      <div className="testimonials-list">
        {testimonials.map((testimonial) => (
          <div className="testimonial" key={testimonial.id}>
            <div className="testimonial-info">
              <h3>{testimonial.name}</h3>
              <p>{testimonial.role}</p>
              <p>{testimonial.relation}</p>
            </div>
            <p className="testimonial-content">{testimonial.content}</p>
            {renderRatingStars(testimonial.rating)}
            <div className="testimonial-buttons">
              <button className="edit-button" onClick={() => editTestimonial(testimonial.id)}>
                Modifier
              </button>
              <button className="delete-button" onClick={() => deleteTestimonial(testimonial.id)}>
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>
      
        <div className="form-groupi">
          <h4>
            
            Ajouter un témoignage

          </h4>
       </div>

      <div className="add-testimonial-form">
        
        <form>
          <div className="form-group">
            <label>Nom et Prénom :</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={newTestimonial.name}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Domaine :</label>
            <input
              type="text"
              className="form-control"
              name="role"
              value={newTestimonial.role}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
  <label>Relation :</label>
  <select
    className="form-control"
    name="relation"
    value={newTestimonial.relation}
    onChange={handleInputChange}
  >
    <option value="amis">Amis</option>
    <option value="collègues">Collègues</option>
    <option value="famille">Famille</option>
    <option value="coordonateur">Coordonateur</option>
  </select>
</div>


          <div className="form-group">
            <label>Témoignage :</label>
            <textarea
              className="form-control"
              name="content"
              value={newTestimonial.content}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="form-group">
  <label>Note :</label>
  <input
    type="range"
    min="0"
    max="5"
    step="0.5"
    className="form-range"
    name="rating"
    value={newTestimonial.rating}
    onChange={handleInputChange}
  />
  <output className="form-range-output">{newTestimonial.rating}</output>

  
</div>


          

          {editingTestimonial ? (
            <button type="button" className="btn btn-primary" onClick={updateTestimonial}>
              Mettre à jour
            </button>
          ) : (
            <button type="button" className="btn btn-primary" onClick={addTestimonial}>
              Ajouter
            </button>
          )}
        </form>
      </div>
    </section>
  );
}

export default Testimonials;
