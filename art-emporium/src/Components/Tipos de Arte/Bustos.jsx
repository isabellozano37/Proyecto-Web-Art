import Logo from "../../img/Logo.png";
import "./Tipos de Arte.css";
import { Link } from "react-router-dom"

export default function Bustos() {
  return (
    <>
      <header>
        <div className="divLogo">
          <img className="header-LogoCompany" src={Logo} alt="Company Logo" />
        </div>

        <Link className="ArteMio" to="/PaginaArte">
            <button className="ArteMio">Mi Arte</button>
        </Link>

        <div className="divButton">
          <Link to="/">
            <button className="Home">Home</button>
          </Link>
        </div>

        <button className="CarritocompraArte">
          <img
            className="CarritocompraArte"
            src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1692950303/pngegg_snkldy.png"
          />
        </button>
      </header>
      <body>
        <div className="Title"><h1>Bustos</h1></div>
        <div className="container-card">
          <div class="card">
            <figure>
              <img src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1693294814/nefertiti-6650993_640_kczs4c.webp" />
            </figure>
            <div class="contenido-card">
            <h5>Nefertiti, Anónimo</h5>
              <p>Busto de la reina egipcia.</p>
              <p>Valor 8.000.000€</p>
              <img
                id="Carrito"
                src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1693297111/3523887_m6azcd.png"
              />
            </div>
          </div>
          <div class="card">
            <figure>
              <img src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1693294814/ai-generated-7734186_640_gxxvjk.jpg" />
            </figure>
            <div class="contenido-card">
            <h5>Carnaval, Anónimo</h5>
              <p>Busto de fantasía, la alegría del carnaval veneciano.</p>
              <p>Valor 500.00€</p>
              <img
                id="Carrito"
                src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1693297111/3523887_m6azcd.png"
              />
            </div>
          </div>
          <div class="card">
            <figure>
              <img src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1693294814/ai-generated-8172924_640_dqc6wc.webp" />
            </figure>
            <div class="contenido-card">
            <h5>Aristóteles, Anónimo</h5>
              <p>Busto de Aristóteles, Filósofo griego.</p>
              <p>Valor 100.000€</p>
              <img
                id="Carrito"
                src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1693297111/3523887_m6azcd.png"
              />
            </div>
          </div>
          <div class="card">
            <figure>
              <img src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1693300418/ludwig-van-beethoven-62844_640_ido3qx.jpg" />
            </figure>
            <div class="contenido-card">
            <h5>Ludwig van Beethoven, Anónimo</h5>
              <p>Busto Ludwig van Beethoven,famoso musico.</p>
              <p>Valor 500.00€</p>
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