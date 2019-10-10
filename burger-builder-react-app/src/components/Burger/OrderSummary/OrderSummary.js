import React, { Component } from "react";
import Aux from "../../../hoc/Aux/Aux";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  
  // can also be a function 
  // componentWillUpdate(){
  //   console.log("[OrderSummary.js] componentWillUpdate called !");
  // }

  render() {

    const ingredientsSummary = Object.keys(this.props.ingredients).map(
      (igKey, index) => {
        return (
          <li key={igKey + index}>
            <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients</p>
        <hr />
        <ul>{ingredientsSummary}</ul>
        <hr />
        <p>
          <strong>Total Price : {this.props.price.toFixed(2)} EUR</strong>
        </p>
        <hr />
        <p>Continue to Check-Out</p>
        <hr />
        <Button btnType="Danger" click={this.props.cancel}>
          CANCEL
        </Button>
        <Button btnType="Success" click={this.props.continue}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
