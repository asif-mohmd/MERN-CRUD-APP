import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/user/Header";
import Body from "./components/user/body";
import Signup from "./components/user/Signup";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="">
      <Header/>
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/register",
        element: <Signup />,
      },
      {
        path: "/",
        element: <Body />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
