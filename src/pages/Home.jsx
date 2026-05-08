import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Fleet from '../components/Fleet';
import About from '../components/About';
import Packages from '../components/Packages';
import Testimonials from '../components/Testimonials';
import Stats from '../components/Stats';
import Contact from '../components/Contact';
import SEO from '../components/SEO';

const Home = () => {
    return (
        <>
            <SEO
                title="Best Cabs & Taxi Service in Hyderabad"
                description="Premium taxi services in Hyderabad. One-way outstation, airport transfers, and local packages. Call 9948058679 or 9063986349 for bookings."
                keywords="taxi Hyderabad, car rentals, airport taxi Hyderabad, outstation cabs"
            />
            <Hero />
            <About />
            <Services />
            <Packages />
            <Fleet />
            <Stats />
            <Testimonials />
            <Contact />
        </>
    );
};

export default Home;
