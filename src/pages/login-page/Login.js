import "../../styles/login&signup.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Navigation } from "../../components/navigation/navigation";
import { useAuthContext } from "../../contexts/auth-context";
import {toast} from "react-toastify"

export default function Login() {
  const navigate = useNavigate();
  const [passwordType, setPasswordType] = useState(true)
  const { authCred, setAuthCred } = useAuthContext();
  const [loginCred, setLoginCred] = useState({
    email: "",
    password: "",
  });
  const loginHandler = async ({ email, password }) => {
      try {
        const {
          data: { encodedToken },
        } = await axios.post("/api/auth/login", {
          email: email,
          password: password,
        });
        localStorage.setItem("TOKEN", encodedToken);
        setAuthCred({ ...authCred, authToken: encodedToken, authStatus: true });
        navigate("/");
        toast.success("You have logged in");
      } catch (err) {
        console.log(err)
      }
  };

  return (
    <div>
      <Navigation />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          loginHandler(loginCred);
        }}
      >
        <div className="credentials">
          <h1>Login</h1>
          <div className="cred__input-field">
            <label>Email adddress</label>
            <input
              placeholder="akash@neog.com"
              type="email"
              onChange={(e) =>
                setLoginCred({ ...loginCred, email: e.target.value })
              }
            ></input>
          </div>
          <div className="cred__input-field password__field">
            <label>Password</label>
            <input
              placeholder="password"
              type={passwordType ? "password" : "text"}
              onChange={(e) =>
                setLoginCred({ ...loginCred, password: e.target.value })
              }
            ></input>
            {passwordType ? (
              <i className="bx bx-show" onClick = {() => setPasswordType(!passwordType)}></i>
            ) : (
              <i class='bx bx-hide' onClick = {() => setPasswordType(!passwordType)}></i>
            )}
          </div>
          <button type="submit" className="btn solid__primary cred__button">
            Login
          </button>
          <button
            className="btn solid__primary cred__button"
            onClick={(e) =>
              loginHandler({
                email: "akashsharma@gmail.com",
                password: "akashsharma123",
              })
            }
          >
            Login as guest
          </button>
          <Link to="/signup">
            <div className="create__new-account">
              create new account <i class="bx bx-right-arrow-alt"></i>{" "}
            </div>
          </Link>
        </div>
      </form>
    </div>
  );
}
