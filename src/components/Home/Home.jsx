import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import './home.css'

const Home = () => {
    const homeStyles = {
        font: '"Work Sans", sans-serif',
      };
   
    return (
        <div style={homeStyles}>
             <Navbar></Navbar>
            <div className='ms-8 md:ms-64'>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;