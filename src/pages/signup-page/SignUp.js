import "../../styles/login&signup.css";
import Navigation from "../../components/navigation/Navigation";
export default function SignUp() {
  return (
    <div>
      <Navigation />
      <div class="credentials signup__form">
        <h1>Signup</h1>
        <div class="cred__input-field">
          <label>First Name</label>
          <input placeholder="first name" type="text"></input>
        </div>
        <div class="cred__input-field">
          <label>Last Name</label>
          <input placeholder="last name" type="text"></input>
        </div>
        <div class="cred__input-field">
          <label>Email adddress</label>
          <input placeholder="akash@neog.com" type="email"></input>
        </div>
        <div class="cred__input-field password__field">
          <label>Password</label>
          <input placeholder="password" type="password"></input>
          <i class="bx bx-show"></i>
        </div>
        <div class="cred__input-field password__field">
          <label>Confirm Password</label>
          <input placeholder="confirm password" type="password"></input>
          <i class="bx bx-show"></i>
        </div>
        <div class="cred__remember-forgot">
          <div class="remember__checkbox">
            <input type="checkbox" />
            <label>Accept all terms & conditions</label>
          </div>
        </div>
        <button class="btn solid__primary cred__button">Signup</button>
        <a href="login.html">
          <div class="create__new-account">
            Already have an account <i class="bx bx-right-arrow-alt"></i>{" "}
          </div>
        </a>
      </div>
    </div>
  );
}
