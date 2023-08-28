import React, { useState } from "react";
import "./SubirArte.css";
import Logo from "../../img/Logo.png";

function FormularioSubirArte() {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [productDetails, setProductDetails] = useState({
    image: null,
    description: "",
    price: "",
  });

  const handleProductChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedProduct(selectedOption);
    setProductDetails({
      image: null,
      description: "",
      price: "",
    });
  };

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    if (imageFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setProductDetails({ ...productDetails, image: reader.result });
      };
      reader.readAsDataURL(imageFile);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Detalles del producto:", productDetails);
  };

  return (
    <div className="ButtonArte">
      <select value={selectedProduct} onChange={handleProductChange}>
        <option value="">Arte</option>
        <option className="ButtonArte-options" value="Pintura">Pintura</option>
        <option className="ButtonArte-options" value="Escultura">Escultura</option>
      </select>

      {selectedProduct && (
        <div className="InsertArt">
          <div>
          <h2>{selectedProduct}</h2>
          </div>
          <div>
          <form onSubmit={handleFormSubmit}>
            <label>
              Imagen:
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
              {productDetails.image && (
                <img
                  src={productDetails.image}
                  alt="Vista previa de la imagen"
                />
              )}
            </label>
            <label>
              Descripción:
              <textarea
                value={productDetails.description}
                onChange={(e) =>
                  setProductDetails({
                    ...productDetails,
                    description: e.target.value,
                  })
                }
              />
            </label>
            <label>
              Precio:
              <input
                type="number"
                step="0.01"
                min="0"
                value={productDetails.price}
                onChange={(e) =>
                  setProductDetails({
                    ...productDetails,
                    price: e.target.value,
                  })
                }
              />
            </label>
            
            <button type="submit">Enviar</button>
          </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default function SubirArte() {
  return (
    <>
      <header className="headArt">
        <div className="Logo">
          <img className="header-Logo" src={Logo} alt="Company Logo" />
        </div>
        <div className="SubirArte">Subir Arte</div>
        <div>
          <button className="Homes">Home</button>
        </div>
      </header>
      <body>
        <div className="ButtonArte">
          <FormularioSubirArte />
        </div>
      </body>
    </>
  );
}
