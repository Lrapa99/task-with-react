import React, { useState } from "react";

function Ejemplo1() {
  const initialCounter = 0;

  const initialPerson = {
    name: "lrapa",
    lastname: "mcmillan",
    email: "elrapa@gmail.com",
  };

  const [count, setCount] = useState(initialCounter);
  const [person, setPerson] = useState(initialPerson);

  function sumar() {
    setCount(count + 1);
  }

  function restar() {
    setCount(count - 1);
  }

  function reset() {
    setCount(initialCounter);
  }

  function updatePerson() {
    setPerson({
      name: "Ray",
      lastname: "Perez",
      email: "rayperez@hotmail.com",
    });
  }

  return (
    <div>
      <h1>Ejemplos de Hooks:</h1>
      <h2>useState</h2>
      <p>Contador: {count}</p>
      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
      <button onClick={reset}>Reset</button>
      <h2>
        Persona: {person.name} - {person.lastname} - {person.email}
      </h2>
      <button onClick={updatePerson}>Update Person</button>
    </div>
  );
}

export default Ejemplo1;
