import React, { useState } from "react";
import { Link } from "react-router-dom"
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
    <>
      <div className="ButtonArte">
        <select value={selectedProduct} onChange={handleProductChange}>
          <option value="">Arte</option>
          <option className="ButtonArte-options" value="Pintura">
            Pintura
          </option>
          <option className="ButtonArte-options" value="Escultura">
            Escultura
          </option>
        </select>
      </div>
      <div className="ContainerForm">
        {selectedProduct && (
          <div>
            <div>
              <h2>{selectedProduct}</h2>
            </div>
            <div className="InsertArt">
              <form onSubmit={handleFormSubmit}>
                <div className="ContainerAll">
                  <div className="ImgContainer">
                    <label>
                      Imagen de la Obra:
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                      {productDetails.image && (
                        <img className="ImagenArt"
                          src={productDetails.image}
                          alt="Vista previa de la imagen"
                        />
                      )}
                    </label>
                  </div>
                  <div className="Description">
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
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
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
        <Link to="/InicialExpo">
          <div>
          <button className="Homes">Inicio</button>
          </div>
        </Link>
        
      </header>
      <body>
        <div className="ButtonArte">
          <FormularioSubirArte />
        </div>
      </body>
    </>
  );
}
