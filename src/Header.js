import React from 'react';
import "./Header.css";
import Logo from "./images/logoW.png";
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <div className="row">
                <div className="col-md-2">
                    <Link to="/home">
                        <img className="logo" src={Logo} alt=""/>
                    </Link>
                </div>
                <div className="col-md-4">
                    <div className="input-icon">
                        <input className="input-search" type="text"/>
                        <SearchIcon className="search-icon" />
                    </div>
                </div>
                <div className="col-md-6">
                <nav class="navbar navbar-expand-lg navbar-light">

  <div class="collapse navbar-collapse d-flex justify-content-center align-items-center" id="navbarNav">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link nav-btn" href="/news">News <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link nav-btn" href="#">Destination</a>
      </li>
      <li class="nav-item">
        <a class="nav-link nav-btn" href="#">Blog</a>
      </li>
      <li class="nav-item">
        <a class="nav-link nav-btn" href="#">Contact</a>
      </li>
      <li class="nav-item button-login">
        <a class="nav-link" href="/login">Login</a>
      </li>
    </ul>
  </div>
</nav>
                </div>
            </div>

            
        </div>
    );
};

export default Header;