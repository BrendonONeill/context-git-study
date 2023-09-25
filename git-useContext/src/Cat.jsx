import React, { useContext } from 'react'
import MainContext from './context/context'
function Cat() {

    const {frog} = useContext(MainContext)
  return (
    <div>{frog}</div>
  )
}

export default Cat