import { useRef } from "react";

export default function TextInputNoState() {
  const inputRef = useRef(null);

  const handleClick = () => {
    alert(`Hai scritto: ${inputRef.current.value}`);
  };

  return (
    <div className="flex flex-col items-center gap-3 p-6">
      <input
        ref={inputRef}
        type="text"
        placeholder="Scrivi qualcosa..."
        className="border p-2 rounded-lg w-64"
      />
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Mostra valore
      </button>
    </div>
  );
}

import { useRef } from "react";

export default function InputConRef() {
  const inputRef = useRef(null);

  const handleClick = () => {
    if (inputRef.current) {
      alert(`Valore inserito: ${inputRef.current.value}`);
    }
  };

  return (
    <div className="flex flex-col items-center gap-3 p-6">
      <input
        ref={inputRef}
        type="text"
        placeholder="Scrivi qui..."
        className="border p-2 rounded-lg w-64"
      />
      <button
        onClick={handleClick}
        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
      >
        Mostra input
      </button>
    </div>
  );
}
