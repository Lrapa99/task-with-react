import React, { useState } from "react";

const GreetingStyled = (props) => {
  const loggedStyle = {
    color: "#55efc4",
    fontWeight: "bold",
  };

  const unLoggedStyle = {
    color: "#d63031",
    fontWeight: "bold",
  };

  const [logged, setLogged] = useState(false);

  const isLogged = <p>Hola {props.name}</p>;

  const isNotLogged = <p>Hola Invitado</p>;

  return (
    <div style={logged ? loggedStyle : unLoggedStyle}>
      {logged ? isLogged : isNotLogged}
      <button onClick={() => setLogged(!logged)}>
        {logged ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default GreetingStyled;
