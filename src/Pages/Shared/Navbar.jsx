import { Link } from 'react-router-dom';
import a1 from '../../assets/slinky toy.json'
import Lottie from "lottie-react";
const Navbar = () => {
  return (
    <div>

      <div className="navbar text-white bg-black ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-black text-white rounded-box w-52">
            <li><Link to='/'>Home</Link></li>

              <li><a> All Toys</a></li>
              <li><a> My Toys</a></li>
              <li><a> Add A Toy</a></li>
              <li><a> Blogs</a></li>
              <li><Link to='/login'>Login</Link></li>
            </ul>
          </div>
          <Lottie className='w-12' animationData={a1} loop={true} />
          <a className="btn btn-ghost normal-case text-3xl">Toy Station </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-xl">
              <li><Link to='/'>Home</Link></li>

              <li><a> All Toys</a></li>
              <li><a> My Toys</a></li>
              <li><a> Add A Toy</a></li>
              <li><a> Blogs</a></li>
              <li><Link to='/login'>Login</Link></li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Navbar;