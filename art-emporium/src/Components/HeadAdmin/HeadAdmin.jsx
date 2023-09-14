import { Link } from "react-router-dom";
import "../HeadAdmin/HeadAdmin.css";
import Logo from "../../img/Logo.png";

export default function Headeradmin() {
  return (
    <header>
      <div className="divLogo">
        <img className="header-LogoCompany" src={Logo} alt="Company Logo" />
      </div>

      <div className="divButton">
        <button className="header-button-admin">Administrador</button>
      </div>

      <Link to="/" className="header-text">
        <div className="divButton">
          <a className="header-text" href="#">
            Inicio
          </a>
        </div>
      </Link>
    </header>
  );
}
