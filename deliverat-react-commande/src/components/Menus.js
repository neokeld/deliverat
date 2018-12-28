import React, { Component } from "react";
import axios from "axios";
import Header from "./Header.js";
import RestDescription from "./RestDescription.js";
import Catego from "./Categories.js";

class Menus extends Component {
  state = {
    restaurant: {},
    menus: {},
    cart: this.props.location.state ? this.props.location.state.cart : [],
    activeFoodCards: [],
    isLoading: true
  };

  decrement = id => {
    const newCart = [...this.state.cart];
    const newActiveFoodCards = [...this.state.activeFoodCards];

    for (let i = 0; i < newCart.length; i++) {
      if (newCart[i].id === id && newCart[i].quantity > 0) {
        if (newCart[i].quantity > 1) {
          newCart[i].quantity--;
        } else {
          newCart.splice(i, 1);
          newActiveFoodCards.splice(i, 1);
        }
        break;
      }
    }

    this.setState({
      cart: newCart,
      activeFoodCards: newActiveFoodCards
    });
  };

  increment = id => {
    const newCart = [...this.state.cart];

    for (let i = 0; i < newCart.length; i++) {
      if (newCart[i].id === id) {
        newCart[i].quantity++;
        break;
      }
    }

    this.setState({
      cart: newCart
    });
  };

  addMenu = menu => {
    const newCart = [...this.state.cart];
    const newActiveFoodCards = [...this.state.activeFoodCards];

    let menuFound = false;
    for (let i = 0; i < newCart.length; i++) {
      if (newCart[i].id === menu.id) {
        menuFound = true;
        newCart[i].quantity++;
        break;
      }
    }

    if (menuFound === false) {
      newCart.push({
        id: menu.id,
        title: menu.title,
        quantity: 1,
        price: menu.price
      });
      newActiveFoodCards.push(menu.id);
    }
    this.setState({
      cart: newCart,
      activeFoodCards: newActiveFoodCards
    });
  };

  render() {
    if (!this.state.isLoading) {
      return (
        <div>
          <Header cart={this.state.cart} />
          <div>
            <RestDescription restaurant={this.state.restaurant} />
            <Catego
              restaurant={this.state.restaurant}
              menu={this.state.menus}
              cart={this.state.cart}
              activeFoodCards={this.state.activeFoodCards}
              decrement={this.decrement}
              increment={this.increment}
              addMenu={this.addMenu}
            />
          </div>
        </div>
      );
    } else {
      return <div>Page is loading...</div>;
    }
  }

  componentDidMount() {
    axios
      .get(
        "http://localhost:4000/mock"
      )
      .then(response =>
        this.setState({
          restaurant: response.data.restaurant,
          menus: response.data.menu,
          isLoading: false
        })
      );
  }
}

export default Menus;
