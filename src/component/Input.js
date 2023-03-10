import React from 'react'
import { useState } from 'react'

export default function Input() {
const[text,setText]=useState('')
const [textList, setTextList] = useState([]);

function handleonchange(event){
    console.log(text)
    setText(event.target.value)
}

function handleAdd(){
    setTextList([...textList, text]);
    setText('');
}

  return (
    <div className='center'>
      <h2>1. Create the UI like below and style the button accordingly .
          every input task , on clicking Add button will show in below task list .</h2>
        <input type="text"  value={text} onChange={handleonchange}/>
        <button onClick={handleAdd}>Add</button>
        <h2>Summary</h2>
        <ul>
            {textList.map((elem,index)=>{
                return(
                    <li key={index}>{elem}</li>
                )
            })}
        </ul>
    </div>
  )
}
