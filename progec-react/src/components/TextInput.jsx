import React, { useState } from 'react';

function TextInput() {
  const [textValue, setTextValue] = useState('');

  const handleChange = (event) => {
    setTextValue(event.target.value);
  };

  return (
    <div>
      <label htmlFor="myInput">Inserisci del testo:</label>
      <input
        type="text"
        id="myInput"
        value={textValue}
        onChange={handleChange}
      />
      <p>Hai scritto: {textValue}</p>
    </div>
  );
}

  

export default TextInput;