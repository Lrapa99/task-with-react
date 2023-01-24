import "./App.css";
import TaskListComponent from "./components/container/task_list";
import LoginFormik from "./components/pure/forms/loginFormik";
import RegisterFormik from "./components/pure/forms/registerFormik";

function App() {
  return (
    <div>
      {/* Componente de listado de tareas */}
      {/* <TaskListComponent /> */}
      {/* <LoginFormik /> */}
      <RegisterFormik />
    </div>
  );
}

export default App;
