import { useState } from 'react'
import Hello from './components/Hello'
import HelloFuncion from './components/HelloFuncion'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hello/>
      <HelloFuncion/>
    </>
  )
}

export default App