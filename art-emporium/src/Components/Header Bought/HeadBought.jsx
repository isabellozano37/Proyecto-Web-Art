import { Link } from "react-router-dom";
import "./HeaderBought.css";

export default function HeaderBought() {
  return (
    <header>
      <div className="divLogo">
        <img
          className="header-LogoCompany"
          src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1692950303/Logo-Arte_haqmng.png"
          alt="Company Logo"
        />
      </div>

      <div className="div-button">
        <h1 className="Nombre">Hola@Nombre</h1>
        <Link className="Carritocompra" to="/PaginaCompra">
          <button className="Carritocompra">
            <img
              className="Carritocompra"
              src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1692950303/pngegg_snkldy.png"
            />
          </button>
        </Link>
      </div>
    </header>
  );
}
