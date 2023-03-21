import React from 'react'
import styles from './Header.module.css'
import background from './background.jpg'

export default function Content() {
    return (
        <div className={styles.main_container}>
            <div className={styles.content_section}>
                <p className={styles.free}>Totally Free</p>
                <h2><span> I </span> Let's bring your <br /> team together <br /> in onclick</h2>
                <p className={styles.content}>We help you to manage all of your work <br /> and daily task in office</p>
                <button className={styles.btn_getStared}> Get Started </button>
                <button className={styles.btn_howToUse}>How to use</button>
            </div>
            <div className={styles.image_bg}>
                <img src={background} alt="logo" />
            </div>
        </div>
    )
}
