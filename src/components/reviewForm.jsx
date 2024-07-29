import React, { useState } from 'react';
import reviewService from '../services/reviewService';

const ReviewForm = ({ movieId }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    reviewService.addReview({ movieId, rating, comment }).then(() => {
      setRating(0);
      setComment('');
    });
  };

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <h3>Deja tu reseña</h3>
      <label>
        Rating:
        <input
          type="number"
          min="1"
          max="10"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </label>
      <label>
        Comentario:
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </label>
      <button type="submit">Enviar Reseña</button>
    </form>
  );
};

export default ReviewForm;
