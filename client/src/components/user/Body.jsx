import React from 'react'
import { useSelector } from 'react-redux'

function Body() {

  const userDetails = useSelector((store)=>store.auth)
  return (
    <div className='body'>
      <div>test</div>
        <div>{userDetails.name}</div>
    </div>
  )
}

export default Body