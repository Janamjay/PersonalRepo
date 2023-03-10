import React from 'react'
import {useState} from 'react'  

export default function Count() {
    function handleInc(element){
    if(element==='Inc'){
      setCount(count+1)
    }
  }
  function handleDec(element){
    if(element==='Dec' && count>0){
      setCount(count-1)
    }else{
        alert("limit reached");
        setCount(0)
    }
  }
  const [count,setCount]=useState(0)
    return (
        <div className='center'>
            <h2>2. Increase button will increase the count by 1 and the other will decrease the count by 1</h2>
            <p>{count}</p>
            <button onClick={() => handleInc('Inc')}>Increase Count</button>
            <button onClick={() => handleDec('Dec')}>Decrease Count</button>
        </div>
    )
}
