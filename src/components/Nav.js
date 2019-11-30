import React from 'react';
import { NavLink } from "react-router-dom";
import '../App.css';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg mb-5 navbar-light bg-white text-primary navsec fixed-top mb-4">
        <div class="container">
          <NavLink className="navbar-brand mt-2 mb-2 ml-5" to="/">
                <p className="navLogo text-white">THE<strong class="text-primary logo35">intercontinentals</strong></p>
              </NavLink>
              <button class="navbar-toggler text-warning" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon texy-warning"></span>
                      </button>

                      <div className="collapse navbar-collapse " id="navbarSupportedContent">

            <ul className="navbar-nav ml-auto navlink">
              <li className="nav-item text-black-50 active navlink">
                <NavLink className="nav-link  mr-3 text-center navlink" to="/">Home
                      <span class="sr-only">(current)</span>
                    </NavLink>
              </li>
              <li className="nav-item text-black-50 avlink">
                <NavLink className="nav-link  mr-3 text-center navlink" to="/About">Checking</NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link  mr-3 text-center navlink" to="/Services">Savings</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-black-50 mr-3 text-center navlink" to="/Contact">Credit Card</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-black-50 mr-3 text-center navlink" to="/Contact">Wealth Management</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-black-50 mr-3 text-center navlink" to="/Login">Login</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Nav;