import React from "react";
import { useDispatch } from "react-redux";
import { setWordForFilter } from "redux/contactListReduser";


const Filter = () => {
  
  const dispatch = useDispatch();

  const handleFilterChange = event => {
   const word = event.target.value.trim()
    dispatch(setWordForFilter(word));
  };

  return (
    <input
      type="text"
           onChange={handleFilterChange}
      placeholder="Search contacts"
    />
  );
};

export default Filter;
