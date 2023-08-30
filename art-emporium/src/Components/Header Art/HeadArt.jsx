import { Link } from "react-router-dom";
import "./HeadArt.css";
import Logo from "../../img/Logo.png";

export default function HeaderArt() {
  return (
    <>
      <header className="headerArt">
        <div className="divLogo">
          <img className="header-LogoCompany" src={Logo} alt="Company Logo" />
        </div>

        <div className="divButton">
          <button className="Arte">Arte</button>
          <Link to="/">
            <button className="Home">Home</button>
          </Link>
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
