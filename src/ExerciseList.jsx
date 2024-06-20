import React from 'react';
import ExerciseCard from './ExerciseCard';
import './ExerciseList.css'; // Agrega un archivo CSS para estilos

const exercises = [
  {
    name: "Puxada Frontal",
    image: "https://via.placeholder.com/150", // Reemplaza con la URL de la imagen
    sets: 3,
    reps: 12
  },
  {
    name: "Remada Curvada",
    image: "https://via.placeholder.com/150", // Reemplaza con la URL de la imagen
    sets: 3,
    reps: 12
  },
  {
    name: "Remada Unilateral",
    image: "https://via.placeholder.com/150", // Reemplaza con la URL de la imagen
    sets: 3,
    reps: 12
  },
  {
    name: "Levantamento Terra",
    image: "https://via.placeholder.com/150", // Reemplaza con la URL de la imagen
    sets: 3,
    reps: 12
  }
];

const ExerciseList = () => {
  return (
    <div className="exercise-list">
      {exercises.map((exercise, index) => (
        <ExerciseCard key={index} exercise={exercise} />
      ))}
    </div>
  );
};

export default ExerciseList;