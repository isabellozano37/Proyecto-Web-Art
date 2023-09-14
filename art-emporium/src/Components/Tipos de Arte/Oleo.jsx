import Logo from "../../img/Logo.png";
import "./Tipos de Arte.css";
import { Link } from "react-router-dom"

export default function Oleo() {
  return (
    <>
      <header>
        <div className="divLogo">
          <img className="header-LogoCompany" src={Logo} alt="Company Logo" />
        </div>

        <Link className="ArteMio" to="/PaginaArte">
            <button className="ArteMio">Arte</button>
        </Link>

        <div className="divButton">
          <Link to="/">
            <button className="Home">Inicio</button>
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
        <div className="Title"><h1>Óleo</h1></div>
        <div className="container-card">
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
              <img src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1693299304/cuadro-de-flores-al-oleo-con-espatula_xh8xr1.jpg" />
            </figure>
            <div class="contenido-card">
            <h5>Patio La Abuela, Mikki Senkarik(Artista EEUU)</h5>
              <p>Pintura de flores en paisaje pintados con espátula y óleo.</p>
              <p>Valor 800.00€</p>
              <img
                id="Carrito"
                src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1693297111/3523887_m6azcd.png"
              />
            </div>
          </div>
          <div class="card">
            <figure>
              <img src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1693301098/pintura-oleo_dvq5oh.jpg" />
            </figure>
            <div class="contenido-card">
            <h5>Camino Primaveral, Leonid Afre</h5>
              <p>Paisajes Pintado al Óleo Espátula Sobre Lienzo.</p>
              <p>Valor 200.00€</p>
              <img
                id="Carrito"
                src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1693297111/3523887_m6azcd.png"
              />
            </div>
          </div>
          <div class="card">
            <figure>
              <img src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1693301433/pintura-abatracta-acuarela_jkteia.jpg" />
            </figure>
            <div class="contenido-card">
            <h5>Intensidad, <br />Anónimo</h5>
              <p> Caballo Pintado al Óleo Espátula Sobre Lienzo.</p>
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
