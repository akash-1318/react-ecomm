import "../../styles/login&signup.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "../../components/navigation/navigation";
import { useAuthContext } from "../../contexts/auth-context";

export default function SignUp() {
  const navigate = useNavigate();
  const [passwordType, setPasswordType] = useState(true)
  const [confPasswordType, setConfPasswordType] = useState(true)
  const { authCred, setAuthCred } = useAuthContext();
  const [signupCred, setSignupCred] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const signupCredHandler = async ({
    firstname,
    lastname,
    email,
    password,
  }) => {
    if(firstname !== "" && lastname !== "" && email !== "" && password !== ""){
      try {
        const {
          data: { encodedToken },
        } = await axios.post("/api/auth/signup", {
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
        });
        localStorage.setItem("TOKEN", encodedToken);
        setAuthCred({ ...authCred, authToken: encodedToken, authStatus: true });
        navigate("/");
      } catch (err) {
        console.log(err);
      }
    } else{
      alert("Please fill out the fields")
    }
  };

  return (
    <div>
      <Navigation />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          signupCredHandler(signupCred);
        }}
      >
        <div className="credentials signup__form">
          <h1>Signup</h1>
          <div className="cred__input-field">
            <label>First Name</label>
            <input
              placeholder="first name"
              type="text"
              onChange={(e) =>
                setSignupCred({ ...signupCred, firstname: e.target.value })
              }
            ></input>
          </div>
          <div className="cred__input-field">
            <label>Last Name</label>
            <input
              placeholder="last name"
              type="text"
              onChange={(e) =>
                setSignupCred({ ...signupCred, lastname: e.target.value })
              }
            ></input>
          </div>
          <div className="cred__input-field">
            <label>Email adddress</label>
            <input
              placeholder="akash@neog.com"
              type="email"
              onChange={(e) =>
                setSignupCred({ ...signupCred, email: e.target.value })
              }
            ></input>
          </div>
          <div className="cred__input-field password__field">
            <label>Password</label>
            <input
              placeholder="password"
              type={passwordType ? "password" : "text"}
              onChange={(e) =>
                setSignupCred({ ...signupCred, password: e.target.value })
              }
            ></input>
            {passwordType ? (
              <i className="bx bx-show" onClick = {() => setPasswordType(!passwordType)}></i>
            ) : (
              <i class='bx bx-hide' onClick = {() => setPasswordType(!passwordType)}></i>
            )}
          </div>
          <div className="cred__input-field password__field">
            <label>Confirm Password</label>
            <input
              placeholder="confirm password"
              type={confPasswordType ? "password" : "text"}
              onChange={(e) =>
                setSignupCred({
                  ...signupCred,
                  confirmPassword: e.target.value,
                })
              }
              className = {`${signupCred.password !== signupCred.confirmPassword ? "wrong__input" : ""}`}
            ></input>
            {confPasswordType ? (
              <i className="bx bx-show" onClick = {() => setConfPasswordType(!confPasswordType)}></i>
            ) : (
              <i class='bx bx-hide' onClick = {() => setConfPasswordType(!confPasswordType)}></i>
            )}
          </div>
          <div className="cred__remember-forgot">
            <div className="remember__checkbox">
              <input type="checkbox" />
              <label>Accept all terms & conditions</label>
            </div>
          </div>
          <button type="submit" className="btn solid__primary cred__button" disabled = {signupCred.password !== signupCred.confirmPassword}>
            Signup
          </button>
          <Link to="/login">
            <div className="create__new-account">
              Already have an account <i className="bx bx-right-arrow-alt"></i>{" "}
            </div>
          </Link>
        </div>
      </form>
    </div>
  );
}
