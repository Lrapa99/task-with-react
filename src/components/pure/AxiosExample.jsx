import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getRandomUser } from "../../services/axiosService";

const AxiosExample = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getRandomUser()
      .then((response) => {
        console.log(`This response is: `, response);
        if (response.status === 200) {
          setUser(response.data.results[0]);
        }
      })
      .catch((err) => {
        alert(`Something went wrong: ${err}`);
      });
  }, []);

  const randomUser = () => {
    getRandomUser()
      .then((response) => {
        console.log(`This response is: `, response);
        if (response.status === 200) {
          setUser(response.data.results[0]);
        }
      })
      .catch((err) => {
        alert(`Something went wrong: ${err}`);
      });
  };

  return (
    <div className="text-center">
      <h1>Axios Example</h1>
      {user !== null ? (
        <div className="card gap-1">
          <picture>
            <img
              className="rounded-circle"
              src={user.picture.large}
              alt="img"
            />
          </picture>
          <p className="fw-bold fs-5">
            {user.name.title}. {user.name.first} {user.name.last}
          </p>

          <small>{user.email}</small>
          <small>{user.cell}</small>
          <small>
            <i>
              {user.location.city} - {user.location.state}
            </i>
          </small>
          <Button onClick={randomUser} variant="contained">
            Random User
          </Button>
        </div>
      ) : (
        <p className="fw-bold text-danger">No se cargaron los datos</p>
      )}
    </div>
  );
};

export default AxiosExample;
