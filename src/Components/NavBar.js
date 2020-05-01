import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  uList: {
    display: "flex",
  },
  navBarLook: {
      display:'flex',
      justifyContent: "space-between"
  },
}));

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: this.props.menu,
      title: this.props.title,
    };
  }
  render() {
    return (
      <div className={useStyles.root}>
        <AppBar position="static">
          <Toolbar style={{justifyContent:"space-between"}}>
           
            <Typography variant="h6" className={useStyles.title}>
              {this.state.title}
            </Typography>
            <div>
              {this.state.menu.map((menu) => {
                return (
                  <Button key={menu.id} color="inherit">
                    {menu.text}
                  </Button>
                );
              })}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
