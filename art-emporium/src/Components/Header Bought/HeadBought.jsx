import "./HeaderBought.css";

export default function Headermain() {
   
  return (
    <header>
      
      <div className="divLogo">
        <img className="header-LogoCompany" src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1692950303/Logo-Arte_haqmng.png" alt="Company Logo" />
      </div>

      <div className="divButton">
      <button class="active-header-button">Carrito de compra</button>
      <button class="header-button">Home</button>
      <button class="header-button">Arte</button>
      </div>

    </header>
  );
}