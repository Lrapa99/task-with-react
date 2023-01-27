import { Button } from "@mui/material";
import React, { useState } from "react";
import { getNumbers } from "../../services/observableService";

const ObservableExample = () => {
  const [number, setNumber] = useState(0);

  const obtainNewNumbers = () => {
    console.log(`Subscription to observable`);
    getNumbers.subscribe({
      next(newNumber) {
        console.log(`New Numbers:`, newNumber);
        setNumber(newNumber);
      },
      error(error) {
        alert(`Something went wrong: ${error}`);
        console.log(`Error in observable`);
      },
      complete() {
        alert(`Finished with: ${number}`);
        console.log(`Done with the observable`);
      },
    });
  };

  return (
    <div>
      <h1>Observable Example</h1>
      <h2>Number: {number}</h2>
      <Button variant="outlined" onClick={obtainNewNumbers}>
        Obtain new Numbers
      </Button>
    </div>
  );
};

export default ObservableExample;
