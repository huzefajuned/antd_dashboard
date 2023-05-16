import React from "react";
import SideMenuIcon from "../../components/SideMenuIcon/SideMenuIcon";
import SideMenuItem from "../../components/SideMenuItem/SideMenuItem";
import ActiveLoadsHeader from "../../components/ActiveLoadsHeader/ActiveLoadsHeader";
import ListLoads from "../../components/ListLoads/ListLoads";

const Dashboard = () => {
  return (
    <div className="bg-white-100 w-full h-screen flex flex-row  justify-center ">
      <div className="bg-gray-100 text-center w-14 m-1">
        <SideMenuIcon />
      </div>
      <div className=" bg-gray-100 w-72  m-1">
        {" "}
        <SideMenuItem />
      </div>
      <div className=" w-full m-1">
        <ActiveLoadsHeader />
        <ListLoads />
      </div>
    </div>
  );
};

export default Dashboard;
