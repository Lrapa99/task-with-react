import React, { useRef } from "react";

const Child = ({ name, send, update }) => {
  const messageRef = useRef("");
  const nameRef = useRef("");

  function btn1(text) {
    alert(`El valor del input es: ${text ? text : "input vacio"}`);
  }

  function onChange() {
    console.log(nameRef.current.value);
  }

  function btn2() {
    nameRef.current.value = "";
    messageRef.current.value = "";
  }

  function btn3(newName) {
    update(newName);
  }

  return (
    <div className="bg-primary col-5 mx-auto rounded bg-opacity-25 p-5">
      <h2>Child🤓</h2>
      <h3 className="text-warning">Hello,{name}</h3>
      <button
        className="btn btn-danger mx-2 mt-3"
        onMouseOver={() => btn1(messageRef.current.value)}
      >
        Button1
      </button>
      <button className="btn btn-danger mx-2 mt-3" onClick={btn2}>
        Button2
      </button>
      <button
        className="btn btn-danger mx-2 mt-3"
        onDoubleClick={() => btn3("Hacker❌")}
      >
        Button3
      </button>
      <input
        type="text"
        placeholder="Send a text to your father"
        className="form-control mt-3"
        ref={messageRef}
      />
      <button
        className="btn btn-success mx-2 mt-3"
        onClick={() => send(messageRef.current.value)}
      >
        Send Message
      </button>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder="Update Name"
          className="form-control mt-3"
          onChange={onChange}
          ref={nameRef}
          required
        />
        <button
          type="submit"
          className="btn btn-primary mx-2 mt-3"
          onClick={() => {
            update(nameRef.current.value);
          }}
        >
          Update Name
        </button>
      </form>
    </div>
  );
};

export default Child;
