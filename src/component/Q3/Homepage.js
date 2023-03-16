import React from 'react'
import { useState } from "react";
import Login from './Login';
import Signup from './Signup';
import './Homepage.css';

export default function Homepage() {
  const[change,setChange]=useState(true)

  const handleClick=()=>{
      setChange(false)
  }
  const  handleLogin=()=>{
    setChange(true)
  }
   
  return (
    <div>
       {change ? (
        <Login handleonClick={handleClick} />
        ) : (
          <Signup handleonLogin={handleLogin} />
        )}
    </div>
  )
}
