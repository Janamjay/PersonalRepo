import React from 'react'

export default function Input(props) {
  return (
   <>
    <input type="text" placeholder={props.name}/>
    <input type="text" placeholder={props.pass}/>
   </>
  )
}
