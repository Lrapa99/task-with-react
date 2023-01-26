import React from "react";
import { useLocation, useHistory } from "react-router-dom";

const AboutPage = () => {
  const location = useLocation();
  const history = useHistory();

  console.log("We are in Route: ", location.pathname); //nombre de la ruta (/about o /faqs)

  const navigate = (path) => {
    history.push(path); //pasamos la ruta por parametros
  };

  const goBack = () => {
    history.goBack();
  };

  const goForward = () => {
    history.goForward();
  };

  return (
    <div>
      <h1>About | Faqs</h1>
      <div className="gap-3 d-flex">
        <button
          onClick={() => navigate("/")} //pasamos la ruta
          className="btn btn-success opacity-75"
        >
          Go to Home
        </button>
        <button onClick={goBack} className="btn btn-danger opacity-75">
          Go back
        </button>
        <button onClick={goForward} className="btn btn-warning opacity-75">
          Go forward
        </button>
      </div>
    </div>
  );
};

export default AboutPage;
