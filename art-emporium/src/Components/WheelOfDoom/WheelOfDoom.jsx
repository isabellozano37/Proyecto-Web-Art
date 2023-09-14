import ArtCustomerHandler from "../../handler/ArtCustomerHandler";
import "../WheelOfDoom/WheelOfDoom.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function WheelOfDoom() {
  const [artCustomer, setartCustomer] = useState([]);
  const [editedArtCustomer, setEditedArtCustomer] = useState(null);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);

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
        Foto: "https://cdn.pixabay.com/photo/2016/04/01/09/34/american-1299445_640.png",
        Description: "Escultura 2",
        Precio: "2000",
        Tipo: "Escultura",
      };

      // Realizar la solicitud POST para agregar el elemento a la base de datos (API)
      const response = await axios.post(
        "http://localhost:3000/ArtCustomer",
        newArtCustomer
      );

      // Obtener el nuevo elemento con el ID generado automáticamente por el servidor
      const addedArtCustomer = response.data;

      // Actualizar el estado local para reflejar los cambios
      setartCustomer([...artCustomer, addedArtCustomer]);
    } catch (error) {
      console.error("Error al agregar:", error);
    }
  };

  const handleEdit = (item) => {
    setEditedArtCustomer(item);
    setIsEditModalVisible(true);
  };

  const handleUpdate = async () => {
    const confirmed = window.confirm('¿Estás seguro de que deseas guardar los cambios?');
    if (confirmed) {
      try {
        // Realizar la solicitud PUT para actualizar el elemento en la base de datos (API)
        await axios.put(`http://localhost:3000/ArtCustomer/${editedArtCustomer.id}`, editedArtCustomer);
  
        // Actualizar el estado local para reflejar los cambios
        const updatedArtCustomer = artCustomer.map((item) => {
          if (item.id === editedArtCustomer.id) {
            return editedArtCustomer;
          }
          return item;
        });
        setartCustomer(updatedArtCustomer);
  
        // Ocultar el formulario de edición
        setIsEditModalVisible(false);
      } catch (error) {
        console.error('Error al actualizar:', error);
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/ArtCustomer/${id}`);

      const updatedArtCustomer = artCustomer.filter((item) => item.id !== id);
      setartCustomer(updatedArtCustomer);
    } catch (error) {
      console.error("Error al eliminar:", error);
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
                      <img
                        src={item.Foto}
                        alt="Imagen de arte"
                        width={250}
                        height={315}
                      />
                    </div>
                    <h2>{item.Description}</h2>
                    <p>
                      <strong>Precio:</strong> {item.Precio}
                    </p>
                    <p>
                      <strong>Tipo:</strong> {item.Tipo}
                    </p>
                    <div className="button-container">
                      <button
                        className="delete-button"
                        onClick={() => handleDelete(item.id)}
                      >
                        <img
                          width={30}
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLsJK7RvQtvRfpAW04KrAo7wBvW_7W9qhUqIgC8fYgtfjrSLRC5aXDjuwXRirrWxllkak&usqp=CAU"
                          alt="Eliminar"
                        />
                      </button>
                      <button
                        className="add-button"
                        onClick={() => handleEdit(item)}
                      >
                        <img
                          width={30}
                          src="https://cdn-icons-png.flaticon.com/512/1350/1350731.png"
                          alt="Modificar"
                        />
                      </button>
                      <button className="add-button" onClick={handleAdd}>
                        <img
                          width={30}
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfj4CtfwLAx0n7ZfQWG08dsI7B6tRiYlabiUteYJU&s"
                          alt="Agregar"
                        />
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          )
        )}
      </div>

      {isEditModalVisible && (
        <div className="edit-form">
          <h2>Editar arte</h2>
          <input
            type="text"
            placeholder="Descripción"
            value={editedArtCustomer.Description}
            onChange={(e) =>
              setEditedArtCustomer({
                ...editedArtCustomer,
                Description: e.target.value
              })
            }
          />
          <input
            type="text"
            placeholder="Precio"
            value={editedArtCustomer.Precio}
            onChange={(e) =>
              setEditedArtCustomer({
                ...editedArtCustomer,
                Precio: e.target.value
              })
            }
          />
          <input
            type="text"
            placeholder="Tipo"
            value={editedArtCustomer.Tipo}
            onChange={(e) =>
              setEditedArtCustomer({
                ...editedArtCustomer,
                Tipo: e.target.value
              })
            }
          />
          <div className="form-buttons">
            <button className="save-button" onClick={handleUpdate}>Guardar</button>
            <button className="cancel-button" onClick={() => setIsEditModalVisible(false)}>Cancelar</button>
          </div>
        </div>
      )}
    </main>
  );
}
