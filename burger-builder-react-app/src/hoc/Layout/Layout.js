import React, { Component } from "react";
import Aux from "../Aux/Aux";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Sidedrawer from "../../components/Navigation/Sidedrawer/Sidedrawer";

import classes from "./Layout.css";

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerClosedHandler = () => {
    console.log("[Layout.js] sideDrawerClosedHandler called  !");
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    console.log("[Layout.js] sideDrawerToggleHandler called  !");
    this.setState((prevState) => {
        return { showSideDrawer: !prevState.showSideDrawer };
    });
  }

  render() {
    return (
      <Aux>
        <Toolbar click={this.sideDrawerToggleHandler}/>
        <Sidedrawer
          closed={this.sideDrawerClosedHandler}
          open={this.state.showSideDrawer}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
