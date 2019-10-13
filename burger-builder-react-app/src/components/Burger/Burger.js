import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
// pass properties trough to sub components
import { withRouter } from "react-router-dom";
import classes from "./Burger.css";

const burger = props => {
  
  // console.log(props);
  // transform to Array from Object

  const transformedIngredientsArray = Object.keys(props.ingredients);

  console.log(transformedIngredientsArray);

  let transformedIngredients = transformedIngredientsArray
    .filter(igKey => igKey !== "")
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = (
      <p>Please start adding ingredients to your custom made Burger !</p>
    );
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default withRouter(burger);
