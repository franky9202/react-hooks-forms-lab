import React from "react";
import Item from "./Item";

function Filter({ onCategoryChange, onSearchChange }) {
  return (
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..." onChange={onSearchChange} />
      <select name="filter" onChange={onCategoryChange} value={Item.name}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
