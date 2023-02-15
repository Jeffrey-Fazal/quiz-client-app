import React, { useState, useEffect } from "react";
import axios from "axios";
import '../common/Water.css';
const QuizzAPI = (props) => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  
    useEffect(() => {
      axios
        .get(`https://opentdb.com/api.php?amount=10&type=multiple`)
        .then(res => {
          console.log(res.data);
          setQuestions(res.data.results);
        })
        .catch(error => console.error(error));
    }, []);
  
    const handleAnswer = (answer) => {
      if (answer === questions[currentQuestionIndex].correct_answer) {
        setScore(score + 1);
        setCorrectAnswers(correctAnswers + 1);
      } else {
        setIncorrectAnswers(incorrectAnswers + 1);
      }
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    };
  
    const isQuizFinished = currentQuestionIndex >= questions.length;
  
    return (
      <>
        {questions.length > 0 ? (
          <>
            {isQuizFinished ? (
              <div>
                <h2>Quiz Results</h2>
                <p>Total Questions: {questions.length}</p>
                <p>Correct Answers: {correctAnswers}</p>
                <p>Incorrect Answers: {incorrectAnswers}</p>
                <p>Final Score: {score}</p>
              </div>
            ) : (
              <>
                <h2>Question {currentQuestionIndex + 1} of {questions.length}</h2>
                <table className="center">
                  <thead>
                    <tr>
                      <th>Question</th>
                      <th>Option 1</th>
                      <th>Option 2</th>
                      <th>Option 3</th>
                      <th>Option 4</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={questions[currentQuestionIndex].id}>
                      <td>{questions[currentQuestionIndex].question}</td>
                      <td>
                        <button onClick={() => handleAnswer("True")}>
                          True
                        </button>
                      </td>
                      <td>
                        <button onClick={() => handleAnswer("False")}>
                          False
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </>
            )}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </>
    );
  };
  export default QuizzAPI;
  