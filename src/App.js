import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, Component, useContext  } from 'react';
import {Redirect} from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
// import './bootstrap/css/bootstrap.min.css';
import Login from './Login';
import Navbar from "./Navbar";
import UserContext from './UserContext';
import UserProvider from './UserProvider';
import Footer from './Footer';
import AnnouncementsByCategory from './AnnouncementsByCategory';
import SignIn from './SignIn';
import SignUp from './SignUp';
import AdminPanel from './AdminPanel';
import AddAnnouncement from './AddAnnouncement';
import DetailsAnnoucement from './DetailsAnnouncement';
import SubmitApplication from './SubmitApplication';
import Bids from './Bids';

function SlideBar(){
  return (
    <div class="container-fluid" style={{"background-color" : "#212529", "color" : "#fff!important", "height": "435px"}}>
      <div class="row">
        <div class="col-md-6 px-0 mt-5">
          <h2 class="display-4 fst-italic offset-2" style={{"color":"white", "text-align" : "left"}}>Real Business Cases</h2>
          <p class="lead my-3 offset-2" style={{"color":"white",  "text-align" : "left"}}>A business solution designed for teams</p>
          <p class="lead mb-0 offset-2" style={{"color":"white",  "text-align" : "left" }}>Upgrade to a curated experience packed with tools and benefits, dedicated to businesses</p>
        </div>
        <div class="col-sm mt-3">
          <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png" class="card-img-top" alt="..."></img>
        </div>
      </div>
    </div>
  );
}

function CategoryButtons(){

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

  return(
    <div class="container-fluid">
      <div class="nav-scroller py-1 mb-4 mt-4">
        <nav class="nav d-flex justify-content-between">
          {data?.map(row=>(
            <Link class="btn btn-outline-success" style={{"text-decoration" : "none", "border-radius" : "100px"}}  to={`announcementsby/${row.id}`}>{row.name}</Link>
          ))}
          {/* <a class="btn btn-outline-success" style={{"text-decoration" : "none", "border-radius" : "100px"}} href="announcementsByCategory.html">Web Design</a>
          <a class="btn btn-outline-success" style={{"text-decoration" : "none", "border-radius" : "100px"}} href="announcementsByCategory.html">Marketing</a>
          <a class="btn btn-outline-success" style={{"text-decoration" : "none", "border-radius" : "100px"}} href="announcementsByCategory.html">User Testing</a>
          <a class="btn btn-outline-success" style={{"text-decoration" : "none", "border-radius" : "100px"}} href="announcementsByCategory.html">UX Writing</a>
          <a class="btn btn-outline-success" style={{"text-decoration" : "none", "border-radius" : "100px"}} href="announcementsByCategory.html">Photoshop Editing</a>
          <a class="btn btn-outline-success" style={{"text-decoration" : "none", "border-radius" : "100px"}} href="announcementsByCategory.html">SMM</a>
          <a class="btn btn-outline-success" style={{"text-decoration" : "none", "border-radius" : "100px"}} href="announcementsByCategory.html">Translations</a>
          <a class="btn btn-outline-success" style={{"text-decoration" : "none", "border-radius" : "100px"}} href="announcementsByCategory.html">Public Relations</a> */}
          {/* <a class="btn btn-outline-success" style={{"text-decoration" : "none", "border-radius" : "100px"}}   href="announcementsByCategory.html">Whiteboard&Animated</a> */}
          <Link  class="btn btn-outline-success" style={{"text-decoration" : "none", "border-radius" : "100px"}}   to="/announcementsb">Whiteboard&Animated</Link>
        </nav>
      </div>
    </div>
  );
}

function RecomendCards(){
  return(
    <div class="album py-3">
        <div class="container">

        	<div class="row mb-3">
        		<h6 style={{"font-family" : "Helvetica"}}>NEW ANNOUNCEMENTS</h6>
        	</div>

          <div class="row">
            <div class="col-md-3">
              <div class="card mb-4 shadow-sm">
                <img class="card-img-top" src="https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/136164740/original/89aab9fb6deecaa6b3efdbdf397375aa5fa9371a.png" style={{"width" : "100%", "height": "25vh",  "object-fit" : "cover"}} alt="Card image cap"></img>
                <div class="card-body">
                  <p class="card-text">It is necessary to typeset the content for the site page</p>
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

            <div class="col-md-3">
              <div class="card mb-4 shadow-sm">
                <img class="card-img-top" src="https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/194769681/original/3efa1c7a7feb593a1177ff82649f30262ec20c81.png" style={{"width" : "100%", "height": "25vh",  "object-fit" : "cover"}} alt="Card image cap"></img>
                <div class="card-body">
                  <p class="card-text">It is necessary to typeset the content for the site page</p>
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

            <div class="col-md-3">
              <div class="card mb-4 shadow-sm">
                <img class="card-img-top" src="https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/159891370/original/795a8162f5b575da7fb32c81d39531ec01e4ebb9.png" style={{"width" : "100%", "height": "25vh",  "object-fit" : "cover"}} alt="Card image cap"></img>
                <div class="card-body">
                  <p class="card-text">It is necessary to typeset the content for the site page</p>
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

            <div class="col-md-3">
              <div class="card mb-4 shadow-sm">
                <img class="card-img-top" src="https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/160638229/original/52b3f90ae0f52960ed65856744b42d4ccf92c874.jpg" style={{"width" : "100%", "height": "25vh",  "object-fit" : "cover"}} alt="Card image cap"></img>
                <div class="card-body">
                  <p class="card-text">It is necessary to typeset the content for the site page</p>
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

        <div class="row mb-3 mt-4">
        		<h6 style={{"font-family" : "Helvetica"}}>RECOMMENDATIONS FOR YOU</h6>
        	</div>

          <div class="row">
            <div class="col-md-3">
              <div class="card mb-4 shadow-sm">
                <img class="card-img-top" src="https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/136164740/original/89aab9fb6deecaa6b3efdbdf397375aa5fa9371a.png" style={{"width" : "100%", "height": "25vh",  "object-fit" : "cover"}} alt="Card image cap"></img>
                <div class="card-body">
                  <p class="card-text">It is necessary to typeset the content for the site page</p>
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

            <div class="col-md-3">
              <div class="card mb-4 shadow-sm">
                <img class="card-img-top" src="https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/194769681/original/3efa1c7a7feb593a1177ff82649f30262ec20c81.png" style={{"width" : "100%", "height": "25vh",  "object-fit" : "cover"}} alt="Card image cap"></img>
                <div class="card-body">
                  <p class="card-text">It is necessary to typeset the content for the site page</p>
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

            <div class="col-md-3">
              <div class="card mb-4 shadow-sm">
                <img class="card-img-top" src="https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/159891370/original/795a8162f5b575da7fb32c81d39531ec01e4ebb9.png" style={{"width" : "100%", "height": "25vh",  "object-fit" : "cover"}} alt="Card image cap"></img>
                <div class="card-body">
                  <p class="card-text">It is necessary to typeset the content for the site page</p>
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

            <div class="col-md-3">
              <div class="card mb-4 shadow-sm">
                <img class="card-img-top" src="https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/160638229/original/52b3f90ae0f52960ed65856744b42d4ccf92c874.jpg" style={{"width" : "100%", "height": "25vh",  "object-fit" : "cover"}} alt="Card image cap"></img>
                <div class="card-body">
                  <p class="card-text">It is necessary to typeset the content for the site page</p>
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
      </div>
    </div>
  );
}

function App() {
  const user = useContext(UserContext);
  return (
    <div className="App">
      <Router>
        <Navbar currentUser = {user}/>
        <Switch>
          <Route path = "/announcements">
            <AnnouncementsByCategory/>
          </Route>
          <Route path = "/login">
              <Login/>
            </Route>
          <Route path="/signup">
            <SignUp/>
          </Route>
          <Route path="/admin">
            <AdminPanel/>
          </Route>
          <Route path="/admin">
            <AdminPanel/>
          </Route>
          <Route path="/allannouncements">
            <AnnouncementsByCategory/>
          </Route>
          <Route path={`/announcementsby/:id` }>
            <AnnouncementsByCategory/>
          </Route>
          <Route path = "/addannouncement">
            <AddAnnouncement/>
          </Route>
          <Route path={`/getannouncement/:id`}>
            <DetailsAnnoucement/>
          </Route>
          <Route  path={`/submit/:id`}>
            <SubmitApplication/>
          </Route>
          <Route  path={`/bids/:id`}>
            <Bids/>
          </Route>
          <Route path="/">
            <SlideBar/>
            <CategoryButtons/>
            <RecomendCards/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
