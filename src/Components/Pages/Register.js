import React, { Component } from "react";

import InputText from "../ReusableComponents/InputText";

import GoogleLogo from "../../google.png";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import "./Login.css";
import { Link } from "react-router-dom";

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
  render() {
    const fieldName = ["name","phone", "email", "password","radioButton"];
    const submitButtonText = "Sign Up";
    const radioParameter="Gender"
    const radioData = ["male","female","tiktoker"];
	
    const data = {"option1": "Value1", "option2" : "Value2"}
    return <div>
    <Container maxWidth="xs">
    <div className="containerStyle">
      <InputText
        label={fieldName}
        submitButtonText={submitButtonText}
        radioData={radioData}
		    radioParameter={radioParameter}
        dropDown={data}
        csvUploader
      />

      <Button
        variant="contained"
        color="primary"
        autoCapitalize="false"
        style={{ marginBottom: "10px" }}
      >
        <img src={GoogleLogo} style={{ width: "30px" }} alt="google" />
        &nbsp; Sign Up with your Google Account
      </Button>
      <Link to="./Login">
        <Button variant="contained" color="primary" autoCapitalize="false">
          Already a Member? Sign in.
        </Button>
      </Link>
    </div>
  </Container>
    </div>;
  }
}
