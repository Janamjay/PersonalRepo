import React from 'react'

export default function Login(props) {

  return (
    <div className='outer-container'>
      <div className="main-container">
        <h1>Welcome !</h1>
        <p className='grey'>Log in your Account</p>
        <div className="input-field">
          <label className='grey'  htmlFor="">Your Email</label>
          <input type="email" name="email" id="" placeholder='username@gmail.com'/>
          <label className='grey' htmlFor="">Password</label>
          <input type="password" name="pass" id="" placeholder='***********'/>
        </div>
        <div className="remember">
          <div className='checkme'>
          <label htmlFor=""><input type="checkbox" name="tick" id="" />Remember Me</label>
          
          </div>
          <a className='grey'href="/">Forget Password?</a>
        </div>
        <button className='loginbtn'>Login</button>
        <div className="divide">
          <hr />
          <p className='grey'>or</p>
          <hr />
        </div>
        <div className="link">
          <button className='grey'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqOAZphgekT0e06wtwTx9-B_ZeX_ymipCj8EKS2vOUYbx7NeTu93hJF4gnWyKpqdAVAuk&usqp=CA " alt="" /><span> Continue with Google</span></button>
          <button className='grey'><img src="https://clipart.info/images/ccovers/1509135366facebook-symbol-png-logo.png" alt="" /> <span>Continue with Facebook</span></button>
        </div>
        <div className="signup">
          <p className='grey'> Don't have any Account? <span onClick={props.handleonClick}>Sign Up</span></p>
        </div>
      </div>
    </div>
  )
}
