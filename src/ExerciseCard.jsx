import React from 'react';
import './ExerciseCard.css'; // Agrega un archivo CSS para estilos

const ExerciseCard = ({ exercise }) => {
  return (
    <div className="exercise-card">
      <img src={exercise.image} alt={exercise.name} className="exercise-image" />
      <div className="exercise-info">
        <h3>{exercise.name}</h3>
        <p>{exercise.sets} series x {exercise.reps} repetitions</p>
      </div>
      <button className="card-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="13 17 18 12 13 7"></polyline></svg>
      </button>
    </div>
  );
};

export default ExerciseCard;