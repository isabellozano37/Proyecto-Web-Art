import ArtCustomerHandler from "../../handler/ArtCustomerHandler";
import "../WheelOfDoom/WheelOfDoom.css";
import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function WheelOfDoom() {
  const [artCustomer, setartCustomer] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await ArtCustomerHandler.loadArtCustomer();
    setartCustomer(data);
  };




  const handleAdd = async () => {
    try {
      // Datos del nuevo elemento a agregar (reemplaza con los valores adecuados)
      const newArtCustomer = {
        Foto: 'https://res.cloudinary.com/dhme3c8ll/image/upload/v1693214972/twitter_5968958_wt6tbw.png',
        Description: 'Pintura 2',
        Precio: '500',
        Tipo: 'Pintura',
      };
  
      // Realizar la solicitud POST para agregar el elemento a la base de datos (API)
      const response = await axios.post('http://localhost:3000/ArtCustomer', newArtCustomer);
  
      // Obtener el nuevo elemento con el ID generado automáticamente por el servidor
      const addedArtCustomer = response.data;
  
      // Actualizar el estado local para reflejar los cambios
      setartCustomer([...artCustomer, addedArtCustomer]);
    } catch (error) {
      console.error('Error al agregar:', error);
    }
  };

  const handleDelete = async (id) => {
    try {

      await axios.delete(`http://localhost:3000/ArtCustomer/${id}`);
  
      const updatedArtCustomer = artCustomer.filter((item) => item.id !== id);
      setartCustomer(updatedArtCustomer);
    } catch (error) {
      console.error('Error al eliminar:', error);
    }
  };

  return (
    <main id="background">
      <div id="art-customer-container">
        {Array.from({ length: Math.ceil(artCustomer.length / 5) }).map(
          (_, rowIndex) => (
            <div key={rowIndex} className="art-customer-group">
              {artCustomer
                .slice(rowIndex * 5, (rowIndex + 1) * 5)
                .map((item) => (
                  <div key={item.id} className="art-customer">
                    <div>
                    <img src={item.Foto} alt="Imagen de arte" width={250}/>
                    </div>
                    <h2>{item.Description}</h2>
                    <p>Precio: {item.Precio}</p>
                    <p>Tipo: {item.Tipo}</p>
                    <div className="button-container">
                    <button className="delete-button" onClick={() => handleDelete(item.id)}>
                        <img width={30} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLsJK7RvQtvRfpAW04KrAo7wBvW_7W9qhUqIgC8fYgtfjrSLRC5aXDjuwXRirrWxllkak&usqp=CAU" alt="Eliminar" />
                    </button>
                    <button className="add-button" onClick={handleAdd}>
                    <img width={30} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfj4CtfwLAx0n7ZfQWG08dsI7B6tRiYlabiUteYJU&s" alt="Agregar" />
                    </button>
                    </div>
                  </div>
                ))}
            </div>
          )
        )}
      </div>
    </main>
  );
}
