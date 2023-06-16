import { useEffect } from "react";
import { useState } from "react";
// import { useQuery, useQueryClient } from "react-query";
import { useLoaderData, useParams } from "react-router-dom";
import ReactStarsRating from 'react-awesome-stars-rating';
import { Helmet } from "react-helmet";



const ToyDetails = () => {
    const { id } = useParams();
    // console.log(id);
    const datas = useLoaderData();
    console.log(datas);

    const [cata, setcata] = useState([]);



    useEffect(() => {



        const newdata = datas.find(data => data._id == id);
        setcata(newdata);


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // console.log('match data', cata);

    // const {data: toys =[]}=useQueryClient({

    //     queryKey:['toys',id],
    //     queryFn: async()=>{
    //         const res = await fetch(`https://toy-station-server-arpita-malaker.vercel.app/toys/${id}`)
    //         return res.json();
    //     }

    //     })

    //     console.log(toys);



    return (
     <div>
           <Helmet>
        <title>Toy Station | Toy Details</title>
      
    </Helmet>
        <div className="card card-side bg-base-100 flex gap-10 mt-16 mb-16 shadow-xl ml-16">
            <figure className="ml-16"><img src={cata.toyUrl} /></figure>
            <div className="card-body">
                <h2 className="card-title text-blue-600 text-2xl ">{cata.toyName}</h2>
                <p><span className="text-blue-600 font-bold">Toy Catagory</span>: {cata.subCategory}</p>
                <p><span className="text-blue-600 font-bold">Seller Name</span>: {cata.sellerName}</p>
                <p><span className="text-blue-600 font-bold ">Seller Email</span>: {cata.sellerEmail}</p>
                <p><span className="text-blue-600 font-bold">Price</span>: ${cata.price}</p>
                <p><span className="text-blue-600 font-bold">Available quantity</span>: {cata.availableQuantity}</p>
                <p><span className="text-blue-600 font-bold">Rating</span>: <ReactStarsRating className="flex" value={cata.rating} /></p>

                <p><span className="text-blue-600 font-bold">Toy Details</span>:{cata.detailDescription}</p>

               
            </div>
        </div>
     </div>
    );
};

export default ToyDetails;