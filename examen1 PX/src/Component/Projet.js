import React, { useState } from 'react';
import './Projet.css';
import photo1 from '../trade.png';
import photo2 from '../max.png';
import photo3 from '../artg.png';

function Projet() {
  const [zooms, setZooms] = useState([100, 100, 100]);
  const [rotations, setRotations] = useState([0, 0, 0]);
  const [selectedProject, setSelectedProject] = useState(0);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleZoomChange = (event, index) => {
    const newZooms = [...zooms];
    newZooms[index] = Number(event.target.value);
    setZooms(newZooms);
  };

  const handleRotationChange = (event, index) => {
    const newRotations = [...rotations];
    newRotations[index] = Number(event.target.value);
    setRotations(newRotations);
  };

  const handleProjectChange = (event) => {
    setSelectedProject(Number(event.target.value));
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmitComment = (event) => {
    event.preventDefault();
    if (comment !== '' && selectedProject !== '') {
      const newComments = [...comments];
      newComments.push({ project: selectedProject, comment: comment });
      setComments(newComments);
      setComment('');
    }
  };

  const handleDeleteComment = (index) => {
    const newComments = [...comments];
    newComments.splice(index, 1);
    setComments(newComments);
  };

  const handleEditComment = (index, newComment) => {
    const newComments = [...comments];
    newComments[index] = newComment;
    setComments(newComments);
  };

  return (
    <div className="container mt-5 mb-5">
      <h1>Certains de mes Projets</h1>
      <div className="row mt-4">
        <div className="col-md-4 mt-5">
          <div className="card mb-4 custom-card">
            <div className="card-body">
              <div className="image-container d-flex align-items-center justify-content-center" style={{ height: '300px', overflow: 'hidden' }}>
                <img
                  src={photo1}
                  alt="Projet Image"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '10px',
                    boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.1)',
                    transform: `scale(${zooms[0] / 100}) rotate(${rotations[0]}deg)`,
                    transition: 'transform 0.5s ease-in-out',
                  }}
                />
              </div>
              <h5 className="card-title">JournalTrade</h5>
              <p className="card-text">Une application iOS/Swift pour enregistrer et suivre vos trades quotidiens.</p>
              <div className="slider-container">
                <label htmlFor="zoom-slider-0">Zoom:</label>
                <input
                  type="range"
                  id="zoom-slider-0"
                  min="50"
                  max="200"
                  step="10"
                  value={zooms[0]}
                  onChange={(event) => handleZoomChange(event, 0)}
                />
                <label htmlFor="rotation-slider-0">Rotation:</label>
                <input
                  type="range"
                  id="rotation-slider-0"
                  min="0"
                  max="360"
                  step="15"
                  value={rotations[0]}
                  onChange={(event) => handleRotationChange(event, 0)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 mt-5">
          <div className="card mb-4 custom-card">
            <div className="card-body">
              <div className="image-container d-flex align-items-center justify-content-center" style={{ height: '300px', overflow: 'hidden' }}>
                <img
                  src={photo2}
                  alt="Projet Image"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '10px',
                    boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.1)',
                    transform: `scale(${zooms[1] / 100}) rotate(${rotations[1]}deg)`,
                    transition: 'transform 0.5s ease-in-out',
                  }}
                />
              </div>
              <h5 className="card-title">MaxFit</h5>
              <p className="card-text">Projet en groupe avec C# pour le calcul de l'IMC, diagnostic et propositions alimentaires..</p>
              <div className="slider-container">
                <label htmlFor="zoom-slider-1">Zoom:</label>
                <input
                  type="range"
                  id="zoom-slider-1"
                  min="50"
                  max="200"
                  step="10"
                  value={zooms[1]}
                  onChange={(event) => handleZoomChange(event, 1)}
                />
                <label htmlFor="rotation-slider-1">Rotation:</label>
                <input
                  type="range"
                  id="rotation-slider-1"
                  min="0"
                  max="360"
                  step="15"
                  value={rotations[1]}
                  onChange={(event) => handleRotationChange(event, 1)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 mt-5">
          <div className="card mb-4 custom-card">
            <div className="card-body">
              <div className="image-container d-flex align-items-center justify-content-center" style={{ height: '300px', overflow: 'hidden' }}>
                <img
                  src={photo3}
                  alt="Projet Image"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '10px',
                    boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.1)',
                    transform: `scale(${zooms[2] / 100}) rotate(${rotations[2]}deg)`,
                    transition: 'transform 0.5s ease-in-out',
                  }}
                />
              </div>
              <h5 className="card-title">ArtGallery</h5>
              <p className="card-text">Un site web/portfolio développé pour présenter et partager ma bibliothèque artistique.</p>
              <div className="slider-container">
                <label htmlFor="zoom-slider-2">Zoom:</label>
                <input
                  type="range"
                  id="zoom-slider-2"
                  min="50"
                  max="200"
                  step="10"
                  value={zooms[2]}
                  onChange={(event) => handleZoomChange(event, 2)}
                />
                <label htmlFor="rotation-slider-2">Rotation:</label>
                <input
                  type="range"
                  id="rotation-slider-2"
                  min="0"
                  max="360"
                  step="15"
                  value={rotations[2]}
                  onChange={(event) => handleRotationChange(event, 2)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 mt-5">
          <h3>Laissez un commentaire</h3>
          <form onSubmit={handleSubmitComment}>
            <div className="form-group">
              <label htmlFor="project-select">Sélectionnez un projet :</label>
              <select id="project-select" className="form-control" value={selectedProject} onChange={handleProjectChange}>
                <option value={0}>JournalTrade</option>
                <option value={1}>MaxFit</option>
                <option value={2}>ArtGallery</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="comment-input">Commentaire :</label>
              <input type="text" id="comment-input" className="form-control" value={comment} onChange={handleCommentChange} />
            </div>
            <button type="submit" className="btn btn-primary">Ajouter</button>
          </form>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-12">
          <h3>Commentaires</h3>
          {comments.length === 0 ? (
            <p>Aucun commentaire disponible.</p>
          ) : (
            <ul className="list-group">
              {comments.map((comment, index) => (
                <li key={index} className="list-group-item">
                  <div className="comment-header">
                    <span className="comment-project">Projet {comment.project}</span>
                    <p className="comment-text">{comment.comment}</p>
                    <div className="comment-actions">
                      <button className="btn btn-primary btn-sm mr-2" onClick={() => handleEditComment(index, comment)}>
                        Modifier
                      </button>
                      <button className="btn btn-danger btn-sm" onClick={() => handleDeleteComment(index)}>
                        Supprimer
                      </button>
                    </div>
                  </div>
                 
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Projet;
