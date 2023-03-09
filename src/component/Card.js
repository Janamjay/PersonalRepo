import React from 'react'
import '../component/Card.css'


export default function Card(props) {
    return (
        <div className='outer-container'>
            <div className='card-container'> 
                <img src={props.image} alt="" />
                <h3>{props.designation}</h3>
                <h1>{props.name}</h1>
                <p>{props.detail}</p>
            </div>
        </div>
    )
}
