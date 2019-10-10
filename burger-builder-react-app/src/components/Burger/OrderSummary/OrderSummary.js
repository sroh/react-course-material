import React from "react";
import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

const orderSummary = props => {
  const ingredientsSummary = Object.keys(props.ingredients).map((igKey, index) => {
    return (
      <li key={igKey + index}>
        <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients</p>
      <hr />
      <ul>
          {ingredientsSummary}
      </ul>
      <hr />
      <p><strong>Total Price : {props.price.toFixed(2)}  EUR</strong></p>
      <hr />
      <p>Continue to Check-Out</p>
      <hr />
      <Button btnType="Danger"  click={props.cancel} >CANCEL</Button>
      <Button btnType="Success" click={props.continue} >CONTINUE</Button>
    </Aux>
  );
};

export default orderSummary;
