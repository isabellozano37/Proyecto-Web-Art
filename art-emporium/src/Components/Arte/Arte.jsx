import "../Arte/Arte.css";
import React, { useState } from "react";



export default function ArteMain() {
    const [optionsVisiblePintura, setOptionsVisiblePintura] = useState(false);
    const [optionsVisibleEscultura, setOptionsVisibleEscultura] = useState(false);

    const toggleOptionsPintura = () => {
        setOptionsVisiblePintura(!optionsVisiblePintura);
        setOptionsVisibleEscultura(false); 
      };

      const handleOptionClickPintura = (option) => {
        alert("Seleccionaste " + option + ".");
        setOptionsVisiblePintura(false);
      };


      const toggleOptionsEscultura = () => {
        setOptionsVisibleEscultura(!optionsVisibleEscultura);
        setOptionsVisiblePintura(false); 
      };
     
      const handleOptionClickEscultura = (option) => {
        alert("Seleccionaste " + option + ".");
        setOptionsVisibleEscultura(false);
      };

    return (
      <body>

        <div className="div-arte-Button">

        <button className="body-button" onClick={toggleOptionsPintura}>Pintura</button>
        {optionsVisiblePintura && (
        <div className="button-pintura-Escultura btn-pintura">
          <div className="option" onClick={() => handleOptionClickPintura('Pintura 1')}>Pintura 1</div>
          <div className="option" onClick={() => handleOptionClickPintura('Pintura 2')}>Pintura 2</div>
        </div>
        )}

        <button className="body-button" onClick={toggleOptionsEscultura}>Escultura</button>
        {optionsVisibleEscultura && (
        <div className="button-pintura-Escultura btn-escultura">
          <div className="option" onClick={() => handleOptionClickEscultura('Escultura 1')}>Escultura 1</div>
          <div className="option" onClick={() => handleOptionClickEscultura('Escultura 2')}>Escultura 2</div>
        </div>
        )}
        </div>
  
      </body>
    );
  }