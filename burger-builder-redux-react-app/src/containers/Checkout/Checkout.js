import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { Route } from "react-router-dom";
import ContactData from "../Checkout/ContactData/ContactData";
import { connect } from "react-redux";

class Checkout extends Component {
  
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
          ingredients={this.props.ingredients}
          continue={this.checkoutContinueHandler}
          cancel={this.checkoutCancelHandler}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          component={ContactData}
          // render={() => (
          //   <ContactData
          //     ingredients={this.props.ingredients}
          //     price={this.props.totalPrice}
          //     {...this.props}
          //   />
          // )}
        />
      </div>
    );
  };
}

const mapStateToProps = state => {
    return {
      ingredients: state.ingredients
    }
}

export default connect(mapStateToProps)(Checkout);
