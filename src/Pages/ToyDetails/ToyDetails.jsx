import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";



const ToyDetails = () => {
    const { id } = useParams();
    console.log(id);
    const datas = useLoaderData();
    console.log(datas);

    const [cata, setcata] = useState([]);



    useEffect(() => {
   
          
        // const recipeData = featuredata.find(feature => feature.id == id);
        // setrecipe(recipeData);
        const newdata = datas.find(data=>data._id == id);
        setcata(newdata); 
  
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    console.log('match data',cata);

    
 
    return (
        <div>
            <h2>toy details</h2>
        </div>
    );
};

export default ToyDetails;