import React from "react";
function Card(props) {
  return (
    <div className="card">
      {/* props.children viene renderizzato qui per mostrare il contenuto passato */}
      {props.children}
    </div>
  );
}