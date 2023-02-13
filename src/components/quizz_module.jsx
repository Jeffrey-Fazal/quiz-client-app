// import NavBar from "../common/NavBar";
// import NavBarFooter from "../common/NavBarFooter";
import React, { useState, useEffect } from "react";
import axios from "axios";

const QuizzQuestions = () => {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/questions")
      .then(res => {
        console.log(res.data);
        setQuestions(res.data);
      })
      .catch(error => console.error(error));
  }, []);
  

  return (
    <table>
      <thead>
        <tr>
          <th>Question</th>
          <th>Option 1</th>
          <th>Option 2</th>
          <th>Option 3</th>
          <th>Option 4</th>
          <th>Correct Answer</th>
        </tr>
      </thead>
      <tbody>
        {questions.map(question => (
          <tr key={question.id}>
            <td>{question.content}</td>
            <td>{question.option1}</td>
            <td>{question.option2}</td>
            <td>{question.option3}</td>
            <td>{question.option4}</td>
            <td>{question.correct_answer}</td>
          </tr>
        ))}
      </tbody>
      <button>Submit</button>
    </table>
  );
};

export default QuizzQuestions;