import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/user/Header";
import Body from "./components/user/body";
import Signup from "./components/user/Signup";

const AppLayout = () => {


    return(   
       <div className="">
        {/* <Header/> */}
        {/* <Body/>  */}
        <Signup/>
       </div> 
    )
}    


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>)