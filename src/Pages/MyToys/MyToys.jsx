import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import ReactStarsRating from 'react-awesome-stars-rating';
import Swal from "sweetalert2";


const MyToys = () => {
    const { user } = useContext(AuthContext);

    const [cata, setcata] = useState([]);




    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => {
                setcata(data)

            })


    }, [])

    // console.log(cata)


    const handleDelete=(item)=>{

        console.log(item._id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((data)=>{
            if (data.isConfirmed) {
                fetch(`http://localhost:5000/toys/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                          
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            window.location.reload(true)
                        }
                    })
            }
        })

    }
    return (
        <div>
            {
                cata.map(item => (item.sellerEmail === user.email) ? <div key={item._id}>
                    <div className="card card-side bg-base-100 flex gap-5 mt-16 mb-16 shadow-xl ml-16">
                        <figure className="ml-16"><img className="w-48" src={item.toyUrl} /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-blue-600 text-2xl ">{item.toyName}</h2>
                            <p><span className="text-blue-600 font-bold">Toy Catagory</span>: {item.subCategory}</p>
                            <p><span className="text-blue-600 font-bold">Seller Name</span>: {item.sellerName}</p>
                            <p><span className="text-blue-600 font-bold ">Seller Email</span>: {item.sellerEmail}</p>
                            <p><span className="text-blue-600 font-bold">Price</span>: ${item.price}</p>
                            <p><span className="text-blue-600 font-bold">Available quantity</span>: {item.availableQuantity}</p>
                            <p><span className="text-blue-600 font-bold">Rating</span>: <ReactStarsRating className="flex" value={item.rating} /></p>

                            <p><span className="text-blue-600 font-bold">Toy Details</span>:{item.detailDescription}</p>

                            <div className="card-actions justify-end">
                                <button onClick={()=>{handleDelete(item)}} className="btn btn-warning">Delete</button>
                                <button className="btn btn-primary">Update</button>
                            </div>
                        </div>
                    </div>

                </div> : "")
            }

        </div>
    );
};

export default MyToys;