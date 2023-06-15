import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import ReactStarsRating from 'react-awesome-stars-rating';

const Shopbycategory = () => {

  const [cata, setcata] = useState([]);
  // const [animals, setAnimals] = useState([]);

  useEffect(() => {
    fetch('toys.json')
      .then(res => res.json())
      .then(data => {
        setcata(data)
          , console.log(data)
      })


  }, [])

  console.log(cata)

  // useEffect(()=>{

  //     const animalData = cata.find(c=>c.subCategory==="Stuffed Animals");
  //     setAnimals(animalData);


  // },[])

  // console.log(animals)



  return (
    <div className="mt-16">

      <div className="mt-16 mb-16">
        <h2 className='text-3xl text-green-800 font-bold text-center'>Choose Catagory What you Want!!!</h2>

      </div>

      <Tabs>
        <TabList className="flex justify-center gap-3 mb-16  ">
          <Tab ><button className="btn btn-outline btn-success">Stuffed Animals</button></Tab>
          <Tab > <button className="btn btn-outline btn-success">Puzzles</button></Tab>
          <Tab ><button className="btn btn-outline btn-success"> Interactive Toys</button></Tab>

        </TabList>




        <TabPanel className="grid grid-rows-1 grid-flow-col gap-4 lg:grid-rows-1 md:grid-rows-1 sm:grid-rows-3 ms-10">
          {
            cata.slice(0, 9).map((item) => (item.subCategory === "Stuffed Animals") ? <div key={item._id} >

              <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className=" h-48" src={item.toyUrl} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {item.toyName}
                    <div ><ReactStarsRating className="flex" value={item.rating} /></div>
                  </h2>
                  <p className="text-blue-500 "><span className=" font-bold" >Price:$ </span>{item.price}</p>
                  <div className="card-actions justify-center">
                    <button className="btn btn-warning"> See Details</button>
                  </div>
                </div>
              </div>
            </div> : "")
          }
        </TabPanel>
        <TabPanel className="grid grid-rows-1 grid-flow-col gap-4 lg:grid-rows-1 md:grid-rows-1 sm:grid-rows-3 ms-10">
          {
            cata.map((item) => (item.subCategory === "Puzzles") ? <div key={item._id}>

              <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className=" h-48" src={item.toyUrl} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {item.toyName}
                    <div ><ReactStarsRating className="flex" value={item.rating} /></div>
                  </h2>
                  <p className="text-blue-500 "><span className=" font-bold" >Price:$ </span>{item.price}</p>
                  <div className="card-actions justify-center">
                    <button className="btn btn-warning"> See Details</button>
                  </div>
                </div>
              </div>
            </div> : "")
          }
        </TabPanel>
        <TabPanel className="grid grid-rows-1 grid-flow-col gap-4 lg:grid-rows-1 md:grid-rows-1 sm:grid-rows-3 ms-10">
          {
            cata.map((item) => (item.subCategory === "Interactive Toys") ? <div key={item._id}>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className=" h-48" src={item.toyUrl} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {item.toyName}
                    <div ><ReactStarsRating className="flex" value={item.rating} /></div>
                  </h2>
                  <p className="text-blue-500 "><span className=" font-bold" >Price:$ </span>{item.price}</p>
                  <div className="card-actions justify-center">
                    <button className="btn btn-warning"> See Details</button>
                  </div>
                </div>
              </div>
            </div> : "")
          }
        </TabPanel>


      </Tabs>

    </div>
  );
};

export default Shopbycategory;