import React from "react";
import Overview from "./Overview";
import SideBar from "./SideBar";
import WeekGraph from "./WeekGraph";

const History = () => {
  return (
    <div>
      <h1>this is log history</h1>
      <Overview />
      <WeekGraph />
      <SideBar />
    </div>
  );
};

export default History;
