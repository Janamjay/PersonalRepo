import React from 'react'
import Navbar from './Navbar'
import sign from './form.module.css'
import { useNavigate } from 'react-router-dom'

export default function Register() {

  const navigate = useNavigate()

  return (
    <>
      <Navbar />
      <div className={sign.outer_container}>
        <div className={sign.main_container}>
          <h1>Register Here </h1>
          <p className={sign.grey}>It's quick and easy.</p>
          <div className={sign.input_field}>
            <label className={sign.grey} htmlFor="">First Name</label>
            <input type="text" name="fname" id="" placeholder='Janamjay' />
            <label className={sign.grey} htmlFor="">Last Name</label>
            <input type="text" name="lname" id="" placeholder='Mishra' />
            <label className={sign.grey} htmlFor="">Your Email</label>
            <input type="email" name="email" id="" placeholder='username@gmail.com' />
            <label className={sign.grey} htmlFor="">Password</label>
            <input type="password" name="pass" id="" placeholder='***********' />
          </div>
          <button className={sign.loginbtn} onClick={() => navigate("/login")}>Register</button>
          <div className={sign.signup}>
            <p className={sign.grey}> Already have account ? <span onClick={() => navigate("/login")}>Login</span></p>
          </div>
        </div>
      </div>
    </>
  )
}
