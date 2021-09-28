import React from "react";
import Overview from "./Overview";
import SideBar from "./SideBar";
import WeekGraph from "./WeekGraph";
import DailyInformationPage from "./DailyInformationPage";
import DailyLogCard from "./DailyLogCard";
import SideNavBar from "../SideNavBar";

const moment = require("moment");

const History = () => {
  //get date data
  const today = moment().format("dddd MMMM Do YYYY");
  console.log(today);
  const lastSevenDays = moment().subtract(7, "days");

  const userName = `Alex`;
  return (
    <div>
      <div className="">
        <SideNavBar />
      </div>
      <main className="mx-4 p-9 pl-64">
        <div className="grid grid-cols-3 pt-2 space-x-5">
          <div>
            <SideBar />
          </div>

          <div className="col-span-2 p-3">
            <h1>
              Welcome {userName} <br></br>Today's Date is {today}
            </h1>

            <Overview />
            <WeekGraph />
          </div>
        </div>
      </main>
    </div>
  );
};

export default History;
