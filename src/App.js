import "./App.css";
import TaskListComponent from "./components/container/task_list";
import AsyncExample from "./components/pure/AsyncExample";
import AxiosExample from "./components/pure/AxiosExample";
import ChuckNorris from "./components/pure/ChuckNorris";
import FetchExample from "./components/pure/FetchExample";
import LoginFormik from "./components/pure/forms/loginFormik";
import RegisterFormik from "./components/pure/forms/registerFormik";
import ObservableExample from "./components/pure/ObservableExample";

function App() {
  return (
    <div>
      {/* Componente de listado de tareas */}
      {/* <TaskListComponent /> */}
      {/* <LoginFormik /> */}
      {/* <RegisterFormik /> */}
      {/* Asincronia */}
      {/* <AsyncExample /> */}
      {/* <ObservableExample /> */}
      {/* <FetchExample /> */}
      {/* <AxiosExample /> */}
      <ChuckNorris />
    </div>
  );
}

export default App;
