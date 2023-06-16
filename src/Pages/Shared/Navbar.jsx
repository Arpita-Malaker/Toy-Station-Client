import { Link } from 'react-router-dom';
import a1 from '../../assets/slinky toy.json'
import Lottie from "lottie-react";
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
// import { Tooltip } from 'react-tooltip';
import './navbar.css'
const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error));
  }
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

              <li><Link to='/alltoys'> All Toys</Link></li>

              <li><Link to='/blogs'>Blogs</Link> </li>


              {
                user?.uid ? <>
                  <li><a> My Toys</a></li>
                  <li><Link to='/addtoy'> Add A Toy</Link></li>
                  <button onClick={handleLogOut} className='btn btn-warning'>Logout</button>

                </> : <>
                  <li><button className='btn btn-warning'><Link to='/login'>Login</Link></button></li>
                </>
              }
            </ul>
          </div>
          <Lottie className='w-12' animationData={a1} loop={true} />
          <a className="btn btn-ghost normal-case text-3xl">Toy Station </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-xl">
              <li><Link to='/'>Home</Link></li>

              <li><Link to='/alltoys'> All Toys</Link></li>

              <li><Link to='/blogs'>Blogs</Link> </li>
              {
                user?.uid ? <div className='flex'>
                  <li><a> My Toys</a></li>
                  <li><Link to='/addtoy'> Add A Toy</Link></li>
                

                <div className='tooltip'>
                <img className='rounded w-10 h-10 mr-4 ' src={user.photoURL} alt="" />
                <p className='tooltiptext'>{user.displayName}</p>
                </div>
              
                  <button onClick={handleLogOut} className='btn btn-warning '>Logout</button>

                </div> : <>
                  <li><Link to='/login'><button className='btn btn-warning'>Login</button></Link></li>
                </>
              }
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Navbar;