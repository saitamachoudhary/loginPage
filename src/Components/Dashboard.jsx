import React from "react";
import { useLocation } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
const Dashboard = () => {
    const location=useLocation();
  return (
    <div className="Parent_Dashboard min-h-screen w-full flex">
      <div className="left_section min-h-screen w-[30%] bg-[#eeeee4] text-black py-8 px-10">
        <div className="elementContainer flex flex-col">
         <DropdownMenu/>
        </div>
      </div>
      <div className="right_section min-h-screen w-[70%]">
        <h1>{location.state.role}</h1>
      </div>
    </div>
  );
};

export default Dashboard;
