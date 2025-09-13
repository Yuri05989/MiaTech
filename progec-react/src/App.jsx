import { useState } from 'react'
import Hello from './components/Hello'
import HelloFuncion from './components/HelloFuncion'
import Counter from './components/counter'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hello/>
      <HelloFuncion/>
     <Counter/>
    </>
  )
}

const States = () =>{
  const [Counter, setCounter] = useState(0);
  const HaddleClickButton = () => {
   setCounter((_counter) => {
    return _counter + 1;
   });
  }
  return(
    <div>
      <button onClick={HaddleClickButton}>ADD</button>
      <p>Counter: {Counter}

      </p>
    </div>
  )
}
export default States
