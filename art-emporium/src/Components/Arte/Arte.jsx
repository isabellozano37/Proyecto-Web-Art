import "../Arte/Arte.css";
import React, { useState } from "react";
import { Link } from "react-router-dom"


export default function ArteMain() {
    const [optionsVisiblePintura, setOptionsVisiblePintura] = useState(false);
    const [optionsVisibleEscultura, setOptionsVisibleEscultura] = useState(false);

    const toggleOptionsPintura = () => {
        setOptionsVisiblePintura(!optionsVisiblePintura);
        setOptionsVisibleEscultura(false); 
      };
      
      const toggleOptionsEscultura = () => {
        setOptionsVisibleEscultura(!optionsVisibleEscultura);
        setOptionsVisiblePintura(false); 
      };

    return (
      <body>

        <div className="div-arte-Button">

        <button className="body-button" onClick={toggleOptionsPintura}>Pintura</button>
        {optionsVisiblePintura && (
        <div className="button-pintura-Escultura btn-pintura">
          <Link to="/OleoArte">
          <div className="option" onClick={() => handleOptionClickPintura('Oleo')}>Óleo</div>
          </Link>
          <Link to="/AcuarelaArte">
          <div className="option" onClick={() => handleOptionClickPintura('Acuarela')}>Acuarela</div>
          </Link>
        </div>
        )}

        <button className="body-button" onClick={toggleOptionsEscultura}>Escultura</button>
        {optionsVisibleEscultura && (
        <div className="button-pintura-Escultura btn-escultura">
          <Link to="/BustosArte">
           <div className="option" onClick={() => handleOptionClickEscultura('Bustos')}>Bustos</div>
          </Link>
          <Link to="/CeramicaArte">
          <div className="option" onClick={() => handleOptionClickEscultura('Cerámica')}>Cerámica</div>
          </Link> 
        </div>
        )}
        </div>
  
      </body>
    );
  }