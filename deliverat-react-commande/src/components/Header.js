import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header sticky">
        <div className="screenSize">
          <div className="">
            <Link
              to={{
                pathname: "/menus",
                state: {
                  cart: this.props.cart ? this.props.cart : []
                }
              }}
            >
              <img
                src="./Deliveroo_logo.svg.png"
                alt="deliveroo_logo"
                height="50px"
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
