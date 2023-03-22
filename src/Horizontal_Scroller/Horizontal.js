import React from 'react'
import idcard from './Horizontal.module.css'

export default function Horizontal(props) {
    return (
            <div className={idcard.card_container}>
                <img src={props.image} alt="" />
                <h3>{props.name}</h3>
                <p>{props.designation}</p>
                <p>{props.experience}</p>
            </div>
    )
}
