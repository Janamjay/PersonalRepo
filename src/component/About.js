import React from 'react'
import background from './background.jpg'
import about from './main.module.css'
import Navbar from './Navbar'

export default function About() {
  return (
    <>
    <Navbar/>
    <div className={about.main_container}>
            <div className={about.content_section}>
                <p className={about.free}>About Us</p>
                <h2><span> We </span> Let's bring your <br /> team together <br /> in onclick</h2>
                <p className={about.content}>We help you to manage all of your work <br /> and daily task in office</p>
                <button className={about.btn_getStared}> LinkedIn </button>
                <button className={about.btn_howToUse}>Contact Us</button>
            </div>
            <div className={about.image_bg}>
                <img src={background} alt="background" />
            </div>
        </div>
        </>
  )
}
