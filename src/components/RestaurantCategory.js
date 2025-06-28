import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex}) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      {/* Header */}
      <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.categories.length})
          </span>
          <span className="m-2">↓</span>
        </div>

        {/* Accordian Body */}
        {showItems && <ItemList items={data.categories} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
