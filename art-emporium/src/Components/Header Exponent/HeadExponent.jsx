import './HeadExponent.css'
import Logo from "../../img/Logo.png";

 export default function HeaderExponent (){
    return (
      <>
      <header className="header">
      
      <div className="div-logo">
        <img className="header-logoCompany" src={Logo} alt="Company Logo" />
      </div>

      <div className="div-button">
       <h1 className='Nombre'>Hola@Nombre</h1> 
      <button className="arts">Subir Arte</button>
      <button className="arts">Mi Arte</button>
      <img className="Carrito-Compra" src = "https://res.cloudinary.com/dhme3c8ll/image/upload/v1692950303/pngegg_snkldy.png"></img>
      </div>

      </header>
      </>
    );
  };

