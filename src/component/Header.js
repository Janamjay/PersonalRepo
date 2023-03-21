import React,{useState} from 'react'
import styles from './Header.module.css'
import logo from './logo.jpg'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Header(props) {

    const[mobile,setMobile]=useState(false)

    function showMenu() {
        document.getElementById("menuList").style.right = '0px'
        document.getElementById("menuBtn").style.right = '0px'
        console.log('showMenu clicked');
        setMobile(!mobile)

    }
    function hideMenu(){
        document.getElementById("menuList").style.right = '-200px'
        document.getElementById("menuBtn").style.right = '-200px'
        // console.log('hideMenu clicked');
        setMobile(!mobile)
    }
    return (
        <nav className={styles.nav}>
            <div className={styles.nav_links}>
                <div className={styles.imgUl}>
                    <img src={logo} alt="logo" />
                    <ul className={styles.nav_ul} id="menuList">
                        <div className={styles.icon} onClick={hideMenu}>                          
                            <FaTimes />
                        </div>
                        <li><a href="/">{props.home}</a></li>
                        <li><a href="/">{props.services}</a></li>
                        <li><a href="/">{props.contact}</a></li>
                        <li><a href="/">{props.about}</a></li>
                    </ul>
                </div>
                <div className={styles.toggle}>
                    <div className={styles.nav_social} id="menuBtn">
                        <button className={styles.login}>{props.btn1}</button>
                        <button className={styles.signUp}>{props.btn2}</button>
                    </div>
                    <div  onClick={showMenu}>
                    <FaBars />
                    </div>       
                </div>
            </div>
        </nav>
    )
}
