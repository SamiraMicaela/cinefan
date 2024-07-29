import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>Director: {movie.director}</p>
      <p>Género: {movie.genre.join(', ')}</p>
      <p>Fecha de estreno: {new Date(movie.releaseDate).toLocaleDateString()}</p>
      <p>Rating: {movie.rating}/10</p>
    </div>
  );
};

export default MovieCard;
