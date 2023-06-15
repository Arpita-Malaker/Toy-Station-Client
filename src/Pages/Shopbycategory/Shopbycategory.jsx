import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Shopbycategory = () => {

    const [cata, setcata] = useState([]);
    // const [animals, setAnimals] = useState([]);

    useEffect(() => {
        fetch('toys.json')
            .then(res => res.json())
            .then(data => { 
                setcata(data)
            ,console.log (data)})

           
    }, [])

    console.log(cata)

    // useEffect(()=>{

    //     const animalData = cata.find(c=>c.subCategory==="Stuffed Animals");
    //     setAnimals(animalData);


    // },[])

    // console.log(animals)



    return (
        <div>

            <Tabs>
                <TabList className="flex justify-center gap-3 border-r-amber-950 ">
                    <Tab className="bg-amber-400">Stuffed Animals</Tab>
                    <Tab className="bg-amber-500">Puzzles</Tab>
                    <Tab className="bg-amber-600">Interactive Toys</Tab>

                </TabList>

              


  <TabPanel>
      {
        cata.map((item)=>(item.subCategory === "Stuffed Animals")?<div key={item._id}>{item.toyName}</div>:"")
      }
    </TabPanel>
    <TabPanel>
      {
        cata.map((item)=>(item.subCategory === "Puzzles")?<div key={item._id}>{item.toyName}</div>:"")
      }
    </TabPanel>
    <TabPanel>
      {
        cata.map((item)=>(item.subCategory === "Interactive Toys")?<div key={item._id}>{item.toyName}</div>:"")
      }
    </TabPanel>
              
              
            </Tabs>

        </div>
    );
};

export default Shopbycategory;