import React from 'react';
import  Cox from "./images/Rect1.png";
import Sundarban from "./images/sundorbon.png";
import sremangal from "./images/Sreemongol.png";
import "./CardArea.css";
import { Link } from 'react-router-dom';


const CardArea = () => {
    return (
        <div className="row">
            <div className="col-md-4">
                <Link className="card-decoration" to="/coxbazar">
                    <div class="card">
                        <img src={Cox} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h3>Cox's Bazar</h3>
                        </div>
                    </div>
                </Link>
                </div>
            <div className="col-md-4">
                <Link className="card-decoration" to="/sremangal">
                <div class="card">
                    <img src={sremangal} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h3>Sremangal</h3>
                    </div>
                </div>
                </Link>
            </div>
            <div className="col-md-4">
                <Link className="card-decoration" to="/sundarban">
                <div class="card">
                    <img src={Sundarban} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h3>Sundarban</h3>
                    </div>
                </div>
                </Link>
            </div>
            
        </div>
    );
};

export default CardArea;