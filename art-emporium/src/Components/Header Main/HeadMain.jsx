import "../Header Main/HeadMain.css";
import Logo from "../../img/Logo.png";

export default function Headermain() {
   
  return (
    <header>
      
      <div className="divLogo">
        <img className="header-LogoCompany" src={Logo} alt="Company Logo" />
      </div>

      <div className="divButton">
      <button className="header-button header-button-Registrar">Registrarse</button>
      <button className="header-button header-button-IniciarSeion">Iniciar Sesión</button>
      </div>

    </header>
  );
}
