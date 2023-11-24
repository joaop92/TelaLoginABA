import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Components/Header.css";
import { faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
  state = {
    email: "",
    password: "",
    errors: {},
  };

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const faEnvelope = require("@fortawesome/free-solid-svg-icons").faEnvelope;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    if (this.validateForm()) {
      // Envio os dados do formulário para um serviço de autenticação.
    } else {
      // Exibe os erros de validação.
    }
  };

  validateForm = () => {
    const { email, password } = this.state;

    const errors = {};

    if (!email) {
      errors.email = "O campo de e-mail é obrigatório.";
    } else if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      errors.email = "O e-mail é inválido.";
    }

    if (!password) {
      errors.password = "O campo de senha é obrigatório.";
    } else if (password.length < 8) {
      errors.password = "A senha deve ter pelo menos 8 caracteres.";
    }

    this.setState({
      errors,
    });

    return !Object.keys(errors).length;
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="login">
        <h1>Bem Vindo (a)!</h1>
        <div className="acessar-pelo-email">
          <a href="#" className="acessar-pelo-email-link">
            <FontAwesomeIcon icon={faEnvelope} />
            Acessar pelo e-mail
          </a>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">E-mail (Obrigatório):</label>
            <input
              type="email"
              name="email"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.handleChange}
            />
            {errors.email && (
              <span className="text-danger">{errors.email}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha (Obrigatório):</label>
            <input
              type="password"
              name="password"
              required
              className="form-control"
              value={this.state.password}
              onChange={this.handleChange}
            />
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            Acessar
          </button>
          <div className="lembrar-senha">
            <FontAwesomeIcon icon={faLockOpen} />
            <span></span>
          </div>
          <button type="submit" className="btn btn-primary">
            Lembrar senha
          </button>
          <div className="equipe-pedagogica">
            <a href="#">Equipe pedagógica</a>
          </div>
        </form>
      </div>
    );
  }
}

export default Header;
