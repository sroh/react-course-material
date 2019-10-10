import React, { Component } from "react";
import Aux from "../../../hoc/Aux/Aux";
import Backdrop from "../Backdrop/Backdrop";

import classes from "./Modal.css";

class Modal extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Modal.js] shouldComponentUpdate called");
    return nextProps.show !== this.props.show;
  }

  // componentWillUpdate() {
  //   console.log("[Modal.js] componentWillUpdate called");
  // }

  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} click={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform:
              this.props.show === true ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show === true ? "1" : "0"
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
