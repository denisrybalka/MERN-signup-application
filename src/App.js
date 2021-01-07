import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Registration from "./Components/Registration";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Login from "./Components/Login";

const App = () => {
  const [user, setUser] = useState({});
  const history = useHistory();

  const loginUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
    history.push("/");
  };

  const logoutUser = () => {
    localStorage.removeItem("user");
    setUser({});
  }

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("user"));
    if (localUser) {
      setUser({
        fullName: localUser.fullname,
        username: localUser.username,
        email: localUser.email,
        password: localUser.password,
      });
    }
  }, []);

  return (
    <div className="container">
      <Navbar user={user} logoutUser={logoutUser}/>
      <Switch>
        <Route path="/" exact render={() => <Home user={user} />} />
        <Route path="/login" render={() => <Login loginUser={loginUser} />} />
        <Route path="/" component={Registration} />
      </Switch>
    </div>
  );
};

export default App;
