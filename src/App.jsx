import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Searchable from './assignment/Searchable'

function App() {
 const items = ['Apple', 'Google', 'Facebook', 'Twitter', 'microsoft','Asus','Dell',
 'HP', 'Samsung', 'Nokia']
  return (
    <>
      <Searchable items={items}/>
    </>
  )
}

export default App
