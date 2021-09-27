import React from "react";

const DailyLogCard = ({
  name,
  calories,
  carbohydrates,
  protein,
  fats,
  weight,
  date,
  mealtype,
}) => {
  return (
    <React.Fragment>
      <div className="bg-white py-2 px-2 text-xs text-gray-700 flex grid grid-cols-5 rounded-md hover:bg-opacity-50 m-3 divide-x divide-white bg-opacity-40 shadow-lg transform hover:scale-105 transition duration-500 ease-in-out hover:animate-pulse">
        <div className="my-auto leading-3">
          <p className="font-bold capitalize">{date}</p>
        </div>
        <div className="my-auto">
          <strong>C</strong> {carbohydrates}
        </div>
        <div className="my-auto">
          <strong>P</strong> {protein}
        </div>
        <div className="my-auto">
          <strong>F</strong> {fats}
        </div>
        <div className="my-auto">
          <p className="font-extralight text-lg">{calories}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DailyLogCard;
