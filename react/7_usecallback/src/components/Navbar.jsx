import React from 'react'
import { memo } from 'react'

const Navbar = ({adjective, getAdjective}) => {
    console.log('Navbar is rendered')
  return (
    <div>
        I am a {adjective} Navbar
        <button onClick={()=>{getAdjective()}}></button>
    </div>
  )
}

export default memo(Navbar)// memo - whenever prop is changed, it re-renders