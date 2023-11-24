import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Components/Header.css";
import aba from "../Assets/img/Aba.jpg";

class Header extends Component {
  state = {
    email: "",
    password: "",
    errors: {},
  };

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

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
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={this.state.email}
              onChange={this.handleChange}
            />
            {errors.email && (
              <span className="text-danger">{errors.email}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              name="password"
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
        </form>
      </div>
    );
  }
}

export default Header;
