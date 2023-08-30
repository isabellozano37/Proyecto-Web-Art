import Logo from "../../img/Logo.png";
import "./Tipos de Arte.css";
import { Link } from "react-router-dom"

export default function Acuarela() {
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
        <div className="Title"><h1>Acuarela</h1></div>
        <div className="container-card">
          <div class="card">
            <figure>
              <img src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1693299303/pinturas-acuarela-mujer-mar_rluoho.jpg" />
            </figure>
            <div class="contenido-card">
            <h5>Vacaciones en Torremolinos, Anónimo</h5>
              <p>Pintura de niña en el mar Obra de retrato de niña Pintura de paisaje marino.</p>
              <p>Valor 1,500.00€</p>
              <img
                id="Carrito"
                src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1693297111/3523887_m6azcd.png"
              />
            </div>
          </div>
          <div class="card">
            <figure>
              <img src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1693299303/pintura-acuarela-paisaje-marino_knymzl.jpg" />
            </figure>
            <div class="contenido-card">
            <h5>Puesta de Sol, de Serghei Ghetiu Art for all</h5>
              <p>Una hermosa puesta de sol en el mar es el mejor momento para dar un paseo.</p>
              <p>Valor  Valor 1,800.00€</p>
              <img
                id="Carrito"
                src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1693297111/3523887_m6azcd.png"
              />
            </div>
          </div>
          <div class="card">
            <figure>
              <img src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1693300634/cielo-acuarela_mtqytq.jpg" />
            </figure>
            <div class="contenido-card">
            <h5>Cielo de Atardecer, de John Pike.</h5>
              <p>Pintura ilustrativa de un barco en el rio al atardecer, con 
                paisaje montañoso de fondo.</p>
              <p>Valor 200.00€</p>
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