import React from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import WelcomePage from "../src/Components/Pages/WelcomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./Components/Pages/Register";
import FormDemoOne from "./Components/Pages/FormDemoOne";
import Login from "./Components/Pages/Login";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: theme.spacing(1),
  },
  highlight: {
    backgroundColor: "red",
  },
}));
function App() {
  return (
    <div className={useStyles.root}>
      <Router>
        
        <Switch>
          <Route path="/" exact component={WelcomePage} />
          <Route path ="/Login" component = {Login} />
          <Route path="/Register" exact component={Register} />
          <Route path="/FormDemoOne" exact component={FormDemoOne} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
