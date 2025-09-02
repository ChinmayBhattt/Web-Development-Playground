import React from 'react'
import { memo } from 'react'

const Navbar = ({adjective, getAdjective}) => {
  return (
    <div>
      i am a {adjective} Navbar
      <button onClick={()=>{getAdjective()}}>{getAdjective()}</button>
    </div>
  )
}

export default memo(Navbar)
