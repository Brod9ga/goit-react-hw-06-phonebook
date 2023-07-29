import React from "react";


const Filter = ({ onChange }) => {
  
  return (
    <input
      type="text"
           onChange={onChange}
      placeholder="Search contacts"
    />
  );
};

export default Filter;
