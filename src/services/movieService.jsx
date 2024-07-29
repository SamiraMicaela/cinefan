import { movies } from '../data/data';

const getAllMovies = () => {
  return Promise.resolve(movies);
};

const getMovieById = (id) => {
  const movie = movies.find((movie) => movie.id === id);
  return Promise.resolve(movie);
};

export default {
  getAllMovies,
  getMovieById
};
