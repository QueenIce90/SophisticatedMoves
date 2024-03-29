// HomePage.js

import React from 'react';
import './Homepage.css';
import NavBar from './Navbar';

function HomePage() {
    
return (
    <>
    <NavBar />

    <div className="home-page">
        <section className="intro-section">
        <div className="intro-content">
            

            {/* Add any introductory content here */}
        </div>
        </section>
        {/* <img src={process.env.PUBLIC_URL + '/images/myimage.jpg'} alt="My Image" /> */}
        <div className="moving-truck-container-home">
        <img src={process.env.PUBLIC_URL + '/1.png'} alt="Moving Truck 1" onClick={() => window.location.href = '/contact'} />
        <img src={process.env.PUBLIC_URL + '/3.png'} alt="Moving Truck 2" onClick={() => window.location.href = '/contact'} />
        <img src={process.env.PUBLIC_URL + '/2.png'} alt="Moving Truck 3" onClick={() => window.location.href = '/contact'} />
        <img src={process.env.PUBLIC_URL + '/4.png'} alt="Moving Truck 4" />
        <img src={process.env.PUBLIC_URL + '/5.png'} alt="Moving Truck 5" />
        <img src={process.env.PUBLIC_URL + '/6.png'} alt="Moving Truck 6" onClick={() => window.location.href = '/products'} /> 
        </div>
    </div>
    <div className='copyright'>
            <p>Copyright © 2023. All rights reserved. Sophisticated Moves</p>
        </div>
    </>
);
}

export default HomePage;
