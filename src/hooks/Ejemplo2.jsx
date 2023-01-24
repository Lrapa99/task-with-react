import React, { useContext, useState } from "react";

const glogalContext = React.createContext(null);

const Componente1 = () => {
  const state = useContext(glogalContext);

  return (
    <div>
      <h2>El token es: {state.token}</h2>
      <Componente2 />
    </div>
  );
};

const Componente2 = () => {
  const state = useContext(glogalContext);

  return <h2>El sesion es: {state.sesion}</h2>;
};

const GlobalComponent = () => {
  const initialSession = {
    token: "212612612",
    sesion: 1,
  };

  const [sessionData, setSessionData] = useState(initialSession);

  function updateSession() {
    setSessionData({
      token: "JWT7367263762",
      sesion: sessionData.sesion + 1,
    });
  }

  return (
    <glogalContext.Provider value={sessionData}>
      <>
        <h1>Ejemplo de useState y useContext</h1>
        <Componente1 />
        <button onClick={updateSession}>Update Session</button>
      </>
    </glogalContext.Provider>
  );
};

export default GlobalComponent;
