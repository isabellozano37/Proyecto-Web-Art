import './HeadExponent.css'
import Logo from "../../img/Logo.png";

 export default function Header (){
    return (
      <>
      <header className="header">
      
      <div className="divLogo">
        <img className="header-LogoCompany" src={Logo} alt="Company Logo" />
      </div>

      <div className="divButton">
       <h1 className='Nombre'>Hola@Nombre</h1> 
      <button className="arte">Subir Arte</button>
      <button className="arte">Mi Arte</button>
      <img className="CarritoCompra" src = "https://res.cloudinary.com/dhme3c8ll/image/upload/v1692950303/pngegg_snkldy.png"></img>
      </div>

      </header>
      </>
    );
  };