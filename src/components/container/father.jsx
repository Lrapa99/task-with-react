import React, { useState } from "react";
import Child from "../pure/child";

const Father = () => {
  const [name, setName] = useState("Bienvenido");

  function update(text) {
    text && setName(text);
  }

  function send(text) {
    alert(
      `Mensaje recibido desde el child: ${
        text ? text : "No se ha recibido ningun mensaje"
      }`
    );
  }
  return (
    <div className="bg-dark text-white p-5 vh-100">
      <h1>Father💪</h1>
      <Child name={name} send={send} update={update} />
    </div>
  );
};

export default Father;
