
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import './home.css'
import Banner from '../Banner/Banner';

const Home = () => {
    const homeStyles = {
        font: '"Work Sans", sans-serif',
      };
   
    return (
        <div style={homeStyles}>
             <Navbar></Navbar>
            <div className='md:ms-64'>
            <Banner></Banner>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;