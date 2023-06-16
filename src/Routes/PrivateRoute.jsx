

import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <progress className="progress w-56"></progress>;
    }

    if(user){
        

        return children;
    }
    else{
        Swal.fire({
            title: ' please Login to See Details ',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'login Now'
          })
    }
    
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
    
};

export default PrivateRoute;