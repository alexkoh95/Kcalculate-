import React from "react";
import { Link } from "react-router-dom";

const SideNavBar = () => {
  return (
    <div className=" fixed h-screen w-60 bg-white bg-opacity-20 object-center">
      <div className="pt-12">
        {" "}
        <h1 className="font-extrabold text-xl">
          <em>kcal</em>culate
        </h1>{" "}
      </div>

      <div className="pt-32 relative space-y-7 text-sm grid row-4 ">
        <div className="uppercase font-normal tracking-widest">
          {" "}
          <Link
            to="/dashboard"
            className="hover:bg-white hover:bg-opacity-40 hover:shadow-md rounded-full py-3 px-9"
          >
            Dashboard{" "}
          </Link>{" "}
        </div>
        <div className="uppercase font-normal tracking-widest">
          {" "}
          <Link
            to="/log"
            className="hover:bg-white active:bg-opacity-40 active:shadow-md rounded-full py-3 px-9"
          >
            {" "}
            Log{" "}
          </Link>
        </div>
        <div className="uppercase font-normal tracking-widest">
          {" "}
          <Link to="/loghistory"> Log History </Link>{" "}
        </div>
        <div className="uppercase font-normal tracking-widest">
          {" "}
          <Link to="/settings"> Settings </Link>
        </div>
      </div>

      <div className="text-xs absolute inset-x-0 bottom-0 pb-8 text-gray-500">
        ©2021 Counting Bros
      </div>
    </div>
  );
};

export default SideNavBar;
