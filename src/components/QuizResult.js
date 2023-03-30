import React from 'react'
import result from './quiz.module.css'

function QuizResult(props) {
  return (
    <>
      <div className={result.result}>
        <h1> Result </h1>
      </div>
      <div className={result.show_score}>
        Your Score:{props.score}<br />
        Total Score:{props.totalScore}
      </div>
      {
        (props.score >= 12) ?
          <h2 className={result.greet}>Hurray! You passed the test.</h2> :
          <>
          <h2 className={result.greet}>Better luck for next time!!</h2> 
          <button className={result.next_button} onClick={props.tryAgain}>Try Again</button>
          </>
      }
       <button className={result.next_button} onClick={props.tryAgain}>Try Again</button>
    </>
  )
}

export default QuizResult