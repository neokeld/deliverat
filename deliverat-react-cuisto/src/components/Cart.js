import React, { Component } from "react";
import numberToString from "./NumberToString.js";

class Cart extends Component {
  render() {
    if (this.props.cart.length === 0) {
      return (
        <div className="Cart">
          <div className="empty-cart"><p>Il n'y a pas de commandes en court.</p></div>
        </div>
      );
    } else {
      const basketMenus = [];
      let subTotal = 0;
      let total = 0;
	  const frais = 2.5;
      for (let i = 0; i < this.props.cart.length; i++) {
        let unitPrice = this.props.cart[i].price;
        let quantity = this.props.cart[i].quantity;
        let price = unitPrice * quantity;
        subTotal += price;
        total = subTotal + frais;

        basketMenus.push(
          <li key={i} className="cart-menu">
            <div className="cart-quantity"><b>{quantity}</b></div>
            <div className="cart-menu-title">{this.props.cart[i].title}</div>
            <div className="price">{numberToString(price) + " €"}</div>
          </li>
        );
      }
      return (
        <div className="Cart ">
          <div className="cart-content">
		    <p>Vos clients demandent :</p>
            <ul>{basketMenus}</ul>
            <div className="subTotal basket-line">
              <span>Sous-total</span>{" "}
              <span>{numberToString(subTotal) + " €"}</span>
            </div>
            <div className="basket-line">
              <span>Frais de Livraison</span> <span>{numberToString(frais) + " €"}</span>
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
