import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

const moment = require("moment");

const WeekGraph = () => {
  const [nutritionData, setNutritionData] = useState([]);

  useEffect(() => {
    fetch(`/nutrition/`)
      .then((res) => res.json())
      .then((data) => setNutritionData(data));
  }, []);

  //Check Date
  const todayCheck = moment().format("dddd MMMM Do YYYY");
  const l1DayCheck = moment().subtract(1, "day").format("dddd MMMM Do YYYY");
  const l2DayCheck = moment().subtract(2, "day").format("dddd MMMM Do YYYY");
  const l3DayCheck = moment().subtract(3, "day").format("dddd MMMM Do YYYY");
  const l4DayCheck = moment().subtract(4, "day").format("dddd MMMM Do YYYY");
  const l5DayCheck = moment().subtract(5, "day").format("dddd MMMM Do YYYY");
  const l6DayCheck = moment().subtract(6, "day").format("dddd MMMM Do YYYY");

  //Filter data by date
  //today's Nutrition Data
  const todayNutritionData = nutritionData.filter(
    (element) => moment(element.date).format("dddd MMMM Do YYYY") === todayCheck
  );
  const todayCalories = todayNutritionData
    ?.map((element) => element.calories)
    .reduce((prev, curr) => prev + curr, 0);
  const todayCarbs = todayNutritionData
    ?.map((element) => element.carbohydrates)
    .reduce((prev, curr) => prev + curr, 0);
  const todayProtein = todayNutritionData
    ?.map((element) => element.protein)
    .reduce((prev, curr) => prev + curr, 0);
  const todayFats = todayNutritionData
    ?.map((element) => element.fats)
    .reduce((prev, curr) => prev + curr, 0);

  //L1 Day Nutrition Data
  const l1NutritionData = nutritionData.filter(
    (element) => moment(element.date).format("dddd MMMM Do YYYY") === l1DayCheck
  );
  const l1Calories = l1NutritionData
    ?.map((element) => element.calories)
    .reduce((prev, curr) => prev + curr, 0);
  const l1Carbs = l1NutritionData
    ?.map((element) => element.carbohydrates)
    .reduce((prev, curr) => prev + curr, 0);
  const l1Protein = l1NutritionData
    ?.map((element) => element.protein)
    .reduce((prev, curr) => prev + curr, 0);
  const l1Fats = l1NutritionData
    ?.map((element) => element.fats)
    .reduce((prev, curr) => prev + curr, 0);

  //L2 Day Nutrition Data
  const l2NutritionData = nutritionData.filter(
    (element) => moment(element.date).format("dddd MMMM Do YYYY") === l2DayCheck
  );
  const l2Calories = l2NutritionData
    ?.map((element) => element.calories)
    .reduce((prev, curr) => prev + curr, 0);
  const l2Carbs = l2NutritionData
    ?.map((element) => element.carbohydrates)
    .reduce((prev, curr) => prev + curr, 0);
  const l2Protein = l2NutritionData
    ?.map((element) => element.protein)
    .reduce((prev, curr) => prev + curr, 0);
  const l2Fats = l2NutritionData
    ?.map((element) => element.fats)
    .reduce((prev, curr) => prev + curr, 0);

  //L3 Day Nutrition Data
  const l3NutritionData = nutritionData.filter(
    (element) => moment(element.date).format("dddd MMMM Do YYYY") === l3DayCheck
  );
  const l3Calories = l3NutritionData
    ?.map((element) => element.calories)
    .reduce((prev, curr) => prev + curr, 0);
  const l3Carbs = l3NutritionData
    ?.map((element) => element.carbohydrates)
    .reduce((prev, curr) => prev + curr, 0);
  const l3Protein = l3NutritionData
    ?.map((element) => element.protein)
    .reduce((prev, curr) => prev + curr, 0);
  const l3Fats = l3NutritionData
    ?.map((element) => element.fats)
    .reduce((prev, curr) => prev + curr, 0);

  //L4 Day Nutrition Data
  const l4NutritionData = nutritionData.filter(
    (element) => moment(element.date).format("dddd MMMM Do YYYY") === l4DayCheck
  );
  const l4Calories = l4NutritionData
    ?.map((element) => element.calories)
    .reduce((prev, curr) => prev + curr, 0);
  const l4Carbs = l4NutritionData
    ?.map((element) => element.carbohydrates)
    .reduce((prev, curr) => prev + curr, 0);
  const l4Protein = l4NutritionData
    ?.map((element) => element.protein)
    .reduce((prev, curr) => prev + curr, 0);
  const l4Fats = l4NutritionData
    ?.map((element) => element.fats)
    .reduce((prev, curr) => prev + curr, 0);

  //L5 Day Nutrition Data
  const l5NutritionData = nutritionData.filter(
    (element) => moment(element.date).format("dddd MMMM Do YYYY") === l5DayCheck
  );
  const l5Calories = l5NutritionData
    ?.map((element) => element.calories)
    .reduce((prev, curr) => prev + curr, 0);
  const l5Carbs = l5NutritionData
    ?.map((element) => element.carbohydrates)
    .reduce((prev, curr) => prev + curr, 0);
  const l5Protein = l5NutritionData
    ?.map((element) => element.protein)
    .reduce((prev, curr) => prev + curr, 0);
  const l5Fats = l5NutritionData
    ?.map((element) => element.fats)
    .reduce((prev, curr) => prev + curr, 0);

  //L6 Day Nutrition Data
  const l6NutritionData = nutritionData.filter(
    (element) => moment(element.date).format("dddd MMMM Do YYYY") === l6DayCheck
  );
  const l6Calories = l6NutritionData
    ?.map((element) => element.calories)
    .reduce((prev, curr) => prev + curr, 0);
  const l6Carbs = l6NutritionData
    ?.map((element) => element.carbohydrates)
    .reduce((prev, curr) => prev + curr, 0);
  const l6Protein = l6NutritionData
    ?.map((element) => element.protein)
    .reduce((prev, curr) => prev + curr, 0);
  const l6Fats = l6NutritionData
    ?.map((element) => element.fats)
    .reduce((prev, curr) => prev + curr, 0);

  //Display Day
  const today = moment().format("dddd");
  const l1Day = moment().subtract(1, "day").format("dddd");
  const l2Day = moment().subtract(2, "day").format("dddd");
  const l3Day = moment().subtract(3, "day").format("dddd");
  const l4Day = moment().subtract(4, "day").format("dddd");
  const l5Day = moment().subtract(5, "day").format("dddd");
  const l6Day = moment().subtract(6, "day").format("dddd");

  const data = {
    labels: [today, l1Day, l2Day, l3Day, l4Day, l5Day, l6Day],
    datasets: [
      {
        label: "Calories",
        data: [
          todayCalories,
          l1Calories,
          l2Calories,
          l3Calories,
          l4Calories,
          l5Calories,
          l6Calories,
        ],
        backgroundColor: "rgb(255, 99, 132)",
      },
      {
        label: "Carbs(g)",
        data: [
          todayCarbs,
          l1Carbs,
          l2Carbs,
          l3Carbs,
          l4Carbs,
          l5Carbs,
          l6Carbs,
        ],
        backgroundColor: "rgb(54, 162, 235)",
      },
      {
        label: "Protein(g)",
        data: [
          todayProtein,
          l1Protein,
          l2Protein,
          l3Protein,
          l4Protein,
          l5Protein,
          l6Protein,
        ],
        backgroundColor: "rgb(75, 192, 192)",
      },
      {
        label: "Fats(g)",
        data: [todayFats, l1Fats, l2Fats, l3Fats, l4Fats, l5Fats, l6Fats],
        backgroundColor: "rgb(4, 244, 100)",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          stacked: true,
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          stacked: true,
        },
      ],
    },
  };

  const StackedBar = () => (
    <>
      <div className="header">
        <h1 className="title">Stacked Bar Chart</h1>
        <div className="links">
          <a
            className="btn btn-gh"
            href="https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/StackedBar.js"
          >
            Github Source
          </a>
        </div>
      </div>
      <Bar data={data} options={options} />
    </>
  );

  return (
    <div>
      This is WeekGraph
      <Bar data={data} options={options} />
    </div>
  );
};

export default WeekGraph;
