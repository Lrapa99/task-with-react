import { Button } from "@mui/material";
import React from "react";

const AsyncExample = () => {
  async function generateNumber() {
    return 1;
  }

  async function generatePromiseNumber() {
    return Promise.resolve(2);
  }

  function obtainNumber() {
    generateNumber()
      .then((response) => alert(`Response: ${response}`))
      .catch((error) => alert(`Something went wrong: ${error}`));
  }
  function obtainPromiseNumber() {
    generatePromiseNumber()
      .then((response) => alert(`Response: ${response}`))
      .catch((error) => alert(`Something went wrong: ${error}`));
  }

  async function saveSessionStorage(key, value) {
    sessionStorage.setItem(key, value);
    return Promise.resolve(sessionStorage.getItem(key));
  }

  function showStorage() {
    saveSessionStorage("name", "lrapa")
      .then((response) => {
        let value = response;
        alert(`Save name: ${value}`);
      })
      .catch((error) => alert(`Something went wrong: ${error}`))
      .finally(() => {
        alert("SUCCESS: Name saved and retreived");
      });
  }

  async function obtainMessage() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("hello world");
      }, 2000);
    });

    let message = await promise;

    await alert(`Message received: ${message}`);
  }

  const returnError = async () => {
    await Promise.reject(new Error("Oooops"));
  };

  const consumeError = () => {
    returnError()
      .then((res) => alert(`Everything is OK: ${res}`))
      .catch((error) => alert(`Something went wrong: ${error}`))
      .finally(() => {
        alert("Finally executed");
      });
  };

  const urlNotFound = async () => {
    try {
      let response = await fetch("https://jsonplaceholder");
      alert(`Response: ${JSON.stringify(response)}`);
    } catch (error) {
      alert(`Something went with your URL: ${error} (check your console)`);
    }
  };

  const miltiplePromise = async () => {
    let results = await Promise.all([
      fetch("https://jsonplaceholder"),
      fetch("https://jsonplaceholder/users?page=2"),
    ]).catch((error) => {
      alert(`Something went with your URL: ${error} (check your console)`);
    });
  };

  return (
    <div className="row text-center">
      <h1>Async Promise Example</h1>
      <div className="col-8 mx-auto d-flex flex-column gap-3">
        <Button variant="contained" onClick={obtainNumber}>
          Obtain Number
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={obtainPromiseNumber}
        >
          Obtain Promise Number
        </Button>
        <Button variant="contained" color="secondary" onClick={showStorage}>
          Save Name and Show
        </Button>
        <Button variant="contained" color="secondary" onClick={obtainMessage}>
          Send Message in 2 Seconds
        </Button>
        <Button variant="contained" color="error" onClick={consumeError}>
          Obtain Error
        </Button>
        <Button variant="outlined" color="error" onClick={urlNotFound}>
          Request to Unknown URL
        </Button>
        <Button variant="outlined" color="error" onClick={miltiplePromise}>
          Multiple Promises
        </Button>
      </div>
    </div>
  );
};

export default AsyncExample;
