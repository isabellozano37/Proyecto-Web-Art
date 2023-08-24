import "../Header Main/HeadMain.css";
import React, { useState } from "react";
import Logo from "../../img/Logo.png";

function ButtonOptions() {
  const [optionsVisible, setOptionsVisible] = useState(false);

  const toggleOptions = () => {
    setOptionsVisible(!optionsVisible);
  };

  const handleOptionClick = (option) => {
    alert("Seleccionaste " + option + ".");
    setOptionsVisible(false);
  };

  return (
    <div>
      <button className="header-button" onClick={toggleOptions}>Registrarse</button>
      {optionsVisible && (
        <div className="header-button-options">
          <div className="option" onClick={() => handleOptionClick('Nuevo exponente')}>Nuevo exponente</div>
          <div className="option" onClick={() => handleOptionClick('Nuevo comprador')}>Nuevo comprador</div>
        </div>
      )}
    </div>
    
  );
}

export default function Headermain() {

  const iniciarSesion = () => {
    alert("Haz hecho clic en Iniciar sesión");
  };
   
  return (
    <header>
      
      <div className="divLogo">
        <img className="header-LogoCompany" src={Logo} alt="Company Logo" />
      </div>

      <div className="divButton">
      <ButtonOptions />
      <button className="header-button" onClick={iniciarSesion}>Iniciar Sesión</button>
      </div>

    </header>
  );
}
