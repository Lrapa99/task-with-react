import React from "react";
import { useLocation, useHistory } from "react-router-dom";

const HomePage = () => {
  const location = useLocation();
  const history = useHistory();

  console.log("We are in Route: ", location.pathname); //nombre de la ruta (/about o /faqs)

  const navigate = (path) => {
    history.push(path); //pasamos la ruta por parametros
  };

  const navigateProps = (path) => {
    history.push({
      pathname: path,
      search: "?online=true", //query params
      state: {
        online: true,
      },
    });
  };

  return (
    <div>
      <h1>Home Page</h1>
      <div className="gap-3 d-flex">
        <button
          onClick={() => navigate("/profile")} //pasamos la ruta
          className="btn btn-primary opacity-75"
        >
          Go to profile
        </button>
        <button
          onClick={() => navigateProps("/online-state")} //pasamos la ruta
          className="btn btn-success opacity-75"
        >
          Go to page with state / query params
        </button>
      </div>
    </div>
  );
};

export default HomePage;
