import "../../styles/login&signup.css";
import Navigation from "../../components/navigation/Navigation";
export default function Login() {
  return (
    <div>
      <Navigation />
      <div class="credentials">
        <h1>Login</h1>
        <div class="cred__input-field">
          <label>Email adddress</label>
          <input placeholder="akash@neog.com" type="email"></input>
        </div>
        <div class="cred__input-field">
          <label>Password</label>
          <input placeholder="password" type="password"></input>
        </div>
        <div class="cred__remember-forgot">
          <div class="remember__checkbox">
            <input type="checkbox" />
            <label>Remember me</label>
          </div>
          <div class="forgot__password">Forgot your password?</div>
        </div>
        <button class="btn solid__primary cred__button">Login</button>
        <a href="signup.html">
          <div class="create__new-account">
            create new account <i class="bx bx-right-arrow-alt"></i>{" "}
          </div>
        </a>
      </div>
    </div>
  );
}
