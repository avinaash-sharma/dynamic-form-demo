import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import "./inputText.css";
import BorderWrapper from "react-border-wrapper";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      diplay: "flex",
    },
  },
}));

export default class InputText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: this.props.label,
    };
  }
  render() {
    return (
      <FormControl>
        <form className={useStyles.root} noValidate autoComplete="off">
          <BorderWrapper style={{padding:"10px"}}>
            <div className="row" style={{ display: "flex" }}>
              {this.state.label.map((element) => {
                return (
                  <div key={element} className="textArea">
                    {console.log("inside return")}
                    <TextField label={element} fullWidth variant="outlined" />
                  </div>
                );
              })}
            </div>
          </BorderWrapper>
        </form>
      </FormControl>
    );
  }
}
