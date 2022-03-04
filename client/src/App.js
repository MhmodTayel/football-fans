import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoutes";

import { Register, Login, Home } from "./pages";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path={"/login"} exact component={Login} />
          <Route path={"/register"} exact component={Register} />
          <ProtectedRoute path={"/home"} exact component={Home} />
          <ProtectedRoute path={"/"} exact component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
