import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.css";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      zipCode: ""
    },
    loading: false
  };

  orderHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      custumer: {
        name: "Sven Rohde",
        phone: "+31616637972",
        address: {
          street: "test-street 1",
          zipCode: "1234KW",
          countru: "NL"
        },
        email: "sroh@example.com"
      },
      diliveryMethod: "fastest"
    };

    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false, purchasing: false });
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({ loading: false, purchasing: false });
      });
  };

  render() {
    let form = (
      <form className={classes.Input}>
        <Input inputtype="input" 
               name="name"
               placeholder="your Name" />
        <Input inputtype="input" 
               name="email"
               placeholder="your Email" />
        <Input inputtype="input" 
               name="street"
               placeholder="your Street" />
        <Input inputtype="input" 
               name="zipCode"
               placeholder="your ZipCode" />
        <Button btnType="Success" click={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );

    if (this.state.loading) {
      form = <Spinner />;
    }

    return (
      <div className={classes.ContactData}>
        <h4>Please enter your contact data here:</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
