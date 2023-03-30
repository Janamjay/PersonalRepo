import React, { useState, useRef } from 'react'
import quiz from './quiz.module.css'
import { QuizData } from '../Data/QuizData'
import QuizResult from './QuizResult';
function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0); // for accessing current question index
    const [update, setUpdate] = useState(true); //to update UI or re-rendring
    const score = useRef(0); // for storing marks
    const [clickedOption, setClickedOption] = useState(0); //for storing clicked option of questions
    const [showResult, setShowResult] = useState(false); //for QuizResult Component
    const [next, setNext] = useState("Next"); //for next button

    const changeQuestion = () => {
        updateScore();
        if (currentQuestion < QuizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setClickedOption(0);

            if(currentQuestion === QuizData.length - 2)
                setNext("Submit")
        } else {
            setShowResult(true)
        }
    }
    const updateScore = () => {
        if (clickedOption === QuizData[currentQuestion].answer) {
            score.current += 2
            setUpdate(!update);
        }
    }
    const resetAll = () => {
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        score.current = 0
    }
    return (
        <div>
            <p className={quiz.heading_txt}>Kaun Banega Coder </p>
            <div className={quiz.container}>
                {showResult ? (
                    <QuizResult score={score.current} totalScore={QuizData.length * 2} tryAgain={resetAll} />
                ) : (
                    <>
                        <div className={quiz.question}>
                            <span className={quiz.question_number}> {currentQuestion + 1}. </span>
                            <span className={quiz.question_txt}> {QuizData[currentQuestion].question} </span>
                        </div>
                        <div className={quiz.option_container}>
                            {QuizData[currentQuestion].options.map((option, i) => {
                                return (
                                    <button
                                        className={`${quiz.option_btn}  ${clickedOption === i + 1 ? quiz.checked : null}`}
                                        key={i}
                                        onClick={() => setClickedOption(i + 1)}
                                    >
                                        {option}
                                    </button>
                                )
                            })}
                        </div>
                        <input type="button" value={next} className={quiz.next_button} onClick={changeQuestion} />
                    </>)}
            </div>
            <div className={quiz.author}>
                <p>Created By ❤️ Janamjay</p>
            </div>
        </div>
    )
}

export default Quiz