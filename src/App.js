import React from "react";
import logo from "./logo.svg";
import "./App.css";
import InputText from "./Components/InputText";
import NavBar from "./Components/NavBar";

function App() {
  const menu=[{
    id:1,
    text:"Form Demo One",
    url:'#',
  },{
    id:2,
    text:"Form Demo Two",
    url:'#',
  }];
  const hello=["First Name","Second Name"];
  return (
    <div className="App">
      <NavBar title="SomeTitle" menu={menu} />
      <div className="container">
        <InputText label={hello}/>
      </div>
    </div>
  );
}

export default App;
