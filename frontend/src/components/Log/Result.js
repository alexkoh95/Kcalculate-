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
      <tr>
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
        <td>
          <button onClick={() => props.handleClick(element)}>
            Food Choice?
          </button>
        </td>
      </tr>
    );
  });

  // =====================================================
  //                        FUNCTION
  // =====================================================

  // useEffect(() => {
  //   props.setNutritionDataToCalculate(displayedResults);
  //   setToggle(false);
  // }, [toggle]);

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
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th className="px-3 py-3">Calories</th>
            <th className="px-3 py-3">Carbohydrate</th>
            <th className="px-3 py-3">Protein</th>
            <th className="px-3 py-3">Fat</th>
            <th className="px-3 py-3">Serving Size</th>
          </tr>
        </thead>
        <tbody>{displayedResults2}</tbody>
      </table>
    </div>
  );
};

export default Result;
