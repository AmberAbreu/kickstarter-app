import { makeStyles } from "@material-ui/core";
import React, { ReactElement } from "react";

import NavBar from "./NavBar";

interface Props {
  children: ReactElement;
}

const useStyles = makeStyles({
  page: {
    background: "#f9f9f9",
    width: "100%",
  },
});

export default function Layout({ children }: Props): ReactElement {
  const classes = useStyles();
  return (
    <div>
      <NavBar />
      <div className={classes.page}>{children}</div>
    </div>
  );
}
