import React, { useState, useEffect } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskForm from "../pure/forms/taskForm";
import Loader from "../pure/Loader";
import TaskComponent from "../pure/task";

const TaskListComponent = () => {
  const defaultTask1 = new Task(
    "Example1",
    "Default description1",
    false,
    LEVELS.NORMAL
  );
  const defaultTask2 = new Task(
    "Example2",
    "Default description2",
    false,
    LEVELS.URGENT
  );
  const defaultTask3 = new Task(
    "Example3",
    "Default description3",
    false,
    LEVELS.BLOCKING
  );

  //guardamos todas las tareas iniciales en una variable
  const defaultTasks = [defaultTask1, defaultTask2, defaultTask3];

  //colores para los diferentes niveles de prioridades de las tareas
  const colorsPriority = {
    normal: "text-primary",
    urgent: "text-warning",
    blocking: "text-danger",
  };

  const [tasks, setTasks] = useState(defaultTasks);

  const [colorPriority, setColorPriority] = useState(colorsPriority.normal);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Modificacion de las tareas");
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      console.log("cuando se desmonte el componente");
    };
  }, [tasks]);

  function completedTask(task) {
    console.log("completed this taks: ", task);
    const index = tasks.indexOf(task);
    const tempTask = [...tasks];
    tempTask[index].completed = !tempTask[index].completed;
    // setTask para actualizar el estado
    setTasks(tempTask);
  }

  function deleteTask(task) {
    console.log("delete this taks: ", task);
    const index = tasks.indexOf(task);
    const tempTask = [...tasks];
    tempTask.splice(index, 1);
    setTasks(tempTask);
  }

  function addTask(task) {
    const tempTask = [...tasks];
    tempTask.push(task);
    setTasks(tempTask);
  }

  function TaskTable() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Priority</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => {
            return (
              <TaskComponent
                key={index}
                task={task}
                completed={completedTask}
                deleteTask={deleteTask}
              />
            );
          })}
        </tbody>
      </table>
    );
  }

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="col-12">
          <div className="card">
            <div className="card-header p-3">
              <h5>Your Task:</h5>
            </div>
            <div
              className="card-body table-responsive"
              data-mdb-perfect-scrollbar="true"
              style={{ position: "relative", height: "400px" }}
            >
              {tasks.length > 0 ? (
                <TaskTable />
              ) : (
                <>
                  <h3>There are no tasks to show</h3>
                  <h4>Please, create one</h4>
                </>
              )}
            </div>
          </div>
          <TaskForm
            colorPriority={colorPriority}
            colorsPriority={colorsPriority}
            setColorPriority={setColorPriority}
            addTask={addTask}
            length={tasks.length}
          />
        </div>
      )}
    </div>
  );
};

export default TaskListComponent;
