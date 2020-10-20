import React from 'react';
import "./HomeCard.css";
import CardArea from './CardArea';

const HomeCard = () => {
    return (
        <section className="home-card-area">
            <div className="row">
                <div className="col-md-5">
                    <h1 className="cox-head">COX'S BAZAR</h1>
                    <p className="cox-area">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta placeat provident ullam, sint repudiandae maiores a officiis facere accusantium autem iure praesentium atque quidem quaerat in facilis velit exercitationem labore.</p>
                    <button class="btn btn-warning btn-book"> Booking Now  </button>
                </div>
                <div className="col-md-7">
                    <CardArea />
                </div>
            </div>
            
        </section>
    );
};

export default HomeCard;