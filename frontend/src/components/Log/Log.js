import React, { useState } from "react";
import Calculate from "./Calculate";
import Search from "./Search";
import Result from "./Result";

const Log = () => {
  // =====================================================
  //                  USE STATES & VARIABLES
  // =====================================================
  const [searchTerm, setSearchTerm] = useState("");
  const [nutritionDataToCalculate, setNutritionDataToCalculate] = useState("");

  console.log(nutritionDataToCalculate);
  return (
    <div>
      <h1>this is log page</h1>
      <Search setSearchTerm={setSearchTerm} />
      <Result
        searchTerm={searchTerm}
        nutritionDataToCalculate={nutritionDataToCalculate}
        setNutritionDataToCalculate={setNutritionDataToCalculate}
      />
      <Calculate nutritionDataToCalculate={nutritionDataToCalculate} />
    </div>
  );
};

export default Log;
