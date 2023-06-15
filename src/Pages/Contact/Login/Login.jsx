import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content mx-auto w-9/12">


                    <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                            <button className="btn bg-black text-white">Login</button>
                            </div>
                            <div className="mt-5 text-sm"><p>Are You New?<span className="mx-3"><Link to='/registration' className="text-blue-500 ">Register Here</Link></span></p></div>
                            <SocialLogin></SocialLogin>
                        </form>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Login;