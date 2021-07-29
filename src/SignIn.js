import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function SignIn(){
    return(
        <div class="container">
            <div class="col-lg-4 offset-4 mt-5">
                <form class="form-signin text-center">
                
                    <h1 class="h3 mb-4 font-weight-normal display-6">Please sign in</h1>
                    <label for="inputEmail" class="sr-only mb-2">Email address</label>
                    <input type="email" id="inputEmail" style={{"border-radius" : "100px"}}  class="form-control mb-4" placeholder="" required autofocus></input>
                    <label for="inputPassword" class="sr-only mb-2">Password</label>
                    <input type="password" id="inputPassword" style={{"border-radius" : "100px"}}  class="form-control mb-3" placeholder="" required></input>
                    <div class="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me"></input> Remember me
                    </label>
                    </div>
                    <a class="btn btn-lg btn-outline-success btn-block" style={{"border-radius" : "100px"}} href="index.html"  type="submit">Sign in</a>
              </form>
            </div>
         </div>
    );
}

export default SignIn;