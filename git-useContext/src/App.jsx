import { useContext } from 'react'
import './App.css'
import test, { MainProvider } from './context/context'

function App() {
  const user = {
    name : "Brendon"
  }

  const {c} = useContext(test)
  return (
    <MainProvider>
      <div>
        <h2>test</h2>
        <h1>{c}</h1>
    </div>
    </MainProvider>
  )
}

export default App
