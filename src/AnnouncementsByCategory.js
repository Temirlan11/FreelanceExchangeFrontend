import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";



const ADVERT_GET_API_BY_ID = "http://localhost:8000/announcementsby"

function AddAnnouncement(){
  return(
    <div>
      <div class="row mb-3">
        <h6 style={{"font-family" : "Helvetica"}}>ANNOUNCEMENTS</h6>
        <div class="col">
          {/* <Link class="btn btn-outline-success" type="button" data-toggle="modal" data-target="#addModal" style={{"border-radius" : "100px"}}>Add New +  </Link> */}
          <Link class="btn btn-outline-success" type="button" to="/addannouncement" style={{"border-radius" : "100px"}}>Add New +</Link>
            <div
                    class="modal fade"
                    id="addModal"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="addmodal"
                    aria-hidden="true"
                >
                <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Add new user</h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-mdb-dismiss="modal"
                        aria-label="Close"
                    ></button>
                    </div>
                    <div class="modal-body p-4">
                    <form>
                        <div class="row mb-4">
                        <div class="col">
                            <div class="form-outline">
                            <input type="text" id="form6Example1" style={{"border-radius" : "100px"}} class="form-control" />
                            <label class="form-label" for="form6Example1">First name</label>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-outline">
                            <input type="text" id="form6Example2" style={{"border-radius" : "100px"}} class="form-control" />
                            <label class="form-label" for="form6Example2">Last name</label>
                            </div>
                        </div>
                        </div>

                        <div class="form-outline mb-4">
                        <input type="text" id="form6Example3" style={{"border-radius" : "100px"}} class="form-control" />
                        <label class="form-label" for="form6Example3">Phone Number</label>
                        </div>

                        <div class="form-outline mb-4">
                        <input type="text" id="form6Example4" style={{"border-radius" : "100px"}} class="form-control" />
                        <label class="form-label" for="form6Example4">Address</label>
                        </div>

                        <div class="form-outline mb-4">
                        <input type="email" id="form6Example5" style={{"border-radius" : "100px"}} class="form-control" />
                        <label class="form-label" for="form6Example5">Email</label>
                        </div>
                
                        <div class="form-outline mb-4">
                        <input type="Password" id="form6Example6" style={{"border-radius" : "100px"}} class="form-control" />
                        <label class="form-label" for="form6Example6">Password</label>
                        </div>

                        <div class="form-outline mb-4">
                        <textarea class="form-control" id="form6Example7" style={{"border-radius" : "100px"}} rows="4"></textarea>
                        <label class="form-label" for="form6Example7">Additional information</label>
                        </div>

                        <div class="form-check d-flex justify-content-center mb-4">
                        <input
                            class="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form6Example8"
                            checked 
                        />
                        <label class="form-check-label" for="form6Example8"> Create an account? </label>
                        </div>

                        <button type="submit" class="btn btn-primary btn-block" style={{"border-radius" : "100px"}}>ADD</button>
                    </form>
                    </div>
                </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

function Cards(){
  return(
    <div>
      <div class="col-md-3">
                <div class="card mb-4 shadow-sm"> 
                  <img class="card-img-top" src="https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/136164740/original/89aab9fb6deecaa6b3efdbdf397375aa5fa9371a.png" style={{"width" : "100%", "height": "25vh",  "object-fit" : "cover"}} alt="Card image cap"></img>
                  <div class="card-body">
                    <p class="card-text">HELLO WORLD!</p>
                    <small class="text-muted" style={{"font-size" : "11px"}}>9 mins</small>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" style={{"border-radius": "100px", "margin-right" : "5px"}} class="btn btn-sm btn-outline-secondary">Open</button>
                        <button type="button" style={{"border-radius" : "100px"}} class="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <h4 class="text-muted">11$</h4>
                    </div>
                  </div>
                </div>
              </div>
    </div>
  );
}

function AnnouncementsByCategory(){
  let match = useRouteMatch();

  const[data, setData] = useState([]);

  async function loadData(){
    if(match.params.id){
      let response = await fetch("http://localhost:8000/announcementsby/" + match.params.id);
      console.log(response);
      let tableAnnouncements = await response.json();
      console.log(tableAnnouncements);
      setData(tableAnnouncements);
    }else{
      let response = await fetch("http://localhost:8000/allannouncements");
      let tableAnnouncements = await response.json();
      console.log(tableAnnouncements);
      setData(tableAnnouncements);
    }
  }


  useEffect(() => {
    loadData();
  }, []);


    return(
        <div>
            <div class="container">
            <div class="row mt-5">

                <div class="col">
                    <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Announcements name" style={{"border-radius" : "100px"}} aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                    </div>
                </div>

                <div class="col">
                    <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Price From" style={{"border-radius" : "100px"}} aria-label="Amount (to the nearest dollar)"></input>
                    </div>
                </div>

                <div class="col">
                    <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="To" style={{"border-radius" : "100px"}} aria-label="Amount (to the nearest dollar)"></input>
                    </div>
                </div>

                <div class="col">
                    <div class="input-group mb-3">
                    <button class="btn btn-outline-secondary dropdown-toggle" style={{"border-radius" : "100px"}} type="button" data-bs-toggle="dropdown" aria-expanded="false">Category</button>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                        <li><hr class="dropdown-divider"></hr></li>
                        <li><a class="dropdown-item" href="#">Separated link</a></li>
                    </ul>
                    </div>
                </div>

                <div class="col">
                    <button class="btn btn-outline-success" type="button" style={{"border-radius" : "100px"}} id="button-addon2">Search</button>
                </div>
                
            </div>
        </div>

        <div class="album py-3">
            <div class="container">

                <AddAnnouncement/> 

            <div class="row">

            {data?.map(row=>(
              <div class="col-md-3">
                <div class="card mb-4 shadow-sm"> 
                  <img class="card-img-top" src="https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/136164740/original/89aab9fb6deecaa6b3efdbdf397375aa5fa9371a.png" style={{"width" : "100%", "height": "25vh",  "object-fit" : "cover"}} alt="Card image cap"></img>
                  <div class="card-body">
                    <p class="card-text">{row.name}</p>
                    <small class="text-muted" style={{"font-size" : "11px"}}>9 mins</small>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <Link type="button" style={{"border-radius": "100px", "margin-right" : "5px"}} class="btn btn-sm btn-outline-secondary" to={`/getannouncement/${row.id}`}>Open</Link>
                        <button type="button" style={{"border-radius" : "100px"}} class="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <h4 class="text-muted">11$</h4>
                    </div>
                  </div>
                </div>
              </div>
             ))}

              {/* <Cards/> */} 
            </div>
         </div>
        </div>
      </div>
    );
}

export default AnnouncementsByCategory;