import React from "react";
import Aux from "../../hoc/Aux";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Sidedrawer from "../Navigation/Sidedrawer/Sidedrawer";

import classes from "./Layout.css";

const layout = props => {
  return (
    <Aux>
      <Toolbar />
      <Sidedrawer />
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default layout;
