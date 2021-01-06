import React from "react";
import { Route, Switch } from "react-router-dom";
import Registration from "./Components/Registration";
import Navbar from "./Components/Navbar";
import Home from './Components/Home';
import Login from './Components/Login';

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Switch>
        <Route path="/" exact render={() => <Home/> }/>
        <Route path="/login" component={Login}/>
        <Route path="/" component={Registration}/>
      </Switch>
    </div>
  );
};

export default App;
