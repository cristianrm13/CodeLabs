import React from 'react';
import { Link } from "react-router-dom";
import "../../assets/styles/Login.css";
import Pollito from "../../assets/images/Pollitos.jpg"

function Login() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(
        'ETSELENT'
        );
  };

  return (
    <div className="login-t">
      <form className="form" onSubmit={handleFormSubmit}>
        <p className="form-title">Bienvenido a CodeLabs</p>
        <div className="input-container">
          <input type="email" placeholder="Ingresar Correo" />
        </div>
        <div className="input-container">
          <input type="password" placeholder="Ingresar Contraseña" />
        </div>
        <Link to="/dashboard">
          <button type="submit" className="submit">
            Ingresar
          </button>
        </Link>

        <p className="signup-link">
          Tienes problemas?
          <a href=""> Ayuda</a>
        </p>
      </form>

      <div className="Image">
        <img src={Pollito} alt="pollitos" />
      </div>
    </div>
  );
}

export default Login;
