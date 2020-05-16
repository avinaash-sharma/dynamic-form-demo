import React from "react";
import "../../App.css";
import InputText from "../InputText";

import NavBar from "../NavBar";

function MainPage({children}) {
  const menu=[{
    id:1,
    text:"Form Demo One",
    url:'/FormDemoOne',
  },{
    id:2,
    text:"Form Demo Two",
    url:'/formDemoTwo',
  }];
  const radio=[];
  console.log("Hello from MainPage")
  return (
    <div className="App">
      <NavBar title="SomeTitle" menu={menu} />
      <h1>Hello You are authorized to be here</h1>
    </div>
  );
}

export default MainPage;
