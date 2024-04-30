import React from 'react';
import Banner from '../../components/Banner/Banner';
import About from '../../components/About/About';
import Service from '../../components/Services/Service';
import ContactBanner from '../../components/ContactBanner/ContactBanner';
import Products from '../../components/Products/Products';
import OurTeam from '../../components/OurTeam/OurTeam';
import Features from '../../components/Features/Features';
import Testimonial from '../../components/Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <ContactBanner></ContactBanner>
            <Products></Products>
            <OurTeam></OurTeam>
            <Features></Features>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;