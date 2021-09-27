import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Tab } from "@headlessui/react";

const SideBar = () => {
  // =====================================================
  //                  USE STATES & VARIABLES
  // =====================================================
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/nutrition")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="relative space-y-10 pb-2 p-4 rounded-lg border-2 border-white">
      <div>This is SideBar</div>;
    </div>
  );
};

export default SideBar;
