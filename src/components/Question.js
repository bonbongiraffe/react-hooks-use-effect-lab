import React, { useState, useEffect } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code
  useEffect(() => {
    let timerId1
    const timerId2 = setTimeout(() => {
      timerId1 = setInterval(() => {
        setTimeRemaining((timeRemaining) => timeRemaining-1)
      }, 1000)
    }, 1000)  
    const timerId3 = setTimeout(() => {
      setTimeRemaining(10)
      onAnswered(false)
    }, 11000)
    
    return function cleanup() {
      clearInterval(timerId1)
      clearTimeout(timerId2)
      clearTimeout(timerId3)
    } 
  },[onAnswered])

  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
