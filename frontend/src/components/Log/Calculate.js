import React, { useState, useEffect } from "react";

const Calculate = (props) => {
  // =====================================================
  //                  USE STATES & VARIABLES
  // =====================================================
  const currentDate = new Date();
  const isoDate = currentDate.toISOString().split("T")[0];
  const [date, setDate] = useState(isoDate);
  const [servingSize, setServingSize] = useState(0);
  let temporaryString = "Snack";
  const [meal, setMeal] = useState(temporaryString);

  const [nutritionCalculated, setNutritionalCalculated] = useState(
    props.nutritionToBeCalculated
  );

  // =====================================================
  //                  FUNCTIONS
  // =====================================================
  const handleMealTypeChange = async (e) => {
    await setMeal((prevstate) => {
      return e.target.value;
    });
    await setNutritionalCalculated((prevState) => {
      const newArray = [...props.nutritionToBeCalculated];
      let addedMealType = [
        Object.assign(newArray[0], { mealType: e.target.value }),
      ];
      return addedMealType;
    });
  };
  return <div>Hello, this is calculate component</div>;
};

export default Calculate;
