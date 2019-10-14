import React, { useState, useEffect } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

const Ingredients = () => {
  const [userIngredients, setUserIngredients] = useState([]);

  // executed after and for every rerendering cycle
  useEffect(() => {
    fetch('https://react-hooks-app-66ffe.firebaseio.com/ingredients.json').then(res => {
      return res.json();
    }).then(resData => {
      const loadedIngredients = [];
      for(let key in resData){
        loadedIngredients.push({
          id: key,
          title: resData[key].title,
          amount: resData[key].amount
        });
      }
      setUserIngredients(loadedIngredients);
    }).catch(error => {
        console.log(error);
    })
  }, []);

  useEffect(() => {
    console.log('[Ingredients.js] rerendering !!');
  });

  const filteredIngredientsHandler = (filteredIngredients) => {
      setUserIngredients(filteredIngredients);
  }

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
        <Search onLoadIngredients={filteredIngredientsHandler}/>
        {/* Need to add list here! */}
      </section>
    </div>
  );
};

export default Ingredients;
