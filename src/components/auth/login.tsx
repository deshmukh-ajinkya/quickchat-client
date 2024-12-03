import Logo from "../../assets/logo.png";
import Google from "../../assets/google.png";
import "./style.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <img src={Logo} alt="logo" width={36} />
          <h2>QuickChat</h2>
        </div>
        <div className="google-login">
          <img src={Google} alt="google-signin" width={24} />
          <p>Login with Google</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
