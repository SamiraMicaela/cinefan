import { reviews } from '../data/data';

const getReviewsByMovieId = (movieId) => {
  return Promise.resolve(reviews.filter((review) => review.movieId === movieId));
};

const addReview = (review) => {
  reviews.push(review); // Simular la adición de una reseña
  return Promise.resolve();
};

export default {
  getReviewsByMovieId,
  addReview
};
