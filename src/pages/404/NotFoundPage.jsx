import React from "react";
import { useHistory } from "react-router-dom";

const NotFoundPage = () => {
  const history = useHistory();

  const navigate = (path) => {
    history.push(path); //pasamos la ruta por parametros
  };

  return (
    <div>
      <h1>Not Found Page - 404</h1>
      <button
        onClick={() => navigate("/")} //pasamos la ruta
        className="btn btn-success opacity-75"
      >
        Go to Home
      </button>
    </div>
  );
};

export default NotFoundPage;
