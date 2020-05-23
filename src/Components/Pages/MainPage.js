import React from "react";
import "../../App.css";
import DataTable from "../ReusableComponents/DataTable";

import NavBar from "../ReusableComponents/NavBar";

function MainPage({ children }) {
  const menu = [
    {
      id: 1,
      text: "Form Demo One",
      url: "/FormDemoOne",
    },
    {
      id: 2,
      text: "Form Demo Two",
      url: "/formDemoTwo",
    },
  ];
  // const URL="https://fortnite-api.theapinetwork.com/store/get"
  const radio = [];
  console.log("Hello from MainPage");
  return (
    <div className="App">
      <NavBar title="SomeTitle" menu={menu} />
      <h1>Fortnite Game API</h1>
      <DataTable />
    </div>
  );
}

export default MainPage;
