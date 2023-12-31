import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./FormBou.css";
import Logo from "../../img/Logo.png";

export default function FormExpo() {
  return (
    <>
      <header className="headArts">
        <div className="Logos">
          <img className="header-Logos" src={Logo} alt="Company Logo" />
        </div>
        <div>
          <button className="Hom">Home</button>
        </div>
      </header>

      <div className="Containers">
        <div>
          <img
            className="Imgs"
            src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1692950303/surrealismo-rostros-con-frutas-oleos_rw7ykq.jpg"
          ></img>
        </div>
        <div className="TextandForms">
          <div className="Texts">
            <h1>Art Living Emporium</h1>
            <h2>Registre sus datos</h2>
          </div>
          <div className="Forms">
            <div className="Forms1">
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
          <div className="Buttons">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Recuerdame" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Nuevo Comprador
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
