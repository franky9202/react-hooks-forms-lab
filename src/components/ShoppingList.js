import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setsearch] = useState("")
  const [newItem, setNewItem] = useState("")

  function handleSearchText(event){
    setsearch(event.target.value.toLowerCase())
  }

  let newItemValue = []
  function newItemSubmit(event){
    event.preventDefault()
    newItemValue = event.target.value
    console.log(event);
    setNewItem(newItemValue)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  const displaySearchItems = items.filter((item) => {
    if(search === "") return false

      return item.name.toLowerCase().includes(search)
  })

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={newItemSubmit} newItemValue ={newItemValue} />
      <Filter onSearchChange={handleSearchText} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
        {displaySearchItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
