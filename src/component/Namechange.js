import React from 'react'
import { useState } from 'react'

export default function Namechange() {
    const[name,setName]=useState('Amit')

    function toggleChange(){
        setName(name === 'Amit' ? 'Rajan' : 'Amit');
    }
  return (
    <div className='center'>
      <h2>3. On every click name will change from Amit to Rajan and vice versa</h2>
      <h1>My name is {name}</h1>
      <button onClick={toggleChange}>Change Name</button>
    </div>
  )
}
