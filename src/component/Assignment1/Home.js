import React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <ul>
            <li><Link to ="/">Home</Link></li>
            <li><Link to ="/contact">Contact</Link></li>          
        </ul>
      <h1>This is Home page</h1>
    </div>
  )
}
