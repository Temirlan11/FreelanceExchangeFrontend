import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function AdminPanel(){
    return(
        <div class="row">
            <div class="d-flex flex-column p-3 text-white bg-dark" style={{"width" : "280px"}}>
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-card-list" viewBox="0 0 16 16">
                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                </svg>
                <span class="fs-4" style={{"margin-left" : "5px"}}>Dashboard</span>
            </a>
            <hr></hr>
            <ul class="nav nav-pills flex-column mb-auto">
                <li class="nav-item">
                <a href="#" class="nav-link active" style={{"border-radius" : "100px"}}>
                    <svg class="bi me-2" width="16" height="16"></svg>
                    Users
                </a>
                </li>
                <li>
                <a href="#" class="nav-link text-white">
                    <svg class="bi me-2" width="16" height="16"></svg>
                    Announcements
                </a>
                </li>
                <li>
                <a href="#" class="nav-link text-white">
                    <svg class="bi me-2" width="16" height="16"></svg>
                    Categories
                </a>
                </li>
                <li>
                <a href="#" class="nav-link text-white">
                    <svg class="bi me-2" width="16" height="16"></svg>
                    Companies
                </a>
                </li>
                <li>
                <a href="#" class="nav-link text-white">
                    <svg class="bi me-2" width="16" height="16"></svg>
                    Portfolios
                </a>
                </li>
            </ul>
            <hr></hr>
            <div class="dropdown">
                <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="images/user1.png" alt="mdo" width="32" height="32" class="rounded-circle me-2"></img>
                <strong>Oyazbayev Temirlan</strong>
                </a>
                <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                    <li><a class="dropdown-item" href="#">New project...</a></li>
                    <li><a class="dropdown-item" href="#">Settings</a></li>
                    <li><a class="dropdown-item" href="#">Profile</a></li>
                    <li><hr class="dropdown-divider"></hr></li>
                    <li><a class="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div>
        </div>

        <div class="d-flex flex-column p-3 bg-light" style={{"width" : "1140px"}}>
            <button class="btn btn-outline-dark" type="button" data-toggle="modal" data-target="#exampleCentralModal4" style={{"border-radius" : "100px"}}>ADD NEW USER +</button>
            <table class="table align-middle">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Fullname</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Details</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>Oyazbayev Temirlan</td>
            <td>26502@iitu.edu.kz</td>
            <td>87075004071</td>
            <td>
                <button type="button" class="btn btn-warning btn-sm px-3" style={{"border-radius" : "100px"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
        </svg>
                </button>
            </td>
            </tr>
            <tr>
            <th scope="row">2</th>
            <td>Oyazbayev Temirlan</td>
            <td>26502@iitu.edu.kz</td>
            <td>87075004071</td>
            <td>
                <button type="button" class="btn btn-warning btn-sm px-3" style={{"border-radius" : "100px"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
        </svg>
                </button>
            </td>
            </tr>
            <tr>
            <th scope="row">3</th>
            <td>Oyazbayev Temirlan</td>
            <td>26502@iitu.edu.kz</td>
            <td>87075004071</td>
            <td>
                <button type="button" class="btn btn-warning btn-sm px-3" style={{"border-radius" : "100px"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
        </svg>
                </button>
            </td>
            </tr>
        </tbody>
        </table>

        <div
                class="modal fade"
                id="exampleCentralModal4"
                aria-labelledby="exampleModalLabel"
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



    );
}

export default AdminPanel;