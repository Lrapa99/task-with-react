import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import NotFoundPage from "./pages/404/NotFoundPage";
import AboutPage from "./pages/about-faqs/AboutPage";
import LoginPage from "./pages/auth/LoginPage";
import HomePage from "./pages/home/HomePage";
import StatePage from "./pages/home/StatePage";
import ProfilePage from "./pages/profile/ProfilePage";
import TaskDetailPage from "./pages/tasks/TaskDetailPage";
import TasksPage from "./pages/tasks/TasksPage";

function AppRoutingOne() {
  const [logged, setLogged] = useState(null);

  let taskList = [
    {
      id: 1,
      name: "task 1",
      description: "my first task",
    },
    {
      id: 2,
      name: "task 2",
      description: "my second task",
    },
  ];

  useEffect(() => {
    const getLogged = async () => {
      await setLogged(localStorage.getItem("credentials"));
      console.log(logged);
    };
    getLogged();
  }, [logged]);

  return (
    <Router>
      <div>
        <aside>
          {/* seccion de links para ir a las rutas  */}
          <Link to="/">|| HOME |</Link>
          <Link to="/about">| ABOUT |</Link>
          <Link to="/faqs">| FAQS |</Link>
          <Link to="/task/1">| task 1|</Link>
          <Link to="/task/2">| task 2|</Link>
          <Link to="/page-404">| Ruta Inexistente |</Link>
          <Link to="/login">| Login||</Link>
        </aside>
        <main>
          {/* switch de las rutas que cargan los componentes */}
          <Switch>
            {/* Las rutas van en orden */}
            <Route exact path="/" component={HomePage} />
            <Route path="/online-state" component={StatePage} />
            <Route path="/login" component={LoginPage}>
              {logged
                ? () => {
                    alert("You must be logged in. Redirecting to home...");
                    return <Redirect to="/" />;
                  }
                : () => {
                    return <LoginPage />;
                  }}
            </Route>
            <Route path="/(about|faqs)" component={AboutPage} />
            <Route path="/profile" component={ProfilePage}>
              {logged ? (
                <ProfilePage />
              ) : (
                () => {
                  alert("You must be logged in. Redirecting to login...");
                  return <Redirect to="/login" />;
                }
              )}
            </Route>
            <Route path="/tasks" component={TasksPage} />
            <Route
              exact
              path="/task/:id"
              render={({ match }) => (
                <TaskDetailPage task={taskList[match.params.id - 1]} />
              )}
            ></Route>
            {/* Es una buena practica dejar siempre al final nuetro 404- Not found page */}
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default AppRoutingOne;
