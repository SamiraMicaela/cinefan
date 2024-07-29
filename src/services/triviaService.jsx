// src/services/triviaService.js
import { trivia } from '../data/data';

const getTrivia = () => {
  return Promise.resolve(trivia);
};

export default {
  getTrivia
};
