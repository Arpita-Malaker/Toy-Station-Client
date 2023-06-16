import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";


const AllToys = () => {
    const [cata, setcata] = useState([]);



    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => {
                setcata(data)

            })


    }, [])

    console.log(cata);
    return (
        <div>
            <Helmet>
                <title>Toy Station | All Toys</title>

            </Helmet>
            <h2 className="text-blue-600 text-center text-3xl mb-10 font-bold mt-16">All Toys</h2>


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="text-blue-600">
                        <tr>
                            <th>Index</th>
                            <th>Seller Name/Seller Factory Name</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Available Quantity</th>
                            <th>Price</th>

                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cata.map((cart,index) => <tr key={cart._id}>
                                <td>{index+1}</td>
                                <td className="text-yellow-800">{cart.sellerName}</td>
                                <td>{cart.toyName}</td>
                                <td>{cart.subCategory}</td>
                                <td>{cart.availableQuantity}</td>
                                <td>${cart.price}</td>
                                <td><Link to={`/toydetails/${cart._id}`}><button className="btn btn-warning"> See Details</button></Link></td>

                            </tr>)
                        }

                        {/* row 2 */}

                        {/* row 3 */}

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllToys;