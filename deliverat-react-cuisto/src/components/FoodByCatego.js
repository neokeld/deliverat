import React, { Component } from "react";
import LinesEllipsis from "react-lines-ellipsis";

class FoodByCatego extends Component {
  renderPicture(i, catego, menu) {
    if (menu[catego][i].picture) {
      return (
        <img src={menu[catego][i].picture} alt="food" className="foodPic" />
      );
    }
  }

  render() {
    let FoodCards = [];
    let catego = this.props.catego;
    let menu = this.props.menu;

    for (let i = 0; i < menu[catego].length; i++) {
      FoodCards.push(
        <li key={menu[catego][i].id} className="foodCard">
          <div className="foodInfos">
            <h3>{menu[catego][i].title}</h3>
            <div className="foodDescription">
              {/*<p>{menu[catego][i].description}</p>*/}
              <LinesEllipsis
                text={menu[catego][i].description}
                maxLine="2"
                ellipsis="..."
                trimRight
                basedOn="letters"
              />
            </div>
            <p className="foodPrice">{menu[catego][i].price + " €"}</p>
          </div>
          {this.renderPicture(i, catego, menu)}
        </li>
      );
    }

    return <ul>{FoodCards}</ul>;
  }
}

export default FoodByCatego;
