import React from 'react'
import Component1 from './Component1'
const Button = (props) => {
  return (
    <div>
      <button><span><Component1 count={props.count}/></span>I am a Button</button>
    </div>
  )
}

export default Button