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
import { Button } from 'bootstrap';

function DetailsAnnoucement(){
    const[announcement, setAnnoucement] = useState();
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [company, setCompany] = useState("");
    const [price, setPrice] = useState(0);
    const [img, setImg] = useState("");
    const [category, setCategory] = useState(0);
    

    let match = useRouteMatch();
    useEffect(() => {
        loadData();
      }, []);   

    async function loadData(){
        // alert("http://localhost:8000/getannouncement/" + match.params.id + " +");
        let response = await fetch("http://localhost:8000/getannouncement/" + match.params.id);
        let data = await response.json();
        setAnnoucement(data);
        load(data);
        console.log(data);
    }

    async function load(data){
        setId(data.id);
        setName(data.name);
        setDescription(data.desrciption);
        setCompany(data.company);
        setPrice(data.price);
        setImg(data.img);
        setCategory(data.category);
    }

    async function deleteAdvert(){
        const data = {id, name, description, company, price, img, category};
        Delete(data);
    }

    async function Delete(deleteData){
        // alert("http://localhost:8000/getannouncement/" + match.params.id + " +");
        const response = await fetch("http://localhost:8000/deleteadvert/", {
              method: "POST", 
              mode: "cors",
              cache: "no-cache",
              credentials: "same-origin",
              headers: {
                "Content-Type": "application/json"
              },
              redirect: "follow",
              referrerPolicy: "no-referrer",
              body: JSON.stringify(deleteData)
            });
        let data = await response.json(); 
    }

    return(
      <div class="container">
        <div class="col-md-10 offset-1 mt-5">
          <div class="card flex-md-row mb-4 shadow-sm h-md-250">
            <div class="card-body d-flex flex-column align-items-start">
             <div class="row col-12">
              <div class="col">
               <strong class="d-inline-block mb-2 text-primary">{price}$</strong>
              </div>
              <div class="col offset-5">
                <Link  class="btn btn-outline-success" type="button" to={`/bids/${id}`}  style={{"border-radius" : "100px"}}>See All Bids</Link>
              </div>
             </div>
              <h3 class="mb-0 mt-5">
                <a class="text-dark" href="#">{name}</a>
              </h3>
              <div class="mb-1 text-muted">Nov 12</div>
              <p class="card-text mb-auto">{description}</p>
              <div class="row col-8">
                <div class="col">
                    <Link class="btn btn-outline-success" type="button" to={`/submit/${id}`} style={{"border-radius" : "100px"}}>Send request</Link>
                </div>
                <div class="col">
                    <button class="btn btn-outline-danger" type="button" onClick={deleteAdvert} style={{"border-radius" : "100px"}}>Delete Advert</button>
                </div>
              </div>
            </div>
            <img class="card-img-right flex-auto d-none d-lg-block" src={img}  style={{"width" : "50%", "height": "70vh",  "object-fit" : "cover"}} alt="Card image cap"></img>
          </div>
        </div>
      </div>
    );
}

export default DetailsAnnoucement;