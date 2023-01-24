import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";
import "../../styles/task.scss";
import { LEVELS } from "../../models/levels.enum";

const TaskComponent = ({ task, completed, deleteTask }) => {
  useEffect(() => {
    console.log("tarea creada");

    return () => {
      console.log("tarea desmontada");
    };
  }, [task]);

  function taskLevelBadge() {
    switch (task.level) {
      case LEVELS.NORMAL:
        return (
          <h6 className="mb-0">
            <span
              className={`badge bg-primary bg-opacity-10 border border-opacity-75 text-opacity-75 border-primary text-primary ${
                task.completed && "opacity-50"
              }`}
            >
              {task.level}
            </span>
          </h6>
        );
      case LEVELS.URGENT:
        return (
          <h6 className="mb-0">
            <span
              className={`badge bg-warning bg-opacity-10 border border-opacity-75 text-opacity-75 border-warning text-warning ${
                task.completed && "opacity-50"
              }`}
            >
              {task.level}
            </span>
          </h6>
        );
      case LEVELS.BLOCKING:
        return (
          <h6 className="mb-0">
            <span
              className={`badge bg-danger bg-opacity-10 border border-opacity-75 text-opacity-75 border-danger text-danger ${
                task.completed && "opacity-50"
              }`}
            >
              {task.level}
            </span>
          </h6>
        );

      default:
        break;
    }
  }

  function taskCompletedIcon() {
    if (task.completed) {
      return (
        <i
          onClick={() => completed(task)}
          className="bi-toggle-on fs-5 opacity-75 task-action"
          style={{ color: "#55efc4" }}
        ></i>
      );
    } else {
      return (
        <i
          onClick={() => completed(task)}
          className="bi-toggle-off fs-5 opacity-50 task-action"
        ></i>
      );
    }
  }

  return (
    <tr className={task.completed ? "task-completed" : "task-pending"}>
      <th>
        <span className="m-2">{task.name}</span>
      </th>
      <td className="align-middle">
        <span>{task.description}</span>
      </td>
      <td className="align-middle">{taskLevelBadge()}</td>
      <td className="align-middle">
        {taskCompletedIcon()}
        <i
          onClick={() => {
            const confirm = window.confirm(
              "Esta seguro de eliminar esta tarea?"
            );
            confirm && deleteTask(task);
          }}
          className="bi-trash fs-5 opacity-75 task-action"
          style={{ color: "#ff7675" }}
        ></i>
      </td>
    </tr>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
  completed: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TaskComponent;
