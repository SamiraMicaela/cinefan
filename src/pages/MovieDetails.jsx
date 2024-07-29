// src/pages/MovieDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import movieService from '../services/movieService';
import reviewService from '../services/reviewService';
import ReviewForm from '../components/reviewForm';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    movieService.getMovieById(id).then(setMovie);
    reviewService.getReviewsByMovieId(id).then(setReviews);
  }, [id]);

  if (!movie) return <div>Cargando...</div>;

  return (
    <div className="movie-details">
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <p>Director: {movie.director}</p>
      <p>Género: {movie.genre.join(', ')}</p>
      <p>Fecha de estreno: {new Date(movie.releaseDate).toLocaleDateString()}</p>
      <p>Rating: {movie.rating}/10</p>

      <h2>Reseñas</h2>
      {reviews.map((review, index) => (
        <div key={index}>
          <p><strong>Rating:</strong> {review.rating}</p>
          <p>{review.comment}</p>
        </div>
      ))}

      <ReviewForm movieId={movie.id} />
      <button onClick={() => window.history.back()}>Volver</button>
    </div>
  );
};

export default MovieDetails;
