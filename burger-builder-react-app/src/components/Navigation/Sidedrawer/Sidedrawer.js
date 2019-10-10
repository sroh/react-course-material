import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux";

import classes from "./Sidedrawer.css";

const sidedrawer = props => {
  let sidedrawerContainStyle = [classes.Sidedrawer, classes.Closed];
  if(props.open){
    sidedrawerContainStyle = [classes.Sidedrawer, classes.Open];
  }

  let sidedrawerContainStyleString = sidedrawerContainStyle.join(' ');

  return (
    <Aux>
      <Backdrop show={props.open} click={props.closed} />
      <div className={sidedrawerContainStyleString} >
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sidedrawer;
