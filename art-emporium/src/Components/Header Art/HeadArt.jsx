import './HeadArt.css'
import Logo from "../../img/Logo.png";

export default function HeaderArt (){
    return (
      <>
      <header className="headerArt">
      
      <div className="divLogo">
        <img className="header-LogoCompany" src={Logo} alt="Company Logo" />
      </div>

      <div className="divButton">
      <button className="Arte">Arte</button>
      <button className="Home">Home</button>
      <img className="Carritocompra" src = "https://res.cloudinary.com/dhme3c8ll/image/upload/v1692950303/pngegg_snkldy.png"></img>
      </div>

      </header>
      </>
    );
  };