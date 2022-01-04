import React, { ReactElement } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

interface Props {}

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: "#A4D7C2",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    height: 80,
    // marginLeft: "-10px",
    // marginTop: "-10px",
    // marginRight: "-10px",
  },
  link: {
    color: "#FFFFFF",
    fontSize: 20,
  },
  navLinks: {
    display: "flex",
    alignItems: "center",
    padding: "20px",
    width: "33%",
    justifyContent: "space-between",
  },
}));

export default function NavBar({}: Props): ReactElement {
  const classes = useStyles();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      window.localStorage.removeItem("token");
      navigate("/login");
    } catch (error) {
      console.log("logout failed");
    }
  }

  return (
    <nav className={classes.container}>
      <div className={classes.navLinks}>
        <Link to="/">
          <Typography className={classes.link}>Home</Typography>
        </Link>
        <Link to="/create">
          <Typography className={classes.link}>Create A Campaign</Typography>
        </Link>
        <Link to="/campaigns">
          <Typography className={classes.link}>Fund a Campaign</Typography>
        </Link>
        <Link to="/profile">
          <Typography className={classes.link}>My Campaigns</Typography>
        </Link>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </nav>
  );
}
