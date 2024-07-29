// src/data.js
export const movies = [
    {
      id: '1',
      title: 'Inception',
      description: 'A mind-bending thriller',
      director: 'Christopher Nolan',
      genre: ['Sci-Fi', 'Action'],
      releaseDate: '2010-07-16',
      rating: 8.8
    },
    {
      id: '2',
      title: 'Interstellar',
      description: 'A journey through space and time',
      director: 'Christopher Nolan',
      genre: ['Sci-Fi', 'Adventure'],
      releaseDate: '2014-11-07',
      rating: 8.6
    },
    {
      id: '3',
      title: 'The Dark Knight',
      description: 'A gritty superhero tale',
      director: 'Christopher Nolan',
      genre: ['Action', 'Crime'],
      releaseDate: '2008-07-18',
      rating: 9.0
    }
  ];
  
  export const reviews = [
    {
      movieId: '1',
      rating: 9,
      comment: 'Increíble trama y efectos visuales.'
    },
    {
      movieId: '2',
      rating: 10,
      comment: 'Una obra maestra de la ciencia ficción.'
    }
  ];
  
  export const trivia = [
    {
      question: '¿Quién dirigió "Inception"?',
      answer: 'Christopher Nolan'
    },
    {
      question: '¿Cuál es el nombre del personaje principal en "Interstellar"?',
      answer: 'Cooper'
    }
  ];
  