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

  // handle changes
  const [nutritionCalculated, setNutritionCalculated] = useState([data]);
  // useEffect(() => {
  //   setNutritionCalculated([...nutritionDataToCalculate]);
  // }, [nutritionDataToCalculate]);

  const handleMealTypeChange = async (e) => {
    await setMeal((prevstate) => {
      return e.target.value;
    });
    await setNutritionCalculated((prevState) => {
      const newArray = [nutritionCalculated];
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
      const newArray = [data];
      const newArray2 = data;
      const newItem = {};
      for (const [key, value] of Object.entries(newArray2)) {
        // console.log(newArray2);
        // console.log(`This is the key:${key}, this is the value:${value}`);
        if (
          key == "calories" ||
          key == "carbohydrates" ||
          key == "protein" ||
          key == "fats" ||
          key == "weight"
        ) {
          newItem[key] = Math.round(
            (value / (newArray2.weight * 0.01)) * servingSize
          );
        } else {
          newItem[key] = value;
        }
      }
      // console.log("This is old newArray (before Splice):", newArray);
      // console.log(newItem);
      newArray.splice(0, 1, newItem);
      console.log("This is newArray after Splice:", newArray);
      return newArray;
    });
  };

  //update to database
  const submitToDataBase = async (event) => {
    event.preventDefault();
    console.log(data.name);
    const name = data.name;
    const calories = data.calories;
    const carbohydrates = data.carbohydrates;
    const protein = data.protein;
    const fats = data.fats;
    const weight = data.weightg;
    const date = data.date;
    const mealtype = data.mealType;

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
      .put(`http://localhost:5000/nutrition/${data._id}`, submitToDataBase)
      .then((res) => console.log(res.data));

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
                value={servingSize}
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
