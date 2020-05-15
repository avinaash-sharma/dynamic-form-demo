import React from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import WelcomePage from "../src/Components/Pages/WelcomePage";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(1)
  },
  highlight: {
    backgroundColor: 'red',
  }
}));
function App() {  
  
  return (
    <div className={useStyles.root}>
      <WelcomePage />
    </div>
  );
}

export default App;
