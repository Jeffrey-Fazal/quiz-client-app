// import NavBar from "../common/NavBar";
// import NavBarFooter from "../common/NavBarFooter";
import React, { useState, useEffect } from "react";
import axios from "axios";

// Jeff IT WORKS!!
const QuizzQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
// Added second const ^^

  useEffect(() => {
    axios
      .get("http://localhost:3000/questions")
      .then(res => setQuestions(res.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
    <table>

      <tr>
        <th>Question</th>
        <th>Option 1</th>
        <th>Option 2</th>
        <th>Option 3</th>
        <th>Option 4</th>
        <th>Correct Answer</th>
      </tr>
      <tbody>
        {questions.length > 0 && (
        <tr key={questions[currentQuestionIndex].id}>
          <td>{questions[currentQuestionIndex].content}</td>
          <td>{questions[currentQuestionIndex].option1}</td>
          <td>{questions[currentQuestionIndex].option2}</td>
          <td>{questions[currentQuestionIndex].option3}</td>
          <td>{questions[currentQuestionIndex].option4}</td>
          <td>{questions[currentQuestionIndex].correct_answer}</td>
        </tr>
        )}
      </tbody>
    </table>
    <button onClick={() => setCurrentQuestionIndex((currentQuestionIndex + 1) % questions.length)}>
      Next Question
      </button>
      </>
      );
    };


export default QuizzQuestions;

