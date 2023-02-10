import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/questions')
      .then(res => {
        setQuestions(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h1>Trivia Game</h1>
      <ul>
        {questions.map(question => (
          <li key={question.id}>{question.content} ({question.category})</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
