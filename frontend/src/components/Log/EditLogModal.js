import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const EditLogModal = ({ match, nutritionDataToCalculate }) => {
  const currentDate = new Date();
  const [data, setMeal] = useState({});
  const isoDate = currentDate.toISOString().split("T")[0];
  const [date, setDate] = useState(isoDate);
  const [servingSize, setServingSize] = useState(0);
  const history = useHistory();

  useEffect(() => {
    fetch(`/nutrition/${match.params.id}`)
      .then((res) => res.json())
      .then((data) => setMeal(data));
  }, [match]);

  console.log(data);

  //handle changes
  const [nutritionCalculated, setNutritionCalculated] = useState({
    data,
  });

  // useEffect(() => {
  //     setNutritionCalculated([...nutritionDataToCalculate]);
  //   }, [nutritionDataToCalculate]);

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
    console.log(nutritionCalculated);
  };

  const handleCalculate = (event) => {
    event.preventDefault();
    setNutritionCalculated((prevState) => {
      console.log(nutritionCalculated);
      // const newArray = [...nutritionCalculated];
      // const chosenItem = newArray[event.target.id];
      // const newItem = {};
      // for (const [key, value] of Object.entries(chosenItem)) {
      //   if (
      //     key == "Calories" ||
      //     key == "Carbohydrates" ||
      //     key == "Protein" ||
      //     key == "Fat" ||
      //     key == "ServingSizeg"
      //   ) {
      //     newItem[key] = Math.round(value * servingSize);
      //   } else {
      //     newItem[key] = value;
      //   }
      // }
      // newArray.splice(event.target.id, 1, newItem);
      // return newArray;
    });
  };

  //update to database
  const submitToDataBase = async (event) => {
    event.preventDefault();

    const name = nutritionCalculated[0].Name;
    const calories = nutritionCalculated[0].Calories;
    const carbohydrates = nutritionCalculated[0].Carbohydrates;
    const protein = nutritionCalculated[0].Protein;
    const fats = nutritionCalculated[0].Fats;
    const weight = nutritionCalculated[0].ServingSizeg;
    const date = nutritionCalculated[0].date;
    const mealtype = nutritionCalculated[0].mealType;

    const submitToDataBase = {
      name,
      calories,
      carbohydrates,
      protein,
      fats,
      protein,
      fats,
      weight,
      date,
      mealtype,
    };

    axios
      .put(
        `http://localhost:5000/nutrition/${match.params.id}`,
        submitToDataBase
      )
      .then((res) => console.log(res.data));

    const nutritionCalculatedArray = nutritionCalculated.filter(
      (element, index) => index !== index
    );
    setNutritionCalculated(nutritionCalculatedArray);
    history.push("/log");
  };
  // const submitToDataBase = (e) => {
  //     e.preventDefault();
  //     fetch(`/nutrition/${match.params.id}`, {
  //         method: "PUT",
  //         headers: {
  //             'Content-type': "application/json"},
  //         body: JSON.stringify(data)
  //       })
  //         .then(res => res.json())
  //         .then(data => console.log(data))
  //         // history.go(-1)
  //         // history.push('/log')
  // }

  // console.log(data)

  return (
    <div>
      <form>
        <div className="grid grid-cols-2">
          <div className="grid grid-rows-4 my-0 ">
            <div>
              <label>Meal Type</label>
              <select
                name="MealType"
                onChange={handleMealTypeChange}
                value={data.mealtype}
                //    id={index}
                type="text"
              >
                <option value="Snack">Snack</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
              </select>
            </div>

            <div>
              <input
                onChange={handleDateChange}
                type="date"
                className="input"
              ></input>
            </div>

            <div>
              <label className="text-xs"> No. Serving</label>
              <input
                name="weight"
                onChange={handleInputChange}
                value={data.servingSize}
                placeholder={data.weight}
                type="text"
                //    id={index}
              ></input>
            </div>
            <div className>
              {/* <button id={index} onClick={handleCalculate} className="w-2/3 bg-black text-white uppercase tracking-wider px-5 py-1 mt-2 text-xs shadow-md"> Calculate </button> */}
              <button
                onClick={handleCalculate}
                className="w-2/3 bg-black text-white uppercase tracking-wider px-5 py-1 mt-2 text-xs shadow-md"
              >
                {" "}
                Calculate{" "}
              </button>
            </div>
          </div>

          <div className="my-auto">
            <div className="text-3xl capitalize pt-1">
              <strong>{data.name}</strong> <br />
              <strong>⚡</strong> {data.calories}
            </div>

            <div className="text-md pt-1">
              <strong>C</strong> {data.carbohydrates}
              <strong>P</strong> {data.protein}
              <strong>F</strong> {data.fats}
              <strong>(g)</strong> {data.weight}
            </div>
            <button
              className=" bg-black text-white uppercase tracking-wider px-3 py-1 mt-2 text-xs shadow-md"
              onSubmit={submitToDataBase}
            >
              {" "}
              Add to Log{" "}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditLogModal;
