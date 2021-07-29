import React, { useState, useEffect } from 'react';
import UserContext from './UserContext';

import {
  BrowserRouter as Router,
  Switch, 
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function SubmitApplication(){
    let match = useRouteMatch();
    // alert(match + " MATCH");
    const[data, setData] = useState([]);

  


    const [suggestion, setSuggestion] = useState("");
    const [price, setPrice] = useState(0);
    const [advert, setAdvert] = useState("");

    const handleSuggestion = event =>{
        setSuggestion(event.target.value);
    }
    
    const handlePrice = event =>{
        setPrice(event.target.value);
    }


    const handleAddAnnouncement = event =>{
        const inputData = {suggestion, price};
        Add(inputData);
        event.preventDefault();
      }

    
      async function Add(data){
        alert("http://localhost:8000/submit/"+`${match.params.id}`   );
        const response = await fetch("http://localhost:8000/submit/"+`${match.params.id}`, {
          method: "POST", 
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json"
          },
          redirect: "follow",
          referrerPolicy: "no-referrer",
          body: JSON.stringify(data)
        });
        if(response){
            setSuggestion("");
            setPrice(0);
        }
      }

    return(
     <div class="container">
         <div class="modal-body p-4 col-8 offset-2">
                    <form  onSubmit={handleAddAnnouncement}>
                        <div class="row mb-4">

                        <div class="form-outline mb-4">
                            <label class="form-label" for="form6Example7">Suggestion</label>
                            <textarea class="form-control" id="form6Example7" style={{"border-radius" : "100px"}} value = {suggestion} onChange = {handleSuggestion} rows="4"></textarea>
                        </div>

                        <div class="form-outline mb-4">
                        <label class="form-label" for="form6Example5">Price</label>
                        <input type="number" id="form6Example5" style={{"border-radius" : "100px"}}  value = {price} onChange = {handlePrice} class="form-control" />
                        </div>    
                        </div>

                        <button type="submit" class="btn btn-primary btn-block" style={{"border-radius" : "100px"}}>ADD</button>
                    </form>
                    </div>
     </div>
    );
}

export default SubmitApplication;