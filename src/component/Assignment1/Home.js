// 1. Create a simple React app with React Router. Set up two routes: one for the home page and one for a contact page. Use React Router's Link component to navigate between the two pages.

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
