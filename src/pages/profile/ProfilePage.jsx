import React from "react";
import { useHistory } from "react-router-dom";

const ProfilePage = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  const navigate = (path) => {
    history.push(path);
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <div className="d-flex gap-3">
        <button onClick={goBack} className="btn btn-danger opacity-75">
          Go back
        </button>
        <button
          onClick={() => navigate("/tasks")}
          className="btn btn-info opacity-75"
        >
          Go tasks
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
