import React, { Component } from "react";

import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Aux/Aux";
// import axios from "../../axios-orders";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    constructor() {
      super();
      this.resInterceptors = axios.interceptors.request.use(request => {
        this.setState({ error: null });
        return request;
      });
      this.reqInterceptors = axios.interceptors.response.use(
        res => res,
        error => {
          this.setState({ error: error });
        }
      );
    }

    state = {
      error: null
    };

    componentWillUnmount() {
        axios.interceptors.request.eject(this.resInterceptors);
        axios.interceptors.response.eject(this.reqInterceptors);
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <Aux>
          <Modal show={this.state.error} modalClosed={this.errorConfirmedError}>
            {this.state.error ? this.state.error.message : null};
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};

export default withErrorHandler;
