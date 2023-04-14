import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <div>
         <ul>
            <li><Link to ="/">Home</Link></li>
            <li><Link to ="/contact">Contact</Link></li>          
        </ul>
      <h1>This is contact page</h1>
    </div>
  )
}
