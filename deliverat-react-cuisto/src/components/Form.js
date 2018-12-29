import React, { Component, Fragment } from "react";

class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    floor: "",
    name: "",
    doorCode: "",
    address: "",
    postalCode: "",
    city: "",
    phone: "",
    message: "",
    cart: this.props.cart
  };

  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    alert("commande validée");
    event.preventDefault();
    this.props.history.push({
      pathname: "/menus",
      state: { cart: [] }
    });

    if (window.confirm) {
      return;
    }
  };

  render() {
    return (
      <Fragment>
        <h4>Adresse de livraison</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="inline">
            <span className="form-element">
              <div className="label">Prénom</div>
              <input
                name="firstName"
                type="text"
                value={this.state.firstName}
                onChange={this.handleChange}
                placeholder="ex: Pierre"
                required
              />
            </span>

            <span className="form-element">
              <div className="label">Nom</div>
              <input
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
                placeholder="ex: Durand"
                required
              />
            </span>
          </div>
          <div className="inline">
            <span className="form-element">
              <div className="label">Etage et Numero D'appartement</div>
              <input
                name="floor"
                type="text"
                value={this.state.floor}
                onChange={this.handleChange}
                placeholder="ex: Appartement n°15"
              />
            </span>

            <span className="form-element">
              <div className="label">Digicode</div>
              <input
                name="doorCode"
                type="text"
                value={this.state.doorCode}
                onChange={this.handleChange}
                placeholder="ex: B123"
              />
            </span>
          </div>
          <div className="inline">
            <span className="form-element">
              <div className="label">Adresse</div>
              <input
                name="address"
                type="text"
                value={this.state.address}
                onChange={this.handleChange}
                placeholder="ex: 100 rue de Rivoli"
                required
              />
              <div className="address-details">
                Inclut le nom de votre rue et le numéro de votre bâtiment
              </div>
            </span>
          </div>
          <div className="inline">
            <span className="form-element">
              <div className="label">Code postal</div>
              <input
                name="postalCode"
                type="text"
                value={this.state.postalCode}
                onChange={this.handleChange}
                placeholder="ex: 75001"
                required
              />
            </span>

            <span className="form-element">
              <div className="label">Ville</div>
              <input
                type="text"
                name="city"
                value={this.state.city}
                onChange={this.handleChange}
                placeholder="ex: Paris"
                required
              />
            </span>
          </div>
          <div className="inline">
            <span className="form-element">
              <div className="label">Numéro de téléphone</div>
              <input
                type="text"
                name="phone"
                value={this.state.phone}
                onChange={this.handleChange}
                placeholder="+33 9 77 55 03 30"
                required
              />
            </span>
          </div>
          <div className="inline">
            <span className="form-element">
              <div className="label">Instructions pour votre livreur?</div>
              <textarea
                type="text"
                name="message"
                value={this.state.message}
                onChange={this.handleChange}
                placeholder="ex: C'est la porte noire près de l'animalerie. Merci d'appeler lorsque vous arrivez."
              />
            </span>
          </div>
          <div className="end-of-form">
            <hr />
            <div className="confirmation-text">
              Votre commande arrivera dans 15-25 minutes.
            </div>
            <input
              type="submit"
              className="confirmation-button"
              value="Confirmer &amp; payer"
            />
          </div>
        </form>
      </Fragment>
    );
  }
}

export default Form;
