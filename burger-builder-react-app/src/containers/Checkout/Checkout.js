import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { Route } from "react-router-dom";
import ContactData from "../Checkout/ContactData/ContactData";

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 1,
      meat: 1
    },
    price: 0
  };

  componentWillMount() {
    // console.log(this.props.location.search);
    let test = decodeURIComponent(this.props.location.search).substr(
      1,
      this.props.location.search.length - 1
    );
    // console.log(test);
    const queryChunks = test.split("&");
    // console.log(queryChunks);
    const ingredients = { ...this.state.ingredients };
    let price = 0;
    for (let param of queryChunks) {
      //   console.log(param);
      let chunks = param.split("=");
      if (chunks[0] === "price") {
        price = +(+chunks[1]);
      } else {
        ingredients[chunks[0]] = +chunks[1];
      }
    }
    // console.log(ingredients);
    this.setState({ ingredients: ingredients, price: price });
  }

  checkoutCancelHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinueHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render = () => {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          continue={this.checkoutContinueHandler}
          cancel={this.checkoutCancelHandler}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          // component={ContactData}
          render={() => (
            <ContactData
              ingredients={this.state.ingredients}
              price={this.state.price}
              {...this.props}
            />
          )}
        />
      </div>
    );
  };
}

export default Checkout;
