
import { Helmet } from 'react-helmet';
import ExtraSection from '../ExtraSection/ExtraSection';
import Gellary from '../Gellary/Gellary';
import SecondExtra from '../SecondExtra/SecondExtra';
import Shopbycategory from '../Shopbycategory/Shopbycategory';
import './Home.css'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Home = () => {

  useEffect(() => {
    AOS.init();
  }, [])
    return (
        <div>
          <Helmet>
            <title>Toy Station | Home</title>
          
        </Helmet>
     
          <div className="hero pt-20 pb-20 bg-home">

  <div className="hero-content text-center ">
    <div className="max-w ">
      <h1 data-aos="fade-left" data-aos-duration="2000" className="mb-5 text-5xl text-yellow-500 font-bold">Wellcome to <span className=' text-yellow-500	 '>Toy Station</span></h1>
      <p data-aos="fade-right" data-aos-duration="2000" className="mb-5 ml-10 max-w-md text-yellow-100">Welcome to Toy Station – your #1 hotspot for brilliant toys, infant items, diversions, kids’ toy and  music toy and more.

We’re committed to giving you the plain best with attention to the most astounding quality, unwavering quality, client administration, and uniqueness.</p>
      
      <Link to='/alltoys'>
      <button className="btn btn-warning">See All ToyS</button>
      </Link>
    </div>
  </div>
</div>
<div><Gellary></Gellary></div>
<div><ExtraSection></ExtraSection></div>
<div><Shopbycategory></Shopbycategory></div>
<div><SecondExtra></SecondExtra></div>
        </div>
    );
};

export default Home;