import React from "react";

import { useLocation } from "react-router-dom";

const StatePage = () => {
  const location = useLocation();
  return (
    <div>
      <h1>
        State:{" "}
        {location.state.online ? "the user is online" : "the user is offline"}
      </h1>
      <h2>Query params: {location.search}</h2>
    </div>
  );
};

export default StatePage;
