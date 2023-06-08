import React from 'react'
import Square from './Square'

function Body() {
  return (
    <div className='body'>
        <p>body</p>
        <div className='square-container'>
            <Square number="1" color="blue" location="Bronx" />
            <Square number="2" color="red" location="Queens" />
            <Square number="3" color="orange" location="Brooklyn" />
        </div>
    </div>
  )
}

export default Body