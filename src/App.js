import React from "react";
import { Route, Switch } from "react-router-dom";

import Workouts from "./pages/workout/workouts";
import Nutrition from "./pages/nutrition/nutrition";
import Header from "./component/WorkoutUI/header";
import "./App.css";

const App = props => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/workouts" component={Workouts} />
        <Route exact path="/nutrition" component={Nutrition} />
        <Route path="/" component={Workouts} />
      </Switch>
    </div>
  );
};

export default App;
