import React, { Component, Fragment } from "react";
import Header from "./Header.js";
import Form from "./Form.js";
import Cart from "./Cart.js";

class Checkout extends Component {
  render() {
    window.scrollTo(0, 0);
    return (
      <Fragment>
        <Header cart={this.props.location.state.cart} />
        <div className="grey-background ">
          <div className="screenSize checkout">
            <div className="white-background form-frame">
              <h1>{this.props.location.state.restaurant.name}</h1>
              <Form
                restaurant={this.props.location.state.restaurant}
                cart={this.props.location.state.cart}
              />
            </div>
            <Cart
              cart={this.props.location.state.cart}
              className="cart-checkout white-background"
              isEditable={false}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Checkout;
