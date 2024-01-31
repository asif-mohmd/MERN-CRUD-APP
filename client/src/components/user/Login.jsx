import React, { useEffect, useState } from "react";
import axios from "../../services/Axios"
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector, } from "react-redux";
import {userLogin} from "../../redux/Slices/authSlice"
import { toast } from "react-toastify";
import { setUserData } from "../../redux/Slices/userDataSlice";

function Login() {

    const [creds,setCreds] = useState({email:"",password:""})
    const [load,setLoad] = useState(false)
    const user = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
   
    

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
        const {data} = await axios.post("/login",creds)
        console.log("before redux",data)
        localStorage.setItem('jwt',data.token)
        dispatch(setUserData(data))
        dispatch(userLogin())
        console.log("after redux")
        navigate("/profile");

    }catch(err){
      console.log(err,'errrr');
      // toast.error(err.request.status === 402 ?'Invalid Email Id': 'Incorrect Password')
    }

    setCreds({
      email:"",
      password:""
    })

  


  };
  useEffect(() => {
    if(user.isLogin){
      navigate('/profile')
    }
  },[]) 

  return (
    <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center bg-slate-100">
      <div className="flex justify-center self-center  z-10 shadow-2xl rounded-3xl  ">
        <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
          <div className="mb-4">
            <h3 className="font-semibold text-2xl text-gray-800">Sign In </h3>
            <p className="text-gray-500">Please sign in to your account.</p>
          </div>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 tracking-wide">
                Email
              </label>
              <input
                value={creds.email}
                onChange={(e)=>setCreds({...creds,email:e.target.value})}
                className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                type="email"
                placeholder="mail@gmail.com"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                Password
              </label>
              <input
                
                value={creds.password}
                onChange={(e)=>setCreds({...creds,password:e.target.value})}
                className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                type="text"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              {/* <div className="text-sm">
                <a href=" " className="text-green-400 hover:text-green-500">
                  Forgot your password?
                </a>
              </div> */}
            </div>
            <div>
              {load ? (
                <BeatLoader
                  color="#10B981"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                />
              ) : (
                <button
                  type="submit"
                  className="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                >
                  Sign in
                </button>
              )}
            </div>
          </form>
          <div className="pt-5 text-center text-gray-400 text-xs">
            <span>
              Copyright © 2023{" "}
              <Link
                className="text-sm text-blue-500 hover:underline "
                to="/signup"
              >
                Signup
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
