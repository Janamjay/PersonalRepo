import React from 'react'
import { useState } from 'react'
import './Textboxsummary.css'

export default function Textboxsummary() {
    const [userText, setUserText] = useState("")

    function handleChange(event) {

        let userInput = event.target.value
        let userInputChar = userInput.split(" ").join("")

        // console.log(userInput.split(" "));
        // console.log(userInput.split(" ").join(""));

        if (userInputChar.length <= 100) {
            setUserText(userInput)
        } else {
            alert("Maximum character limit reached! : 100 characters")
        }
        // console.log(userInputChar.length);
    }

    return (
        <div className='field-comp-container'>
            <h2>Write your daily Summary !!</h2>
            <textarea onChange={handleChange} value={userText} cols="30" rows="5" placeholder='Enter your Summary here'></textarea>
            <p>{100-userText.split(" ").join("").length} character are remaining.</p>
        </div>
    )
}
