import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Tab } from "@headlessui/react";
import DailyLogCard from "./DailyLogCard";
import DailyInformationPage from "./DailyInformationPage";

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

  //getting data by date
  // const todayDate = data.filter(
  //   (element) => element.date === "2021-09-26T00:00:00.000+00:00"
  // );
  // const
  // const todayDate = "2021-09-26T00:00:00.000+00:00";

  //getting breakfast data by date
  //  const breakfast = meal.filter(ele => ele.mealtype === 'Breakfast' && ele.date === '2020-02-14T16:00:00.000Z')
  //  const breakfastKcal = breakfast.map(item => item.calories).reduce((prev, curr) => prev + curr, 0)
  //  console.log(breakfastKcal)

  return (
    <div className="relative space-y-10 pb-2 p-4 rounded-lg border-2 border-white">
      {today}
      <div>This is SideBar</div>;
      <div>
        <Link to={`/loghistory/DailyInformationPage/${data.id}`}>
          {data.map((element, index) => (
            <Link to={`/loghistory/DailyInformationPage/${element.date}`}>
              <h3>
                <strong>
                  {moment(element.date).format("dddd MMMM Do YYYY")}
                </strong>
              </h3>
              <DailyLogCard />
            </Link>
          ))}
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
