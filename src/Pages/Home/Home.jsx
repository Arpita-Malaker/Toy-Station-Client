
import Gellary from '../Gellary/Gellary';
import Shopbycategory from '../Shopbycategory/Shopbycategory';
import './Home.css'

const Home = () => {
    return (
        <div>
          <div className="hero min-h-screen bg-home">

  <div className="hero-content text-center ">
    <div className="max-w ">
      <h1 className="mb-5 text-5xl text-yellow-500 font-bold">Wellcome to <span className=' text-yellow-500	 '>Toy Station</span></h1>
      <p className="mb-5 ml-10 max-w-md text-yellow-100">Welcome to Toy Station – your #1 hotspot for brilliant toys, infant items, diversions, kids’ toy and  music toy and more.

We’re committed to giving you the plain best with attention to the most astounding quality, unwavering quality, client administration, and uniqueness.</p>
      <button className="btn btn-warning">See All ToyS</button>
    </div>
  </div>
</div>
<div><Gellary></Gellary></div>
<Shopbycategory></Shopbycategory>
        </div>
    );
};

export default Home;