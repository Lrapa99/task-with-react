import React from "react";
// Material UI Components
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const Copyright = () => {
  return (
    <Typography variant="body2" color="GrayText" align="center">
      {new Date().getFullYear()} - {"Copyright \u00a9"} <br />
      <Link
        className="fw-bold text-decoration-none"
        color="inherit"
        href="https://porfolio-lrapa.netlify.app/"
      >
        Powered with 💜 by Lrapa
      </Link>
    </Typography>
  );
};

export default Copyright;
