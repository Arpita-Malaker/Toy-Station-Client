import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Helmet } from "react-helmet";

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {

        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error))
        console.log(data);
    }
    return (
        <div>
            <Helmet>
                <title>Toy Station | Login</title>

            </Helmet>
            <div className="hero min-h-screen">
                <div className="hero-content mx-auto w-9/12">


                    <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true })} name="password" placeholder="password" className="input input-bordered" />

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