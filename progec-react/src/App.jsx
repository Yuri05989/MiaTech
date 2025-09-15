import { useState, useEffect} from 'react'
import Hello from './components/Hello'
import HelloFuncion from './components/HelloFuncion'
import Counter from './components/counter'
import TextInput from './components/TextInput'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hello/>
      <HelloFuncion/>
     <Counter/>
     <TextInput/>
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



 function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // evita il refresh della pagina
    alert(`Username: ${username}\nPassword: ${password}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-6 rounded-2xl shadow-lg w-80"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
        
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-3 border rounded-lg"
        />
        
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-3 border rounded-lg"
        />
        
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}




export default LoginForm