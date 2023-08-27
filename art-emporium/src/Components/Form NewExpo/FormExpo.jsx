import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./FormExpo.css";
import Logo from "../../img/Logo.png";

export default function FormExpo() {
  return (
    <>
      <header className="headArt">
        <div className="Logo">
          <img className="header-Logo" src={Logo} alt="Company Logo" />
        </div>
        <div>
          <button className="Homes">Home</button>
        </div>
      </header>

      <div className="Container">
        <div>
          <img
            className="Img"
            src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1692950303/surrealismo-rostros-con-frutas-oleos_rw7ykq.jpg"
          ></img>
        </div>
        <div className="TextandForm">
          <div className="Text">
            <h1>Art Living Emporium</h1>
            <h2>Registre sus datos</h2>
          </div>
          <div className="Form">
            <div className="Form1">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="Name" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Apellidos</Form.Label>
                  <Form.Control type="Name" placeholder="Enter LastName" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGridAddress2">
                  <Form.Label>Direction</Form.Label>
                  <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Numero de Telefono</Form.Label>
                  <Form.Control type="Phone" placeholder="Number" />
                </Form.Group>
              </Form>
            </div>
            <div>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Confirm Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Form>
            </div>
          </div>
          <div className="Button">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Acepto condiciones de uso" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Nuevo Expositor
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
