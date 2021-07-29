import React, { useState, useEffect, Component, useContext  } from 'react';
import {useCookies} from 'react-cookie';
import UserContext from "./UserContext";
import {Redirect} from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function SignUp(){
    const [cookieJWT, setCookieJWT, removeCookieJWT] = useCookies(['jwt']);
    const [full_name, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [re_password, setRePassword] = useState("");

    const handleFullName = event =>{
      setFullName(event.target.value);
    }
  
    const handleEmail = event =>{
      setEmail(event.target.value);
    }
  
    const handlePassword = event =>{
      setPassword(event.target.value);
    }

    const handleRePassword = event =>{
        setRePassword(event.target.value);
      }
  
    const handleSignUp = event =>{
      const inputData = {full_name, email, password, re_password};
      alert(inputData);
      register(inputData);
      event.preventDefault();
    }


    
  async function register(data){
    alert(JSON.stringify(data));

    const bearer = "Bearer ";

    const response = await fetch("http://localhost:8000/register", {
      method: "POST", 
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        "Authentication": bearer
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data)
    });

    if(response.status==200){
      let jwt = await response.json();
      alert(jwt);
      setCookieJWT('jwt', jwt);
   }
  }

  

  return(
    <div className="container">
      <div className="col-4 offset-4">
        <form onSubmit={handleSignUp}>
          <div class="mb-3">
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Fullname" value = {full_name} onChange = {handleFullName}></input>
          </div>
          <div class="mb-3">
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" value = {email} onChange = {handleEmail}></input>
          </div>
          <div class="mb-3">
            <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Password" value = {password} onChange = {handlePassword}></input>
          </div>
          <div class="mb-3">
            <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Repeat passsword" value = {re_password} onChange = {handleRePassword}></input>
          </div>
          <div class="mb-3">
            <button type="submit" class="btn btn-sm btn-success" id="exampleFormControlInput1">Register</button>
          </div>
        </form>
      </div>
    </div>
  );

    // return(
    //     <div class="container">
    //         <div class="col-lg-4 offset-4 mt-3">
    //             <form class="form-signin text-center">
    //             <h1 class="h3 mb-4 font-weight-normal display-6">PLEASE SIGN UP</h1>

    //             <label for="inputEmail" class="sr-only">Fullname</label>
    //             <input type="email" id="inputEmail" style={{"border-radius" : "100px"}}  class="form-control mb-3" placeholder="" required autofocus></input>

    //             <label for="inputEmail" class="sr-only">Address</label>
    //             <input type="email" id="inputEmail" style={{"border-radius" : "100px"}}  class="form-control mb-3" placeholder="" required autofocus></input>

    //             <label for="inputEmail" class="sr-only">Phone number</label>
    //             <input type="email" id="inputEmail" style={{"border-radius" : "100px"}}  class="form-control mb-3" placeholder="" required autofocus></input>

    //             <label for="inputEmail" class="sr-only">Email address</label>
    //             <input type="email" id="inputEmail" style={{"border-radius" : "100px"}}  class="form-control mb-3" placeholder="" required autofocus></input>
    //             <label for="inputPassword" class="sr-only">Password</label>
    //             <input type="password" id="inputPassword" style={{"border-radius" : "100px"}} class="form-control mb-3" placeholder="" required></input>
    //             <div class="checkbox mb-3">
    //                 <label>
    //                 <input type="checkbox" value="remember-me"></input> Remember me
    //                 </label>
    //             </div>
    //             <a class="btn btn-lg btn-outline-success btn-block" style={{"border-radius" : "100px"}} href="index.html"  type="submit">Sign up</a>
    //             </form>
    //         </div>
    //     </div>
    // );
}

export default SignUp;