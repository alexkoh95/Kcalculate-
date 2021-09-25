import React, { useState } from "react";

const Search = (props) => {
  const handleChange = (event) => {
    props.setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input
        className="bg-green-900 shadow-md px-3 py-3 m-4 rounded-md"
        type="text"
        placeholder="Enter Your food Name"
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
