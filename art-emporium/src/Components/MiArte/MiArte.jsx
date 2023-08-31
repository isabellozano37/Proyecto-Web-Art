import './MiArte.css'
import Logo from "../../img/Logo.png";
import { Link } from "react-router-dom"

export default function MiArte() {
  return (
    <>
      <header>
        <div className="divLogo">
          <img className="header-LogoCompany" src={Logo} alt="Company Logo" />
        </div>

        <div className="divButton">
          <div className="header-button-admin"><h3>Mi Arte</h3></div>
        </div>

        <Link to="/InicialExpo">
          <div>
          <button className="Homes">Home</button>
          </div>
        </Link>
      </header>
      <body>
        <div className="container-card">
          <div class="card">
            <figure>
              <img  />
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
              <img  />
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
              <img  />
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
      </body>
    </>
  );
}