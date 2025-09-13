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
const Statess = () => {
  const [Counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div>
      <button onClick={handleIncrement}>ADD</button>
      <button onClick={handleIncrement}>+1</button>
      <p>Counter: {Counter}</p>
    </div>
  );
};


const Stat = () => {
    const [Counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCounter((prev) => prev - 1);
  };

  const handleResetButton = () => {
 setCounter ((prev) => prev = 0); 
};
  return (
    <div>
      <button onClick={handleIncrement}> +1</button>
      <button onClick={handleDecrement}> -1</button>
      <button onClick={handleResetButton}> 0</button>
      <p>Counter: {Counter}</p>
    </div>
  );
};




export default Stat
