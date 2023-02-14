// import NavBar from "../common/NavBar";
// import NavBarFooter from "../common/NavBarFooter";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";

// Jeff IT WORKS!!

const QuizzQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); //to have the questions appear 1 by 1
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/questions")
      .then(res => {
        console.log(res.data);
        setQuestions(res.data);
      })
      .catch(error => console.error(error));
  }, []);
  
  const handleOptionClick = option => {
    setSelectedOption(option);
    setShowAnswer(true);
  };

  return (
    <>
  <div className="background">
    <h2>Question {currentQuestionIndex + 1} of {questions.length}</h2>
    <table>
      <thead>
      <tr>
        <th>Question</th>
        <th>Option 1</th>
        <th>Option 2</th>
        <th>Option 3</th>
        <th>Option 4</th>
        {/* <th>Correct Answer</th> */}
      </tr>
      </thead>
      <tbody> 
        {/* So far the below table code allows the user to click on the option and it will reveal whether the option(answer) is right or wrong. At the moment its showing wrong for all options */}
        {questions.length > 0 && (
        <tr key={questions[currentQuestionIndex].id}>

           <td>{questions[currentQuestionIndex].content}</td>

           <td onClick={() => handleOptionClick(1)}>
                {questions[currentQuestionIndex].option1}
                {showAnswer && selectedOption === 1 && (
                  <div className={questions[currentQuestionIndex].answer === 1 ? "right-answer" : "wrong-answer"}>
                    {questions[currentQuestionIndex].answer === 1 ? "Right" : "Wrong"}
                  </div>
                )}
              </td>

              <td onClick={() => handleOptionClick(2)}>
                {questions[currentQuestionIndex].option2}
                {showAnswer && selectedOption === 2 && (
                  <div className={questions[currentQuestionIndex].answer === 2 ? "right-answer" : "wrong-answer"}>
                    {questions[currentQuestionIndex].answer === 2 ? "Right" : "Wrong"}
                  </div>
                )}
              </td>

              <td onClick={() => handleOptionClick(3)}>
                {questions[currentQuestionIndex].option3}
                {showAnswer && selectedOption === 3 && (
                  <div className={questions[currentQuestionIndex].answer === 3 ? "right-answer" : "wrong-answer"}>
                    {questions[currentQuestionIndex].answer === 3 ? "Right" : "Wrong"}
                  </div>
                )}
              </td>
              
              <td onClick={() => handleOptionClick(4)}>
                {questions[currentQuestionIndex].option4}
                {showAnswer && selectedOption === 4 && (
                  <div className={questions[currentQuestionIndex].answer === 4 ? "right-answer" : "wrong-answer"}>
                    {questions[currentQuestionIndex].answer === 4 ? "Right" : "Wrong"}
                  </div>
                )}
                </td>
        </tr>
        )}
      </tbody>
    </table>
    </div>

    <button onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}>
      Next Question     
      </button>
      </>
      );
    };


export default QuizzQuestions;
