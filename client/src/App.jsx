import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/user/Header";
import Signup from "./components/user/Signup";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/user/Login";
import { Provider } from "react-redux";
import appStore from "./redux/Store"
import Profile from "./components/user/Profile";
import AdminLogin from "./components/admin/adminLogin";
import AdminPanel from "./components/admin/AdminPanel";

const AppLayout = () => {
  return (

    <Provider store={appStore}>
    <div className="">
      {/* <Header /> */}
      <Outlet/>
    </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path:"/",
        element:<Login/>
      },
      {
        path:"/profile",
        element:<Profile/>
      },
      {
        path:"/signup",
        element:<Signup/>
      },
      {
        path:"/admin",
        element:<AdminLogin/>
      },
      {
        path:"/adminPanel",
        element:<AdminPanel/>
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
