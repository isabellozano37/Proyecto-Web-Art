import "./Body.css";
import { Link } from "react-router-dom";

export default function BodyMain() {
  return (
    <>
      <body>
        <div className="Saludos">
          <h1>BIENVENIDOS</h1>
        </div>

        <div className="Contain">
          <div1 className="Textos">
            <h2>Tu puedes amar el arte en todo su esplendor</h2>
            <h3>Haz click en la imagen</h3>
          </div1>

          <div2 className="Div2">
            <Link to="/PaginaArte">
              <img
                className="Imags"
                src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1692950303/caratula_artes_b8yb9l.jpg"
              ></img>
            </Link>
          </div2>
        </div>
      </body>
    </>
  );
}
