import Logo from "../../assets/logo.png";
import Google from "../../assets/google.png";
import "./style.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <img id="logo" src={Logo} alt="logo" />
          <h2>QuickChat</h2>
        </div>
        <div className="google-login">
          <img id="login-icon" src={Google} alt="google-signin" />
          <p>Login with Google</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
