import React from "react";
import Overview from "./Overview";
import SideBar from "./SideBar";
import WeekGraph from "./WeekGraph";
import DailyInformationPage from "./DailyInformationPage";
import DailyLogCard from "./DailyLogCard";

const moment = require("moment");

const History = () => {
  //get date data
  const today = moment().format("dddd MMMM Do YYYY");
  console.log(today);
  const lastSevenDays = moment().subtract(7, "days");

  const userName = `Alex`;
  return (
    <div>
      <h1>
        Welcome {userName} <br></br>Today's Date is {today}
      </h1>

      <Overview />
      <WeekGraph />
      <SideBar />
    </div>
  );
};

export default History;
