import React, { useState, useEffect } from "react";
import axios from "axios";
import '../common/App.css';

const QuizzCategory = (props) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0); //

  useEffect(() => {
    axios
      .get(`http://localhost:3000/category/${props.endpoint}`) //
      .then(res => {
        console.log(res.data);
        setQuestions(res.data);
      })
      .catch(error => console.error(error));
  }, [props.endpoint]);

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestionIndex].correct_answer) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex((currentQuestionIndex + 1) % questions.length);
  };

  return (
    <>
      {currentQuestionIndex === 10 ? (
        <div>Your final score is {score}</div>
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
    {questions.length > 0 && (
      <tr key={questions[currentQuestionIndex].id}>
        <td>{questions[currentQuestionIndex].content}</td>
        <td>
          <button onClick={() => handleAnswer(questions[currentQuestionIndex].option1)}>
            {questions[currentQuestionIndex].option1}
          </button>
        </td>
        <td>
          <button onClick={() => handleAnswer(questions[currentQuestionIndex].option2)}>
            {questions[currentQuestionIndex].option2}
          </button>
        </td>
        <td>
          <button onClick={() => handleAnswer(questions[currentQuestionIndex].option3)}>
            {questions[currentQuestionIndex].option3}
          </button>
        </td>
        <td>
                   {/* Jeffs  */}
          <button onClick={() => handleAnswer(questions[currentQuestionIndex].option4)}>
            {questions[currentQuestionIndex].option4}
          </button>
          
        </td>
      </tr>
    )}
  </tbody>
</table>
  <button onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}>
      Next Question     
      </button>
        </>
      )}
    </>
  );
};

export default QuizzCategory;

// brees, pls ignore for now

// <button onClick={() => {
//   handleAnswer(questions[currentQuestionIndex].option4);
//   if (currentQuestionIndex < questions.length - 1) {
//     setCurrentQuestionIndex(currentQuestionIndex + 1);
//   }
// }}>
//   {questions[currentQuestionIndex].option4}
// </button>