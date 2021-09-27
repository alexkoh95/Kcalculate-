import React from "react";
import Overview from "./Overview";
import SideBar from "./SideBar";
import WeekGraph from "./WeekGraph";
import SideNavBar from "../SideNavBar";

const History = () => {
  return (
    <div>
        <div className=""><SideNavBar /></div>
            <main className="mx-4 p-9 pl-64">
      <h1>this is log history</h1>
      <Overview />
      <WeekGraph />
      <SideBar />
      </main>
    </div>
  );
};

export default History;
