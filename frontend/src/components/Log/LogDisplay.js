import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FoodCard from "./FoodCard";
import LogDisplayNav from "./LogDisplayNav";
import { Tab } from "@headlessui/react";

const dayjs = require("dayjs");

const LogDisplay = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/nutrition")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  // const day = dayjs(data[0].date).format('dddd, MMMM D, YYYY')
  // console.log(day)

  const mealtype = data.map((meal) => meal.mealtype);

  return (
    <div className="relative space-y-10 pb-2 p-4 rounded-lg border-2 border-white">
      <Tab.Group>
        <Tab.List>
          <Tab>Breakfast</Tab>
          <Tab>Lunch</Tab>
          <Tab>Dinner</Tab>
          <Tab>Snack</Tab>
        </Tab.List>

        <Tab.Panels>
          <Tab.Panel>{mealtype === "lunch" && {}}</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
    // {/* <LogDisplayNav  /> */}

    // {/* <h1 className='text-left font-bold pl-3 text-white'>{day}</h1> */}
    //     <div className="">
    //     {data !== [] &&
    //             data.map((itemNutrition) =>
    //               <Link to={`/nutrition/${itemNutrition._id}`}><FoodCard  {...itemNutrition}
    //                 />
    //                 </Link>
    //             )}
    //         </div>
    //     <div className="grid grid-cols-4">
    //         <div></div>
    //         <div className="col-span-2 ">
    //             <h1 className="text-left text-xs font-medium">total carbohydrates: {data.map(item => item.carbohydrates).reduce((prev, curr) => prev + curr, 0)}g</h1>
    //             <h1 className="text-left text-xs font-medium">total protein: {data.map(item => item.protein).reduce((prev, curr) => prev + curr, 0)}g</h1>
    //             <h1 className="text-left text-xs font-medium">total fats: {data.map(item => item.fats).reduce((prev, curr) => prev + curr, 0)}g</h1>
    //             </div>
    //     <div>
    //         <h1 className="text-right pr-5 text-3xl font-bold">{data.map(item => item.calories).reduce((prev, curr) => prev + curr, 0)}</h1>
    //     </div>
    // </div></div>
  );
};

export default LogDisplay;
