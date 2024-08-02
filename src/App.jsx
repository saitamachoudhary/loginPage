import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/LoginPage";
const App = () => {
   const router=createBrowserRouter([
    {
      path:'/',
      element:<Login/>
    },
    {
      path:'/Dashboard',
      element:<Dashboard/>
    },
    {
      basename: "loginPage", // Set the basename to match your GitHub repo name
    }
   ])
  return (
    <div className="ParentStyling">
      <RouterProvider router={router}/>
    </div>
  );
};

export default App;
