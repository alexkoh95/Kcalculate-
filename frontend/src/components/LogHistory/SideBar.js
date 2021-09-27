import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Tab } from "@headlessui/react";
import DailyLogCard from "./DailyLogCard";

const dayjs = require("dayjs");
const moment = require("moment");

const SideBar = () => {
  // =====================================================
  //                  USE STATES & VARIABLES
  // =====================================================
  const [data, setData] = useState([]);

  const fixTheFetchProblem = () => {
    fetch("/nutrition")
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    fixTheFetchProblem();
  }, []);

  //get date data
  const today = moment().format("dddd MMMM Do YYYY");
  console.log(today);
  const lastSevenDays = moment()
    .subtract(7, "days")
    .format("dddd MMMM Do YYYY");
  console.log(lastSevenDays);

  const todayDate = data.filter(
    (element) => element.date === "2021-09-26T00:00:00.000+00:00"
  );

  // console.log(data[0].date);
  // const newDate = new Date(data[0].date);
  // console.log([newDate]);

  return (
    <div className="relative space-y-10 pb-2 p-4 rounded-lg border-2 border-white">
      {today}
      <div>This is SideBar</div>;
      <div>
        <Link to={`/loghistory/DailyInformationPage`}>
          Click This to go to DailyInformationPage
        </Link>
        <DailyLogCard />
      </div>
    </div>
  );
};

export default SideBar;
