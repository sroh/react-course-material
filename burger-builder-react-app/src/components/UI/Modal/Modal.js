import React from "react";
import Aux from "../../../hoc/Aux";
import Backdrop from "../Backdrop/Backdrop";

import classes from "./Modal.css";

const modal = props => {
  return (
    <Aux>
        <Backdrop show={props.show} click={props.modalClosed}/>
      <div
        className={classes.Modal}
        style={{
          transform:
            props.show === true ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show === true ? "1" : "0"
        }}
      >
        {props.children}
      </div>
    </Aux>
  );
};

export default modal;
