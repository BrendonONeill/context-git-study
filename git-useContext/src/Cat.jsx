import React, { useContext, useEffect, useState, useId, useReducer, useRef } from 'react'
import MainContext from './context/context'

function Cat() {
  useEffect(() => {
  inputref.current.focus()
  fetch("https://pokeapi.co/api/v2/pokemon/ditto").then(res => res.json()).then(data => setData(data))
  return () => {
  }
  },[])

  function reducer(state, action)
  {
    const {type} = action
    switch (type) {
      case "up":
        return {...state, count: state.count + 1}
      case "down":
        return {...state, count: state.count - 1}
        case "error":
          return {...state, error: "This is an error"}
      default:
        break;
    }

  }
  const inputref = useRef(null)
  const password = useId()
  const password1 = useId()
  const [data, setData] = useState({})
  const [state, dispatch] = useReducer(reducer, {count: 0, error: null})
  const {frog} = useContext(MainContext)
  return (
    <div>
     {data.name}
     {frog}
     {
      password
     }
     {
      password1
     }
     { state.error === null ?
     <h1>{state.count}</h1> : <h1>{state.error}</h1>
     }
     <button onClick={() => dispatch({type:"up"})}>up</button>
     <button onClick={() => dispatch({type:"down"})}>down</button>
     <button onClick={() => dispatch({type:"error"})}>error</button>
     <input type="text" ref={inputref} />
    </div>
  )
}

export default Cat