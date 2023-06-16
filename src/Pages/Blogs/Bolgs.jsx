import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";


const Bolgs = () => {
    
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
       console.log(data);


    }
  
    return (
        <div>
            <Helmet>
            <title>Toy Station | Blogs</title>
            
        </Helmet>

        <div className="w-full mt-16 mb-16">
            <div className="text-center"><h2 className="text-blue-600 text-center text-3xl mb-10 font-bold mt-16">Add A toy</h2></div>
            <form onSubmit={handleSubmit(onSubmit)} className="ml-24">
                <div className="flex gap-6">
                    <div className="form-control  mt-8">
                        <label className="label">
                            <span className="label-text ">Toy Name </span>
                        </label>
                        <input type="text" {...register("toyName", { required: true })} placeholder="toyName" className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control mt-8">
                        <label className="label">
                            <span className="label-text">Pick a Image</span>

                        </label>
                        <input type="text" {...register("image", { required: true })}  placeholder="image" className="file-input file-input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control mt-8">
                        <label className="label">
                            <span className="label-text">Sub-category</span>

                        </label>
                        <input type="text" {...register("sub-category", { required: true })}  placeholder="Sub-catagory" className="file-input file-input-bordered w-full max-w-xs" />

                    </div>

                    <div className="form-control mt-8">
                        <label className="label">
                            <span className="label-text">Available quantity</span>

                        </label>
                        <input type="text" {...register("Availablequantity", { required: true })}  placeholder="Availablequantity" className="file-input file-input-bordered w-full max-w-xs" />

                    </div>


                </div>
                <div className="flex gap-6 "> <div className="form-control  mt-8">
                    <label className="label">
                        <span className="label-text ">Instructor name </span>
                    </label>
                    <input type="text" {...register("name", { required: true })}  className="input input-bordered w-full max-w-xs" ></input>

                </div>
                    <div className="form-control  mt-8">
                        <label className="label">
                            <span className="label-text ">Instructor Email: </span>
                        </label>
                        <input type="text" {...register("email", { required: true })}  className="input input-bordered w-full max-w-xs" />

                    </div>

                </div>
                <div className="flex gap-6 ">
                    <div className="form-control  mt-8">
                        <label className="label">
                            <span className="label-text">Ratings </span>
                        </label>
                        <input type="number" {...register("ratings", { required: true })} placeholder="ratings" className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control  mt-8">
                        <label className="label">
                            <span className="label-text ">Price </span>
                        </label>
                        <input type="number" {...register("price", { required: true })} placeholder="Price" className="input input-bordered w-full max-w-xs" />

                    </div>

                </div>
                   
                <div className="form-control mt-6">
                    <label className="label">
                        <span className="label-text">Detail description</span>

                    </label>
                    <textarea
                        {...register("description", { required: true })}
                        className="textarea w-9/12 textarea-bordered h-24" placeholder="description"></textarea>

                </div>
               


                    <div className="form-control mt-6">

                        <input type="submit" className="btn btn-warning w-full max-w-xs" value="Add Toy item" />

                    </div>

             



               



            </form>

        </div>
            
        </div>
    );
};

export default Bolgs;