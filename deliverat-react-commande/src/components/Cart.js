import React, { Component } from "react";
import { Link } from "react-router-dom";
import numberToString from "./NumberToString.js";

class Cart extends Component {
  render() {
    let lightCart = false;
    if (!this.props.isEditable) {
      lightCart = true;
    }
    if (this.props.cart.length === 0) {
      return (
        <div className="Cart">
          <div className="cart-validation cart-empty empty-cart-validation">
            Valider mon panier
          </div>
          <div className="empty-cart">Votre panier est vide</div>
        </div>
      );
    } else {
      const basketMenus = [];
      let subTotal = 0;
      let total = 0;
      for (let i = 0; i < this.props.cart.length; i++) {
        let unitPrice = this.props.cart[i].price;
        let quantity = this.props.cart[i].quantity;
        let price = unitPrice * quantity;
        subTotal += price;
        total = subTotal + 2.5;

        basketMenus.push(
          <li key={this.props.cart[i].id} className="cart-menu">
            {lightCart ? (
              ""
            ) : (
              <button
                className="cart-button"
                onClick={() => this.props.decrement(this.props.cart[i].id)}
              >
                <i className="fas fa-minus-circle" />
              </button>
            )}
            <div className="cart-quantity">{quantity}</div>
            {lightCart ? (
              ""
            ) : (
              <button
                className="cart-button"
                onClick={() => this.props.increment(this.props.cart[i].id)}
              >
                <i className="fas fa-plus-circle" />
              </button>
            )}
            <div className="cart-menu-title">{this.props.cart[i].title}</div>
            <div className="price">{numberToString(price) + " €"}</div>
          </li>
        );
      }
      return (
        <div className="Cart ">
          <Link
            to={{
              pathname: "/checkout",
              state: {
                cart: this.props.cart,
                restaurant: this.props.restaurant
              }
            }}
          >
            {lightCart ? (
              ""
            ) : (
              <div className="cart-validation cart-full">
                Valider mon panier
              </div>
            )}
          </Link>
          <div className="cart-content">
            <ul>{basketMenus}</ul>
            <div className="subTotal basket-line">
              <span>Sous-total</span>{" "}
              <span>{numberToString(subTotal) + " €"}</span>
            </div>
            <div className="basket-line">
              <span>Frais de Livraison</span> <span>2,50 €</span>
            </div>
            <div className="cart-total basket-line">
              {" "}
              <span>Total</span> <span>{numberToString(total) + " €"}</span>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Cart;
