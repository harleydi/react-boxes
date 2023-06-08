import React from 'react'
import "./Square.css"

function Square(props) {
    const { number, location } = props
  return (
    <div className='square'>{number} {location}</div>
    
  )
}

export default Square