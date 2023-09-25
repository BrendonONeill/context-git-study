import { useContext } from 'react'
import './App.css'
import { MainProvider } from './context/context'
import Cat from './Cat'

function App() {
  return (
    <MainProvider>
      <Cat />
    </MainProvider>
  )
}

export default App
