import React from 'react';
import Banner from '../../components/Banner/Banner';
import About from '../../components/About/About';
import Service from '../../components/Services/Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Service></Service>
        </div>
    );
};

export default Home;