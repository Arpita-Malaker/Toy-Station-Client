import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";


const AddAToy = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        //    console.log(data);

        // const newData = {
        //     toyUrl:data.image,}

        fetch('https://toy-station-server-arpita-malaker.vercel.app/toys', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then(data => {
                // console.log(data)
                if (data.insertedId) {
                    reset();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your toy is added',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })


    }
    return (

        <div>
            <Helmet>
                <title>Toy Station | Add toy</title>

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
                            <input type="text" {...register("toyUrl", { required: true })} placeholder="image" className="file-input file-input-bordered w-full max-w-xs" />

                        </div>
                        <div className="form-control mt-8">
                            <label className="label">
                                <span className="label-text">Sub-category</span>

                            </label>
                            <input type="text" {...register("subCategory", { required: true })} placeholder="Sub-catagory" className="file-input file-input-bordered w-full max-w-xs" />

                        </div>

                        <div className="form-control mt-8">
                            <label className="label">
                                <span className="label-text">Available quantity</span>

                            </label>
                            <input type="text" {...register("availableQuantity", { required: true })} placeholder="Availablequantity" className="file-input file-input-bordered w-full max-w-xs" />

                        </div>


                    </div>
                    <div className="flex gap-6 "> <div className="form-control  mt-8">
                        <label className="label">
                            <span className="label-text ">Instructor name </span>
                        </label>
                        <input type="text" {...register("sellerName", { required: true })} value={user?.displayName} className="input input-bordered w-full max-w-xs" ></input>

                    </div>
                        <div className="form-control  mt-8">
                            <label className="label">
                                <span className="label-text ">Instructor Email: </span>
                            </label>
                            <input type="text" {...register("sellerEmail", { required: true })} value={user?.email} className="input input-bordered w-full max-w-xs" />

                        </div>

                    </div>
                    <div className="flex gap-6 ">
                        <div className="form-control  mt-8">
                            <label className="label">
                                <span className="label-text">Ratings </span>
                            </label>
                            <input type="number" {...register("rating", { required: true })} placeholder="ratings" className="input input-bordered w-full max-w-xs" />

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
                            {...register("detailDescription", { required: true })}
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

export default AddAToy;