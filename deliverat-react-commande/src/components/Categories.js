import React, { Component } from "react";
import Cart from "./Cart.js";
import numberToString from "./NumberToString.js";

import LinesEllipsis from "react-lines-ellipsis";

class Catego extends Component {
  renderImage(image) {
    if (image) {
      return (
        <img
          src={`${image}?width=90&height=90&auto=webp&format=jpg&fit=crop&v=1491227802`}
          alt="food"
          className="foodPic"
        />
      );
    }
    return null;
  }
  render() {
    let categoriesList = [];
    let categories = Object.keys(this.props.menu);

    for (let i = 0; i < categories.length; i++) {
      let category = categories[i];

      if (this.props.menu[category].length > 0) {
        categoriesList.push(<h2 key={i}>{category}</h2>);
        const items = [];

        for (let j = 0; j < this.props.menu[category].length; j++) {
          let activeCard = false;
          for (let k = 0; k < this.props.activeFoodCards.length; k++) {
            if (
              this.props.menu[category][j].id === this.props.activeFoodCards[k]
            ) {
              activeCard = true;
            }
          }
          items.push(
            <li
              key={this.props.menu[category][j].id}
              className={(activeCard ? "selected-card " : "") + "foodCard"}
              onClick={() => this.props.addMenu(this.props.menu[category][j])}
            >
              <div className="foodInfos">
                <h3>{this.props.menu[category][j].title}</h3>
                <div className="foodDescription">
                  <LinesEllipsis
                    text={this.props.menu[category][j].description}
                    maxLine="2"
                    ellipsis="..."
                    trimRight
                    basedOn="letters"
                  />
                </div>
                <p className="foodPrice">
                  {numberToString(this.props.menu[category][j].price) + "€"}
                </p>
              </div>

              {this.renderImage(this.props.menu[category][j].picture)}
            </li>
          );
        }
        categoriesList.push(<ul key={`list${i}`}>{items}</ul>);
      }
    }

    return (
      <div className="grey-background">
        <br />
        <div className=" screenSize contents">
          <div className="foodChoice">{categoriesList}</div>
          <Cart
            cart={this.props.cart}
            decrement={this.props.decrement}
            increment={this.props.increment}
            restaurant={this.props.restaurant}
            isEditable={true}
          />
        </div>
      </div>
    );
  }
}

export default Catego;
