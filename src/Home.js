import React from 'react';
import Header from './Header';
import "./Home.css";
import HomeCard from './HomeCard';

const Home = () => {
    return (
        <div className="home">
            <Header />
            <HomeCard />
        </div>
    );
};

export default Home;