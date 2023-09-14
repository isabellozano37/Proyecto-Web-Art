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
          <button className="Homes">Inicio</button>
          </div>
        </Link>
      </header>
      <body>
        <div className="container-card">
        <div class="card">
            <figure>
              <img src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1693300418/ludwig-van-beethoven-62844_640_ido3qx.jpg" />
            </figure>
            <div class="contenido-card">
            <h5>Van Beethoven, Anónimo</h5>
              <p>Busto de Beethoven, gran músico.</p>
              <p>Valor 500.00€</p>
              <img
                id="Carrito"
                src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1693297111/3523887_m6azcd.png"
              />
            </div>
          </div>
          <div class="card">
            <figure>
              <img src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1693297161/pinturas-modernas-al-oleo1_vze5o0.jpg" />
            </figure>
            <div class="contenido-card">
              <h5>Otoño Cálido, Leonid Afremov (Ruso-Israelí)</h5>
              <p>Cuadros Pintados con Óleo y espátula Sobre Lienzo</p>
              <p>Valor 1,000.00€</p>
              <img
                id="Carrito"
                src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1693297111/3523887_m6azcd.png"
              />
            </div>
          </div>
          <div class="card">
            <figure>
              <img src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1693300635/acuarela-flores_nt9gmm.jpg" />
            </figure>
            <div class="contenido-card">
            <h5>Flores en Acuarela, de David Millard <br />Flores</h5>
              <p>Pintura de flores en jarrón, representativo de su apellido.</p>
              <p>Valor 150.00€</p>
              <img
                id="Carrito"
                src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1693297111/3523887_m6azcd.png"
              />
            </div>
          </div>
        </div>
      </body>
    </>
  );
}