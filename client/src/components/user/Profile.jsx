import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { userLogout } from "../../redux/Slices/authSlice";
import { clearUserData } from "../../redux/Slices/userDataSlice";
import UpdateProfilePic from "./upload/UpdateProfilePic";

const Profile = () => {
  const [modal, setmodal] = useState(false);
  const user = useSelector((store) => store.auth);
  const {userData} = useSelector((store) => store.userData)
  const userImg = useSelector((store) => store.userData.userImg);
  const navigate = useNavigate();
  const dispatch = useDispatch()


  const logout =()=>{
   localStorage.removeItem('jwt')
   dispatch(clearUserData())
   
   dispatch(userLogout())
   navigate('/')
  }

 console.log("Redux took data:",userData)

  const closeModal = () => {
    setmodal(false);
  };

  useEffect(() => {
    if (!user.isLogin) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      ></link>
      <div className="p-16 bg-slate-100 h-screen">
        <div className="p-8 bg-white shadow-xl mt-24 rounded-2xl">
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-3">
            {" "}
            <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
              {" "}
            </div>{" "}
            <div className="relative inline-block">
              {" "}
              <img
                onClick={() => setmodal(true)}
                src={
                  userImg
                    ? userImg
                    : "https://icon-library.com/images/no-profile-pic-icon/no-profile-pic-icon-11.jpg"
                }
                className="cursor-pointer w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute 
              inset-x-0 top-0 -mt-24 flex items-center justify-center 
               duration-300 ease-in-out hover:scale-105 hover:opacity-70"
                alt=""
                title={userImg ? "Change Photo" : "Add photo"}
              />{" "}
            </div>{" "}
            <div className="space-x-8 flex text-xs justify-between mt-32 md:mt-0 md:justify-end">
              <button
                onClick={logout}
                className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
              >
                Logout
                <span className="text-blueGray-400 ml-2 cursor-pointer">
                  <FontAwesomeIcon icon={faSignOutAlt} className="text-sm" />
                </span>
              </button>
            </div>
          </div>{" "}
          <div className="mt-20 text-center border-b py-8 pb-12">
            {" "}
            <h1 className="text-4xl font-medium text-gray-700">
              {userData.name},{" "}
              <span className="font-light text-gray-500">{userData.age}</span>
            </h1>{" "}
            <p className="font-light text-gray-600 mt-3">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
              {userData.location}
            </p>{" "}
            <p className="mt-8 text-gray-500">{userData.job}</p>{" "} 
          </div>{" "}
          <div className="mt-12 flex flex-col justify-center">
            {" "}
            <p className="text-gray-600 text-center font-light lg:px-16">
              An artist of considerable range, Ryan — the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
              and records all of his own music, giving it a warm, intimate feel
              with a solid groove structure. An artist of considerable range.
            </p>{" "}
            <button className="text-indigo-500 py-2 px-4  font-medium mt-4">
              {" "}
              Show more
            </button>{" "} 
          </div>
        </div>
        <UpdateProfilePic modal={modal} closeModal={closeModal} id={userData._id}/>
      </div>
    </>
  );
};

export default Profile;
