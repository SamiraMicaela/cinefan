import React, { useState, useEffect } from 'react';
import MovieList from '../components/movieList';
import movieService from '../services/movieService';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    movieService.getAllMovies().then(setMovies);
  }, []);

  return (
    <div className="home">
      <h1>Películas Populares</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
