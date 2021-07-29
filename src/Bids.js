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

function Bids(){
    const[data, setData] = useState([]);
    const[bids, setBids] = useState([]);
    let match = useRouteMatch();

    async function loadData(){
    let response = await fetch("http://localhost:8000/bids/" +  match.params.id);
    console.log(response);
    let tableData = await response.json();
    setBids(tableData);
    console.log(tableData);
    // alert(tableData);
    setData(tableData);
    }


    useEffect(() => {
    loadData();
    }, []);

    const [suggestion, setSuggestion] = useState("");
    const [price, setPrice] = useState(0);
    const [createdDate, setCreatedDate] = useState(new Date());
    const [user, setUser] = useState();
    const [advert, setAdvert] = useState();

    const handleSuggestion = event =>{
        setSuggestion(event.target.value);
    }
    
    const handlePrice = event =>{
        setPrice(event.target.value);
    }

    const handleCreatedDate = event =>{
        setCreatedDate(event.target.value);
    }

    const handleAdvert = event =>{
        setAdvert(event.target.value);
    }

    const handleUser = event =>{
        setUser(event.target.value);
    }

    const handleAddAnnouncement = event =>{
        const inputData = {suggestion, price, createdDate, user, advert};
        Add(inputData);
        event.preventDefault();
      }

    
      async function Add(data){
        // alert(JSON.stringify(data));
        const response = await fetch("http://localhost:8000/bids/" +  match.params.id, {
          method: "GET", 
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
            let bidsJson = await response.json();
            setBids(bidsJson);
            console.log(bidsJson);
            setSuggestion("");
            setPrice(0);
            setCreatedDate(0);
            setAdvert(0);
            setUser(0);
        }
      }

    return(
     <div class="container">
         <div class="modal-body p-4 col-8 offset-2">
         <button class="btn btn-outline-success" type="button" data-toggle="modal" data-target="#exampleCentralModal4" style={{"border-radius" : "100px"}}>ANNOUNCE THE WINNER</button>
            <table class="table align-middle">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Suggestion</th>
                <th scope="col">Price</th>
                <th scope="col">Participant</th>
                <th scope="col">Details</th>
                </tr>
            </thead>
            <tbody>
            {bids?.map(row=>(
                <tr>
                <th scope="row">{row.id}</th>
                <td>{row.suggestion}</td>
                <td>{row.price}</td>
                <td>{row.user.fullName}</td>
                <td>
                    <button type="button" class="btn btn-warning btn-sm px-3" style={{"border-radius" : "100px"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
            </svg>
                    </button>
                </td>
                </tr>
                ))}
            </tbody>
        </table>         
         </div>
     </div>
    );
}

export default Bids;