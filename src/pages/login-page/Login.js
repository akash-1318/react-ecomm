import "../../styles/login&signup.css";
import {Link} from 'react-router-dom'
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios";
import {Navigation} from "../../components/navigation/navigation";
import { useAuthContext } from "../../contexts/auth-context";


export default function Login() {
  const navigate = useNavigate()
  const {authCred, setAuthCred} = useAuthContext();
  const [loginCred, setLoginCred] = useState({
    email : "",
    password : ""
  });
  const loginHandler = async({email, password}) => {
    try{
      const {data : {encodedToken}} = await axios.post("/api/auth/login", {
        email: email,
        password: password,
      })
      localStorage.setItem("TOKEN", encodedToken)
      setAuthCred({...authCred, 
        authToken : encodedToken,
        authStatus : true
      })
      navigate("/")
    } catch(err){
      console.log(err)
    }
  }
  
  return (
    <div>
      <Navigation />
      <form onSubmit = {(e) => {
        e.preventDefault()
        loginHandler(loginCred)
      }}>
      <div className="credentials">
        <h1>Login</h1>
        <div className="cred__input-field">
          <label>Email adddress</label>
          <input 
          placeholder="akash@neog.com" 
          type="email"
          onChange = {(e) => setLoginCred({...loginCred, email : e.target.value})}
          ></input>
        </div>
        <div className="cred__input-field">
          <label>Password</label>
          <input 
          placeholder="password" 
          type="password"
          onChange = {(e) => setLoginCred({...loginCred, password : e.target.value})}
          ></input>
        </div>
        <div className="cred__remember-forgot">
          <div className="remember__checkbox">
            <input type="checkbox" />
            <label>Remember me</label>
          </div>
          <div className="forgot__password">Forgot your password?</div>
        </div>
        <button type="submit" className="btn solid__primary cred__button">Login</button>
        <button className="btn solid__primary cred__button" onClick = {(e) => loginHandler({
          email: "adarshbalika@gmail.com",
          password: "adarshbalika",
        })}>Login as guest</button>
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
