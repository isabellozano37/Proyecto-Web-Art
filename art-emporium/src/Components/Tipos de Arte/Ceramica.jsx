import Logo from "../../img/Logo.png";
import "./Tipos de Arte.css";
import { Link } from "react-router-dom"

export default function Ceramica() {
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
        <div className="Title"><h1>Cerámica</h1></div>
        <div className="container-card">
          <div class="card">
            <figure>
              <img src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1693294911/potter-4682257_1280_jvgcnc.jpg" />
            </figure>
            <div class="contenido-card">
            <h5>Arte en Barro, Anónimo</h5>
              <p>Manos Artesanas elaborando una pieza antes 
                de dar el vitrificado.</p>
              <p>Valor 100.00€</p>
              <img
                id="Carrito"
                src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1693297111/3523887_m6azcd.png"
              />
            </div>
          </div>
          <div class="card">
            <figure>
              <img src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1693295394/frog-1339892_640_x1cao9.jpg" />
            </figure>
            <div class="contenido-card">
            <h5>Ranita, Anónimo</h5>
              <p>Ranita de ceramica, totalmente policromada y pintada
                a mano por artesanos.</p>
              <p>Valor 200.000€</p>
              <img
                id="Carrito"
                src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1693297111/3523887_m6azcd.png"
              />
            </div>
          </div>
          <div class="card">
            <figure>
              <img src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1693295545/schutzengelchen-1690840_640_zatm6j.jpg" />
            </figure>
            <div class="contenido-card">
            <h5>Sueño Reparador, Anónimo</h5>
              <p>Angelito de ceramica fina, con sutiles toques de 
                pintura artesana.</p>
              <p>Valor 200.000€</p>
              <img
                id="Carrito"
                src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1693297111/3523887_m6azcd.png"
              />
            </div>
          </div>
          <div class="card">
            <figure>
              <img src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1693295421/american-1299445_640_plourd.png" />
            </figure>
            <div class="contenido-card">
            <h5>Jarrón Maya, Anónimo</h5>
              <p>Jarrón de arcilla, con 
                elegantes figuras y detalles representativos Maya.</p>
              <p>Valor 500.000€</p>
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