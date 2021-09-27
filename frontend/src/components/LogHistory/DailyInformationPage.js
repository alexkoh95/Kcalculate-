import axios from "axios";
import React, { useEffect, useState } from "react";

const DailyInformationPage = () => {
  useEffect(() => {
    axios
      .get("http://localhost:5000/nutrition/")
      .then((res) => console.log(res));
  });

  return <div>This is Daily Information Page</div>;
};

export default DailyInformationPage;
