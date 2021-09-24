import React, { useState, useEffect } from "react";

const Result = (props) => {
  // =====================================================
  //                  USE STATES & VARIABLES
  // =====================================================
  const [nutritionData, setNutritionData] = useState("");
  const apiKey = "OhZQcF/GhCt0FEzwKxx2Mw==h0nAYlhAxfMLbwHA";
  const search = props.searchTerm;
  const results = [];
  const [toggle, setToggle] = useState(false);

  // =====================================================
  //                        FUNCTION
  // =====================================================

  const fetchNutritionAPI = async (search) => {
    const nutritionAPI = `https://api.calorieninjas.com/v1/nutrition?query=${search}`;
    try {
      console.log("Pulling API now");
      const res = await fetch(nutritionAPI, {
        headers: { "X-Api-Key": `${apiKey}` },
      });
      const data = await res.json();
      await setNutritionData(data.items);
    } catch (err) {
      console.log("Error in getting API");
    }
  };

  // =====================================================
  //                        GET NUTRITION DATA
  // =====================================================

  for (const key in nutritionData[0]) {
    results.push(`${nutritionData[0][key]}`);
    console.log(results[4]);
  }

  let displayedResults = [
    {
      Name: results[4],
      Calories: results[8],
      Carbohydrates: results[11],
      Protein: results[10],
      Fat: results[7],
      ServingSizeg: results[2],
    },
  ];

  let displayedResults2 = displayedResults?.map((element, index) => {
    return (
      <div>
        <h2>Name:{element.Name}</h2>
        <li>Calories:{element.Calories}</li>
        <li>Carbohydrates:{element.Carbohydrates}</li>
        <li>Protein:{element.Protein}</li>
        <li>Fat:{element.Fat}</li>
        <li>Serving Size(g):{element.ServingSizeg}</li>
      </div>
    );
  });

  // =====================================================
  //                        FUNCTION
  // =====================================================

  useEffect(() => {
    props.setNutritionDataToCalculate(displayedResults);
    setToggle(false);
    console.log(props.nutritionDataToCalculate);
  }, [toggle]);

  const handleSubmit = async () => {
    await fetchNutritionAPI(search);
    setToggle(true);
  };

  // =====================================================
  //                       RETURN
  // =====================================================

  return (
    <div className="card">
      <button
        className="btn bg-green-900 shadow-md px-3 py-3 m-4 rounded-md hover:bg-purple-700"
        onClick={handleSubmit}
      >
        Submit
      </button>
      <br></br>
      {displayedResults2}
    </div>
  );
};

export default Result;
