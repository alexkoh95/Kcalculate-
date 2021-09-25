import React, { useState } from "react";
import Calculate from "./Calculate";
import Search from "./Search";
import Result from "./Result";
import LogDisplay from "./LogDisplay";

const Log = () => {
  // =====================================================
  //                  USE STATES & VARIABLES
  // =====================================================
  const [searchTerm, setSearchTerm] = useState("");
  const [nutritionDataToCalculate, setNutritionDataToCalculate] = useState("");

  const addToCalculate = (item) => {
    setNutritionDataToCalculate([...nutritionDataToCalculate, item]);
  };

  return (
    <div>
      <h1>this is log page</h1>
      <div className="grid grid-cols-2 pt-5">
        <div>
          <Search setSearchTerm={setSearchTerm} />
          <Result
            searchTerm={searchTerm}
            nutritionDataToCalculate={nutritionDataToCalculate}
            setNutritionDataToCalculate={setNutritionDataToCalculate}
            handleClick={addToCalculate}
          />
          <Calculate nutritionDataToCalculate={nutritionDataToCalculate} />
        </div>
        <div>
          <LogDisplay />
        </div>
      </div>
    </div>
  );
};

export default Log;
