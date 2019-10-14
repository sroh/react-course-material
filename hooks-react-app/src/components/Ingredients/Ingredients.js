import React, { useState } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

const Ingredients = () => {
  const [userIngredients, setUserIngredients] = useState([]);

  const addIngredinetHandler = ingredient => {

    fetch('https://react-hooks-app-66ffe.firebaseio.com/ingredients.json', {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: {'Content-Type': 'application/json'}
    }).then(res => {
      return res.json();
    }).then(resData => {
      setUserIngredients(prevIngredients => [
        ...prevIngredients,
        { id: resData.name, ...ingredient }
      ]);
    }).catch(error => {
        console.log(error);
    })
  };

  const removeIngredientHandler = id => {
    setUserIngredients(prevIngredients => [
      ...prevIngredients.filter(ingredient => {
        if (ingredient.id === id) {
          return false;
        }
        return true;
      })
    ]);
  };

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredinetHandler} />
      <IngredientList
        ingredients={userIngredients}
        onRemoveItem={removeIngredientHandler}
      />
      <section>
        <Search />
        {/* Need to add list here! */}
      </section>
    </div>
  );
};

export default Ingredients;
