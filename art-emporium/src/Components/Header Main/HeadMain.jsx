import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Header Main/HeadMain.css";
import Logo from "../../img/Logo.png";

function ButtonOptions() {
  const [optionsVisible, setOptionsVisible] = useState(false);

  const toggleOptions = () => {
    setOptionsVisible(!optionsVisible);
  };

  return (
    <div>
      <button className="header-button" onClick={toggleOptions}>
        Registrarse
      </button>
      {optionsVisible && (
        <div className="header-button-options">
          <Link to="/PaginaExpo" className="option">
            <div
              className="option"
              onClick={() => handleOptionClick("Nuevo exponente")}
            >
              Nuevo exponente
            </div>
          </Link>
          <Link to="/PaginaBou" className="option">
            <div
              className="option"
              onClick={() => handleOptionClick("Nuevo comprador")}
            >
              Nuevo comprador
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}

function LoginButton() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      alert(
        `Iniciando sesión con Usuario: ${username} y Contraseña: ${password}`
      );
    } else {
      alert("Por favor ingresa el usuario y la contraseña.");
    }
  };
  return (
    <div>
      {showLoginForm ? (
        <form>
          <input
            className="Confirmar"
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="Confirmar"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={handleLogin} className="Confirmar">
            Confirmar
          </button>
        </form>
      ) : (
        <button onClick={toggleLoginForm} className="header-button">
          Iniciar Sesión
        </button>
      )}
    </div>
  );
}

export default function Headermain() {
  return (
    <header>
      <Link to="/PaginaAdmi">
        <div className="divLogo">
          <img className="header-LogoCompany" src={Logo} alt="Company Logo" />
        </div>
      </Link>

      <div className="divButton">
        <ButtonOptions />

        <LoginButton />
      </div>
    </header>
  );
}
