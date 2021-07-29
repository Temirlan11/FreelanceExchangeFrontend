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

function AddAnnouncement(){
    const[data, setData] = useState([]);

    async function loadData(){
    let response = await fetch("http://localhost:8000/getcategories");
    console.log(response);
    let tableData = await response.json();
    console.log(tableData);
    // alert(tableData);
    setData(tableData);
    }


    useEffect(() => {
    loadData();
    }, []);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [company, setCompany] = useState("");
    const [price, setPrice] = useState(0);
    const [img, setImg] = useState("");
    const [category, setCategory] = useState(0);

    const handleName = event =>{
        setName(event.target.value);
    }
    
    const handleDescription = event =>{
        setDescription(event.target.value);
    }

    const handleCompany = event =>{
        setCompany(event.target.value);
    }

    const handlePrice = event =>{
        setPrice(event.target.value);
    }

    const handleImg = event =>{
        setImg(event.target.value);
    }

    const handleCategory = event =>{
        setCategory(event.target.value);
    }

    const handleAddAnnouncement = event =>{
        const inputData = {name, description, company, price, img, category};
        Add(inputData);
        event.preventDefault();
      }

    
      async function Add(data){
        // alert(JSON.stringify(data));
        const response = await fetch("http://localhost:8000/addannouncement", {
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
            setName("");
            setDescription("");
            setCompany("");
            setPrice(0);
            setImg("");
            setCategory(0);
        }
      }

    return(
     <div class="container">
         <div class="modal-body p-4 col-8 offset-2">
                    <form  onSubmit={handleAddAnnouncement}>
                        <div class="row mb-4">
                        <div class="col">
                            <div class="form-outline">
                            <label class="form-label" for="form6Example1">Name</label>
                            <input type="text" id="form6Example1" style={{"border-radius" : "100px"}}  value = {name} onChange = {handleName} class="form-control" />
                            </div>
                        </div>
                        </div>

                        <div class="form-outline mb-4">
                        <label class="form-label" for="form6Example7">Description</label>
                        <textarea class="form-control" id="form6Example7" style={{"border-radius" : "100px"}} value = {description} onChange = {handleDescription} rows="4"></textarea>
                        </div>

                        <div class="form-outline mb-4">
                        <label class="form-label" for="form6Example4">Company Name</label>
                        <input type="text" id="form6Example4" style={{"border-radius" : "100px"}}  value = {company} onChange = {handleCompany} class="form-control" />
                        </div>

                        <div class="form-outline mb-4">
                        <label class="form-label" for="form6Example5">Price</label>
                        <input type="number" id="form6Example5" style={{"border-radius" : "100px"}}  value = {price} onChange = {handlePrice} class="form-control" />
                        </div>
                
                        <div class="form-outline mb-4">
                        <label class="form-label" for="form6Example6">Image/Logo</label>
                        <input type="text" id="form6Example6" style={{"border-radius" : "100px"}} value = {img} onChange = {handleImg} class="form-control" />
                        </div>

                        <div class="form-outline mb-4">
                        <select class="form-select" value={category} onChange = {handleCategory} style={{"border-radius" : "100px"}} aria-label="Default select example">
                            <option >Select Category</option>
                            {data?.map(row=>(
                                <option value={row.id}>{row.name}</option>
                            ))}
                        </select>
                        </div>

                        <button type="submit" class="btn btn-primary btn-block" style={{"border-radius" : "100px"}}>ADD</button>
                    </form>
                    </div>
     </div>
    );
}

export default AddAnnouncement;