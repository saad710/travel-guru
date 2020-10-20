import React from 'react';
import Header from "./Header";
import "./Coxbazar.css"
import { Link } from 'react-router-dom';

const Coxbazar = () => {
    return (
        <div>
            <Header />
            <div className="row booking-section">
                <div className="col-md-8">
                    <h1 className="cox-head">COX'S BAZAR</h1>
                    <p className="cox-area">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta placeat provident ullam, sint repudiandae maiores a officiis facere accusantium autem iure praesentium atque quidem quaerat in facilis velit exercitationem labore.</p>
                    
                </div>
                <div className="col-md-4">
                   <form className="form-info">
                       <h4>Origin</h4>
                       <input className="form-control" type="text" placeholder="From"/>
                       <h4>Destination</h4>
                       <input className="form-control" type="text" placeholder="To"/>
                       <Link to="/login">
                            <button className="btn btn-warning start-book">Start Booking</button>
                       </Link>
                   </form>
                </div>
            </div>
        </div>
    );
};

export default Coxbazar;