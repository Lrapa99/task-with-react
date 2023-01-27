import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getRandomChuckNorris } from "../../services/axiosService";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const ChuckNorris = () => {
  const [chuck, setChuck] = useState(null);
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  useEffect(() => {
    getRandomChuckNorris()
      .then((res) => {
        console.log(res);

        if (res.status === 200) {
          setChuck(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const btnRandomChuck = () => {
    getRandomChuckNorris()
      .then((res) => {
        console.log(res);

        if (res.status === 200) {
          setChuck(res.data);
        }
      })
      .catch((err) => console.log(err));
  };

  const liked = () => {
    setLike(like + 1);
  };

  const disliked = () => {
    setDislike(dislike + 1);
  };

  return (
    <div className="text-center">
      <h1 className="fw-bold opacity-50">Chuck Norris</h1>
      {chuck !== null ? (
        <div className="d-flex gap-2 flex-column mb-2">
          <picture>
            <img
              style={{ width: "300px" }}
              src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png"
              alt="Chuck-Norris-img"
            />
          </picture>
          <div
            style={{ width: "400px" }}
            className="d-flex bg-warning text-wrap text-opacity-75 bg-opacity-25 text-dark fw-bold"
          >
            <span className="px-1 me-1 bg-warning bg-opacity-50"></span>
            <p>{chuck.value}</p>
          </div>

          {/* btn like y dislike */}
          <div>
            <Button variant="text" onClick={liked} endIcon={<ThumbUpIcon />}>
              {like}
            </Button>
            <Button
              variant="text"
              onClick={disliked}
              color="error"
              endIcon={<ThumbDownAltIcon />}
            >
              {dislike}
            </Button>
          </div>
        </div>
      ) : (
        <p className="text-danger fw-bold fs-3">No se cargaron los datos...</p>
      )}
      {/* btn generate random */}
      <Button variant="contained" onClick={btnRandomChuck} color="warning">
        generate random
      </Button>
    </div>
  );
};

export default ChuckNorris;
