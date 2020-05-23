import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import "./inputText.css";
import Radio from "@material-ui/core/Radio";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

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
    console.log(this.props);
    return (
      <Container maxWidth="sm">
        <div>
          <FormControl fullWidth>
            <form validate autoComplete="off">
              {this.state.label.map((element, index) => {
                return (
                  <div key={index} style={{ paddingBottom: "10px" }}>
                    {console.log("inside return")}
                    {element === "name" ? (
                      <div>
                        <TextField
                          style={{ paddingBottom: "10px" }}
                          key="firstName"
                          label="First Name"
                          validate
                          type="text"
                          required
                          fullWidth
                          variant="outlined"
                        />
                        <TextField
                          key="lastName"
                          label="Last Name"
                          validate
                          type="text"
                          required
                          fullWidth
                          variant="outlined"
                        />
                      </div>
                    ) : element === "radioButton" ? (
                      <div key={index}>
                        <FormLabel component="legend">
                          {this.props.radioParameter}
                        </FormLabel>
                        <RadioGroup
                          aria-label="gender"
                          name="gender1"

                          // onChange={handleChange}
                        >
                          {this.props.radioData.map((radioButton, index) => {
                           return (<FormControlLabel
                              value={radioButton}
                              control={<Radio />}
                              label={radioButton}
                            />)
                          })}
                        </RadioGroup>
                      </div>
                    ) : (
                      <TextField
                        label={element.toUpperCase()}
                        validate
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
                    )}
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
              ) : (
                ""
              )}
            </form>
          </FormControl>
          {this.state.forgotOption === "true" ? (
            <a href="#forgotPassword" style={{ right: "39px" }}>
              Forgot password?
            </a>
          ) : (
            ""
          )}

          <hr />
        </div>
      </Container>
    );
  }
}
