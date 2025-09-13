import { useState, useEffect} from 'react'
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
const Stat = () => {
    const [Counter, setCounter] = useState(0);
const [Value, setValue] = useState(0)
const handleValueClikButton = () => {
  setValue((_Value)=> {
    return _Value +1 ;
  })
}
;
  const handleIncrement = () => {
    setCounter((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCounter((prev) => prev - 1);
  };

  const handleResetButton = () => {
 setCounter ((prev) => prev = 0); 
};
useEffect(() => {
  console.log ('Effect 1');
}, [value] );
  return (
    <div>
      <button onClick={handleIncrement}> ADD</button>
      <button onClick={handleDecrement}> Decrement</button>
      <button onClick={handleResetButton}> RESET</button>
       <button onClick={handleValueClikButton}> value</button>
      <p>Counter: {Counter}
        <br />
        Value: {Value}

      </p>
    </div>
  );
};




export default Stat
