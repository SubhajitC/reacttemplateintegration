import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <div>
                 <nav id="main_nav" class="navbar navbar-expand-lg navbar-light bg-white shadow">
                <div class="container d-flex justify-content-between align-items-center">
                    <Link to="/" class="navbar-brand h1">
                        <i class='bx bx-buildings bx-sm text-dark'></i>
                        <span class="text-dark h4">Purple</span> <span class="text-primary h4">Buzz</span>
                        </Link>
                    <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler-success" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
        
                    <div class="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="navbar-toggler-success">
                        <div class="flex-fill mx-xl-5 mb-2">
                            <ul class="nav navbar-nav d-flex justify-content-between mx-xl-5 text-center text-dark">
                                <li class="nav-item">
                                    {/* <a class="nav-link btn-outline-primary rounded-pill px-3" href="index.html">Home</a> */}
                                    <Link to="/" class="nav-link btn-outline-primary rounded-pill px-3">Home</Link>
                                </li>
                                <li class="nav-item">
                                <Link class="nav-link btn-outline-primary rounded-pill px-3" to="/about">About</Link> 
                                </li>
                                <li class="nav-item">
                                    {/* <a class="nav-link btn-outline-primary rounded-pill px-3" href="work.html">Work</a> */}
                                    <Link  to=""  class="nav-link btn-outline-primary rounded-pill px-3">Work</Link>
                                </li>
                                <li class="nav-item">
                                    {/* <a class="nav-link btn-outline-primary rounded-pill px-3" href="pricing.html">Pricing</a> */}
                                    <Link to=""  class="nav-link btn-outline-primary rounded-pill px-3">Pricing</Link>
                                </li>
                                <li class="nav-item">
                                    {/* <a class="nav-link btn-outline-primary rounded-pill px-3" href="contact.html">Contact</a> */}
                                    <Link to="" class="nav-link btn-outline-primary rounded-pill px-3">Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div class="navbar align-self-center d-flex">
                            <a class="nav-link" href="#"><i class='bx bx-bell bx-sm bx-tada-hover text-primary'></i></a>
                            <a class="nav-link" href="#"><i class='bx bx-cog bx-sm text-primary'></i></a>
                            <a class="nav-link" href="#"><i class='bx bx-user-circle bx-sm text-primary'></i></a>
                        </div>
                    </div>
                </div>
            </nav>
                
            </div>
        )
    }
}

export default Header