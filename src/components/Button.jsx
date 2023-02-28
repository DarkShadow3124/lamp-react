import React from 'react'

const Button = ({handleClick}) => {
  return (
    <div>
        <button onClick={handleClick}>On/Off</button>
    </div>
  )
}

export default Button