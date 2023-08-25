import "./HeaderBought.css";

export default function Headermain() {
   
  return (
    <header>
      
      <div className="divLogo">
        <img className="header-LogoCompany" src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1692950303/Logo-Arte_haqmng.png" alt="Company Logo" />
      </div>

      <div className="divButton">
      <button className="header-button header-button-Registrar">Subir arte</button>
      <button className="header-button header-button-IniciarSeion">Mi arte</button>
      </div>

    </header>
  );
}