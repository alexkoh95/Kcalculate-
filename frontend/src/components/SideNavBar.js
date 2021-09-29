import React from "react";
import { Link } from "react-router-dom";

const SideNavBar = () => {
  return (
    <div className=" fixed h-screen w-60 bg-white bg-opacity-20 object-center shadow-lg">
      <div className="pt-12">
        {" "}
        <h1 className="font-extrabold text-xl text-indigo-600">
          <Link to='/dashboard'><em>kcal</em>culate</Link>
        </h1>{" "}
      </div>

      <div className="pt-32 relative space-y-2 text-sm grid row-4 ">
        <div className="uppercase font-normal tracking-widest hover:shadow-md py-3 hover:text-white hover:bg-indigo-600">
          {" "}
          <Link
            to="/dashboard"
          >
            Dashboard{" "}
          </Link>{" "}
        </div>
        <div className="uppercase font-normal tracking-widest hover:shadow-md py-3 hover:text-white hover:bg-indigo-600 ">
          {" "}
          <Link
            to="/log"
          >
            {" "}
            Log{" "}
          </Link>
        </div>
        <div className="uppercase font-normal tracking-widest hover:shadow-md py-3 hover:text-white hover:bg-indigo-600">
          {" "}
          <Link to="/loghistory"> Log History </Link>{" "}
        </div>
        <div className="uppercase font-normal tracking-widest hover:shadow-md py-3 hover:text-white hover:bg-indigo-600">
          {" "}
          <Link to="/settings"> Settings </Link>
        </div>
      </div>

      <div className="text-xs font-light uppercase tracking-wide absolute inset-x-0 bottom-0 pb-8 text-gray-500">
        ©2021 Counting Bros
      </div>
    </div>
  );
};

export default SideNavBar;
