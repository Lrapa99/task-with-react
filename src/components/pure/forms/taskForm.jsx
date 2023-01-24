import React, { useRef } from "react";
import PropTypes from "prop-types";
import { LEVELS } from "../../../models/levels.enum";
import { Task } from "../../../models/task.class";

const TaskForm = ({
  addTask,
  length,
  colorPriority,
  setColorPriority,
  colorsPriority,
}) => {
  const nameRef = useRef("");
  const descriptionRef = useRef("");
  const levelRef = useRef("");

  function addTasks(e) {
    e.preventDefault();
    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value
    );
    addTask(newTask);

    // limpiamos formulario despues de enviar
    nameRef.current.value = "";
    descriptionRef.current.value = "";
    levelRef.current.value = LEVELS.NORMAL;
    setColorPriority(colorsPriority.normal);
  }

  function changeColorPriority() {
    (levelRef.current.value === LEVELS.NORMAL &&
      setColorPriority(colorsPriority.normal)) ||
      (levelRef.current.value === LEVELS.URGENT &&
        setColorPriority(colorsPriority.urgent)) ||
      (levelRef.current.value === LEVELS.BLOCKING &&
        setColorPriority(colorsPriority.blocking));
  }

  return (
    <form
      className="d-flex justify-content-center align-content-center mb-4"
      onSubmit={addTasks}
    >
      <div className="form-outline flex-fill">
        <input
          type="text"
          ref={nameRef}
          id="inputName"
          placeholder="task name"
          className="form-control form-control-lg"
          required
          autoFocus
        />
        <input
          type="text"
          ref={descriptionRef}
          id="inputName"
          placeholder="task description"
          className="form-control form-control-lg"
          required
        />
        <select
          className={`form-select fw-bold text-opacity-75 ${colorPriority} `}
          aria-label={LEVELS.NORMAL}
          onChange={changeColorPriority}
          ref={levelRef}
          id="selectLevel"
        >
          <option className={colorsPriority.normal} value={LEVELS.NORMAL}>
            Normal
          </option>
          <option className={colorsPriority.urgent} value={LEVELS.URGENT}>
            Urgent
          </option>
          <option className={colorsPriority.blocking} value={LEVELS.BLOCKING}>
            Blocking
          </option>
        </select>

        <button
          type="submit"
          className="btn btn-success btn-lg ms-2 opacity-75"
        >
          {length > 0 ? "Add new task" : "Create your first task"}
        </button>
      </div>
    </form>
  );
};

TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired,
};

export default TaskForm;
