import { Link } from "react-router-dom";
import "./HeadExponent.css";
import Logo from "../../img/Logo.png";

export default function HeaderExponent() {
  return (
    <>
      <header className="header">
        <div className="div-logo">
          <img className="header-logoCompany" src={Logo} alt="Company Logo" />
        </div>

        <div className="div-button">
          <h1 className="Nombre">Hola@Nombre</h1>
          <button className="arts">Subir Arte</button>
          <button className="arts">Mi Arte</button>
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
    </>
  );
}
