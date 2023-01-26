import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import RegisterFormik from "./components/pure/forms/registerFormik";
import NotFoundPage from "./pages/404/NotFoundPage";
import LoginPage from "./pages/auth/LoginPage";
import DashBoard from "./pages/dashboard/DashBoard";
import TasksPage from "./pages/tasks/TasksPage";

function AppRoutingFinal() {
  //TODO change to value from sessionStorage (or something dinamic)
  let loggedIn = false;
  return (
    <div>
      <Router>
        {/* route switch */}
        <Switch>
          {/* redirecciones yo protect our routes */}
          <Route exact path="/">
            {loggedIn ? (
              <Redirect from="/" to="/dashboard" />
            ) : (
              <Redirect from="/" to="/login" />
            )}
          </Route>
          {/* login route */}
          <Route exact path="/login" component={LoginPage} />
          {/* register */}
          <Route exact path="/register">
            {loggedIn ? <DashBoard /> : <RegisterFormik />}
          </Route>
          {/* dashboard route */}
          <Route exact path="/dashboard">
            {loggedIn ? <DashBoard /> : <Redirect from="/" to="/login" />}
          </Route>
          {/* tasks route */}
          <Route exact path="/tasks">
            {loggedIn ? <TasksPage /> : <Redirect from="/" to="/login" />}
          </Route>

          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default AppRoutingFinal;
