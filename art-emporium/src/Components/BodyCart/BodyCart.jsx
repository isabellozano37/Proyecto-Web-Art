import { Link } from "react-router-dom";
import "./BodyCart.css";
import Logo from "../../img/Logo.png";

export default function BodyCart() {
  return (
    <>
      <header>
        <div className="divLogo">
          <img className="header-LogoCompany" src={Logo} alt="Company Logo" />
        </div>

        <div className="divButton">
          <button className="header-button-admin">Administrador</button>
        </div>

        <div className="divButton">
          <Link to="/">
            <button className="Home">Home</button>
          </Link>
        </div>

        <div className="divButton">
          <Link to="/PaginaArte">
            <button className="Home">Arte</button>
          </Link>
        </div>
      </header>
      <body>
        <div className="container-card">
          <div class="card">
            <figure>
              <img src="https://mymodernmet.com/wp/wp-content/uploads/2021/05/fine-art-simpsons-fb-thumbnail.jpg" />
            </figure>
            <div class="contenido-card">
              <h3>BLA BLA BLA</h3>
              <p>mamawevaso</p>
              <img
                id="delete-logo"
                src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1693216206/1200px-Delete-button.svg_kcuxjd.png"
              />
            </div>
          </div>
          <div class="card">
            <figure>
              <img src="https://frinkiac.com/img/S10E19/301750.jpg" />
            </figure>
            <div class="contenido-card">
              <h3>BLI BLI BLI</h3>
              <p>mamawevaso</p>
              <img
                id="delete-logo"
                src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1693216206/1200px-Delete-button.svg_kcuxjd.png"
              />
            </div>
          </div>
          <div class="card">
            <figure>
              <img src="https://mj2artesanos.es/487-large_default/marco-simpsons.jpg" />
            </figure>
            <div class="contenido-card">
              <h3>BLI BLI BLI</h3>
              <p>mamawevaso</p>
              <img
                id="delete-logo"
                src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1693216206/1200px-Delete-button.svg_kcuxjd.png"
              />
            </div>
          </div>
        </div>
        <div className="confirmation-container">
          <p> TOTAL: 999$</p>
          <button>Comprar</button>
        </div>
      </body>
    </>
  );
}
