import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Helmet } from "react-helmet";


const Registration = () => {

    const {createUser, updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();
    const { register, handleSubmit,reset,formState: { errors }  } = useForm();
    const onSubmit = (data) => {
        createUser(data.email,data.password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate('/')
            updateUserProfile(data.name, data.photoURL)
            .then(()=>{
              const saveUser = {name: data.name, email: data.email, img: data.photoURL}
              fetch('http://localhost:5000/users',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(saveUser)
      
              })
              .then(res=>res.json())
              .then(()=>{
                if(data.insertedId){
                  // console.log('user profile update')
                  reset();
                  navigate('/');
                }
              })
            
            })
         .catch(error =>console.log(error))
        })
    }

    return (
        <div>
                <Helmet>
                <title>Toy Station | Registration</title>

            </Helmet>
            <div className="hero min-h-screen">
                <div className="hero-content mx-auto w-9/12">


                    <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"  {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                                {errors.name && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">photoURL</span>
                                </label>
                                <input type="text"  {...register("photoURL", { required: true })} name="photoURL" placeholder="photoURL" className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"  {...register("password", { required: true })} name="password" placeholder="password" className="input input-bordered" />
                                {errors.password && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-black text-white">Registration</button>
                            </div>
                            <div className="mt-5 text-sm"><p>Are You Already login?<span className="mx-3"><Link to='/login' className="text-blue-500 ">Login Here</Link></span></p></div>
                          <SocialLogin></SocialLogin>
                        </form>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Registration;