import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";


const SocialLogin = () => {

  const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname||'/';
    // console.log(from);
    const {googleLogin } = useContext(AuthContext);

    const handleSocialLogin=()=>{
      googleLogin()
      .then(result => {
          const loggedInUser = result.user;
          console.log(loggedInUser);
          const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email, img:loggedInUser.photoURL }
          fetch('http://localhost:5000/users', {
              method: 'POST',
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify(saveUser)
          })
              .then(res => res.json())
              .then(() => {
                
              });
              navigate(from, { replace: true });
      })
  }


    return (
        <div className=" social-button-container w-50  mt-3">
        <div className="">
          <button onClick={handleSocialLogin} >
          <img
            
            className="h-10 ml-10 social-button "
            src="https://i.ibb.co/gSTHXZJ/google-btn.png"
            alt=""
          />
          </button>
        </div>
       
      </div>
    );
};

export default SocialLogin;