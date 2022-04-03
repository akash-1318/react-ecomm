import "../../styles/login&signup.css";
import {Link} from 'react-router-dom'
import axios from "axios";
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import {Navigation} from "../../components/navigation/navigation";
import { useAuthContext } from "../../contexts/auth-context";


export default function SignUp() {
  const navigate = useNavigate()
  const {authCred, setAuthCred} = useAuthContext()
  const [signupCred, setSignupCred] = useState({
    firstname : "",
    lastname : "",
    email : "",
    password : "",
    confirmPassword : ""
  })

  const signupCredHandler = async({firstname, lastname, email, password}) => {
    try{
      const {data : {encodedToken}} = await axios.post("/api/auth/signup", {
        firstname : firstname,
        lastname : lastname,
        email : email,
        password : password
      })
      setAuthCred({...authCred, 
        authToken : encodedToken,
        authStatus : encodedToken ? true : false,
      })
      navigate("/")
    } catch(err){
      console.log(err)
    }
  }

  return (
    <div>
      <Navigation />
      <form onSubmit = {(e)=>{
        e.preventDefault()
        signupCredHandler(signupCred)
      }}>
      <div className="credentials signup__form">
        <h1>Signup</h1>
        <div className="cred__input-field">
          <label>First Name</label>
          <input 
          placeholder="first name" 
          type="text"
          onChange={(e) => setSignupCred({...signupCred, firstname : e.target.value})}
          ></input>
        </div>
        <div className="cred__input-field">
          <label>Last Name</label>
          <input 
          placeholder="last name" 
          type="text"
          onChange={(e) => setSignupCred({...signupCred, lastname : e.target.value})}
          ></input>
        </div>
        <div className="cred__input-field">
          <label>Email adddress</label>
          <input 
          placeholder="akash@neog.com" 
          type="email"
          onChange={(e) => setSignupCred({...signupCred, email : e.target.value})}
          ></input>
        </div>
        <div className="cred__input-field password__field">
          <label>Password</label>
          <input 
          placeholder="password" 
          type="password"
          onChange={(e) => setSignupCred({...signupCred, password : e.target.value})}
          ></input>
          <i className="bx bx-show"></i>
        </div>
        <div className="cred__input-field password__field">
          <label>Confirm Password</label>
          <input 
          placeholder="confirm password" 
          type="password"
          onChange={(e) => setSignupCred({...signupCred, confirmPassword : e.target.value})}
          ></input>
          <i className="bx bx-show"></i>
        </div>
        <div className="cred__remember-forgot">
          <div className="remember__checkbox">
            <input type="checkbox" />
            <label>Accept all terms & conditions</label>
          </div>
        </div>
        <button type = "submit" className="btn solid__primary cred__button">Signup</button>
        <Link to = "/login">
          <div className="create__new-account">
            Already have an account <i className="bx bx-right-arrow-alt"></i>{" "}
          </div>
        </Link>
      </div>
      </form>
    </div>
  );
}
