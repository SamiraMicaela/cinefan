import React, { useState } from 'react';
import triviaService from '../services/triviaService';

const TriviaGame = () => {
  const [trivia, setTrivia] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    triviaService.getTrivia().then(setTrivia);
  }, []);

  const handleSubmit = () => {
    if (answer === trivia[currentQuestion].answer) {
      alert('¡Correcto!');
    } else {
      alert('Incorrecto. Inténtalo de nuevo.');
    }
    setAnswer('');
    setCurrentQuestion((prev) => (prev + 1) % trivia.length);
  };

  if (trivia.length === 0) return <div>Cargando trivia...</div>;

  return (
    <div className="trivia-game">
      <h2>{trivia[currentQuestion].question}</h2>
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button onClick={handleSubmit}>Enviar Respuesta</button>
    </div>
  );
};

export default TriviaGame;
