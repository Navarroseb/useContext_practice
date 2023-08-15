import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/userContext'

let Button = () => {
    const { setUser, community, year } = useContext(UserContext);
  return (
  <>
  <button onClick={() => setUser({
    name: "Sebas",
    age: 40
  })}>
    Change User    
  </button>
  </>
    
  )
}

export default Button