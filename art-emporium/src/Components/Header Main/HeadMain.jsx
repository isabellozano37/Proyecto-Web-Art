import "../Header Main/HeadMain.css";
import Logo from "../../img/Logo.png";


export default function Headermain() {
   
function ButtonOptions() {
  const [optionsVisible, setOptionsVisible] = useState(false);

  const toggleOptions = () => {
    setOptionsVisible(!optionsVisible);
  };

  const handleOptionClick = (option) => {
    alert("Seleccionaste " + option + ".");
    setOptionsVisible(false);
  };

  return (
    <div>
      <button className="header-button" onClick={toggleOptions}>
        Registrarse
      </button>
      {optionsVisible && (
        <div className="header-button-options">
          <div
            className="option"
            onClick={() => handleOptionClick("Nuevo exponente")}
          >
            Nuevo exponente
          </div>
          <div
            className="option"
            onClick={() => handleOptionClick("Nuevo comprador")}
          >
            Nuevo comprador
          </div>
        </div>
      )}
    </div>
  );
}
}
function LoginButton() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Aquí puedes realizar la lógica de autenticación
    // por ejemplo, enviar los datos al servidor y verificar la autenticación
    if (username && password) {
      alert(
        `Iniciando sesión con Usuario: ${username} y Contraseña: ${password}`
      );
      // Puedes también redirigir a la página de inicio después del inicio de sesión
    } else {
      alert("Por favor ingresa el usuario y la contraseña.");
    }
  };
  return (
    <div>
      {showLoginForm ? (
        <form>
          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={handleLogin}>
            Confirmar
          </button>
        </form>
      ) : (
        <button onClick={toggleLoginForm} className="header-button">Iniciar Sesión</button>
      )}
    </div>
  );
}

export default function Headermain() {

  return (
    <header>
      <div className="divLogo">
        <img className="header-LogoCompany" src={Logo} alt="Company Logo" />
      </div>

      <div className="divButton">
        <ButtonOptions />


        <LoginButton />

      </div>
    </header>
  );
}
