import React from "react";

export default function List() {
  const elementi = ["Mela", "Banana", "Arancia"];

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Lista della spesa</h2>
      <ItemList items={elementi} />
    </div>
  );
}

 function List() {
  const elementi = ["Mela", "Banana", "Arancia"];

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Lista della spesa</h2>
      <ItemList items={elementi} />
    </div>
  );
}