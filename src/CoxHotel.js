import { Link } from "react-router-dom";
import React, { useContext } from 'react';
import { UserContext } from './App';
import Logo from "./images/logoW.png";
import SearchIcon from '@material-ui/icons/Search';
import Cox1 from "./images/coxs1.png";
import Cox2 from './images/coxs2.png';
import Cox3 from './images/coxs3.png';
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';
import './CoxHotel.css';

const CoxHotel = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
      <div className="cox-hotel">
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
                  <a class="nav-link" href="/login">{loggedInUser.name}</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <section className="coxhotel-section">
          <div className="cox-header">
          <h5>252 stays . Apr 13-17 . 3 guests</h5>
          <h2>Stay in Cox's Bazar</h2>
          </div>
          <br/>
          <div className="row cox-row">
            <div className="col-md-4">
              <img src={Cox1} alt=""/>
            </div>
            <div className="col-md-6 cox-details">
              <h3>Light bright airy stylish apt & safe peachful stay</h3>
              <p>4 guest . 2 bedrooms . 2 beds . 2 baths</p>
              <p>Wif Air Conditioning Kitchen</p>
              <p>Cancellation flexibility available</p>
              <div className="row">
                <div className="col-md-2 star-part">
                  <StarOutlinedIcon className="star-icon"></StarOutlinedIcon>
                  <p>4.9(20)</p>
                </div>
                <div className="col-md-8">
                  <p>$34/night $167 total</p>
                </div>
              </div>

            </div>
          </div>
          <br/>
          <div className="row cox-row">
            <div className="col-md-4">
              <img src={Cox2} alt=""/>
            </div>
            <div className="col-md-6 cox-details">
              <h3>Light bright airy stylish apt & safe peachful stay</h3>
              <p>4 guest . 2 bedrooms . 2 beds . 2 baths</p>
              <p>Wif Air Conditioning Kitchen</p>
              <p>Cancellation flexibility available</p>
              <div className="row">
                <div className="col-md-2 star-part">
                  <StarOutlinedIcon className="star-icon"></StarOutlinedIcon>
                  <p>4.9(20)</p>
                </div>
                <div className="col-md-8">
                  <p>$34/night $167 total</p>
                </div>
              </div>

            </div>
          </div>
          <br/>
          <div className="row cox-row">
            <div className="col-md-4">
              <img src={Cox3} alt=""/>
            </div>
            <div className="col-md-6 cox-details">
              <h3>Light bright airy stylish apt & safe peachful stay</h3>
              <p>4 guest . 2 bedrooms . 2 beds . 2 baths</p>
              <p>Wif Air Conditioning Kitchen</p>
              <p>Cancellation flexibility available</p>
              <div className="row">
                <div className="col-md-2 star-part">
                  <StarOutlinedIcon className="star-icon"></StarOutlinedIcon>
                  <p>4.9(20)</p>
                </div>
                <div className="col-md-8">
                  <p>$34/night $167 total</p>
                </div>
              </div>

            </div>
          </div>
          <br/>
          <div className="row cox-row">
            <div className="col-md-4">
              <img src={Cox1} alt=""/>
            </div>
            <div className="col-md-6 cox-details">
              <h3>Light bright airy stylish apt & safe peachful stay</h3>
              <p>4 guest . 2 bedrooms . 2 beds . 2 baths</p>
              <p>Wif Air Conditioning Kitchen</p>
              <p>Cancellation flexibility available</p>
              <div className="row">
                <div className="col-md-2 star-part">
                  <StarOutlinedIcon className="star-icon"></StarOutlinedIcon>
                  <p>4.9(20)</p>
                </div>
                <div className="col-md-8">
                  <p>$34/night $167 total</p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>

     

    );
};


export default CoxHotel;