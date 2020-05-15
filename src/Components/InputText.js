import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import "./inputText.css";
import { Link } from "react-router-dom";

import BorderWrapper from "react-border-wrapper";

export default class InputText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: this.props.label,
      submitButtonText: this.props.submitButtonText,
      forgotOption: this.props.forgotOption,
    };
  }

  render() {
    console.log("HelloWrold");
    return (
      <Container maxWidth="sm">
        <div>
          <FormControl fullWidth>
            <form validate autoComplete="off">
              {this.state.label.map((element) => {
                return (
                  <div key={element} style={{ paddingBottom: "10px" }}>
                    {console.log("inside return")}
                    <TextField
                      label={element}
                      validate shrink
                      type={
                        element === "email"
                          ? "email"
                          : element === "password"
                          ? "password"
                          : element === "phone"
                          ? "number"
                          : "text"
                      }
                      required
                      fullWidth
                      variant="outlined"
                    />
                  </div>
                );
              })}
              {this.state.submitButtonText !== "" ? (
                <Button
                variant="contained"
                type="submit"
                fullWidth
                color="primary"
              >
                {this.state.submitButtonText}
              </Button>
              ) : ""}
              
            </form>
          </FormControl>
          {this.state.forgotOption === "true" ? (
            <a href="#forgotPassword" style={{ right: "39px" }}>
            Forgot password?
          </a>
          ) : ""}
          
          <hr />
        </div>
      </Container>
    );
  }
}
