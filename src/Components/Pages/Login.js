import React, { Component } from "react";
import InputText from "../ReusableComponents/InputText";

import GoogleLogo from "../../google.png";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import "./Login.css";
import { Link } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const fieldName = ["id", "email", "password"];
    const submitButtonText = "Sign In";
    return (
      <Container maxWidth="xs">
        <div className="containerStyle">
          <InputText
            label={fieldName}
            submitButtonText={submitButtonText}
            forgotOption="true"
          />

          <Button
            variant="contained"
            color="primary"
            autoCapitalize="false"
            style={{ marginBottom: "10px" }}
          >
            <img src={GoogleLogo} style={{ width: "30px" }} alt="google" />
            &nbsp; Sign In with your Google Account
          </Button>
          <Link to="./Register">
            <Button variant="contained" color="primary" autoCapitalize="false">
              Not here yet? Signup.
            </Button>
          </Link>
        </div>
      </Container>
    );
  }
}
