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

  const [nutritionCalculated, setNutritionCalculated] = useState([]);

  useEffect(() => {
    setNutritionCalculated([...props.nutritionDataToCalculate]);
  }, [props.nutritionDataToCalculate]);

  // =====================================================
  //                  FUNCTIONS
  // =====================================================
  const handleMealTypeChange = async (e) => {
    await setMeal((prevstate) => {
      return e.target.value;
    });
    await setNutritionCalculated((prevState) => {
      const newArray = [...nutritionCalculated];
      let addedMealType = [
        Object.assign(newArray[0], { mealType: e.target.value }),
      ];
      return addedMealType;
    });
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
    setNutritionCalculated((prevState) => {
      const newArray = [...nutritionCalculated];
      let addedDate = [Object.assign(newArray[0], { date: date })];
      return addedDate;
    });
  };

  const handleInputChange = (event) => {
    setServingSize(event.target.value);
  };

  const handleCalculate = (event) => {
    event.preventDefault();
    setNutritionCalculated((prevState) => {
      const newArray = [...nutritionCalculated];
      const chosenItem = newArray[event.target.id];
      const newItem = {};
      for (const [key, value] of Object.entries(chosenItem)) {
        if (
          key == "Calories" ||
          key == "Carbohydrates" ||
          key == "Protein" ||
          key == "Fat" ||
          key == "ServingSizeg"
        ) {
          newItem[key] = Math.round(value * servingSize);
        } else {
          newItem[key] = value;
        }
      }
      newArray.splice(event.target.id, 1, newItem);
      return newArray;
    });
  };

  let printMealTypeChange = nutritionCalculated?.map((element, index) => {
    return (
      <tr key={index}>
        <td className="px-3 py-3">
          <strong>{element.Name}</strong>
        </td>
        <td className="px-3 py-3">
          <strong>⚡</strong>
          {element.Calories}
        </td>
        <td className="px-3 py-3">
          <strong>C</strong>
          {element.Carbohydrates}
        </td>
        <td className="px-3 py-3">
          <strong>P</strong>
          {element.Protein}
        </td>
        <td className="px-3 py-3">
          <strong>F</strong>
          {element.Fat}
        </td>
        <td className="px-3 py-3">
          <strong>(g)</strong>
          {element.ServingSizeg}
        </td>

        <label>Meal Type</label>
        <select
          name="MealType"
          onChange={handleMealTypeChange}
          value={meal}
          id={index}
          type="text"
        >
          <option value="Snack">Snack</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
        </select>
        <input
          onChange={handleDateChange}
          type="date"
          className="input"
        ></input>
        <div className="ServingSize">
          <label> No. Serving</label>
          <input
            onChange={handleInputChange}
            value={servingSize}
            type="text"
            id={index}
          ></input>
          <button id={index} onClick={handleCalculate}>
            Calculate
          </button>
        </div>
      </tr>
    );
  });

  return <div>{printMealTypeChange}</div>;
};

export default Calculate;
