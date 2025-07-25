import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategories = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div key={data.itemCards.length}>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className=" flex justify-between cursor-pointer "
          onClick={() => handleClick()}
        >
          <span className="font-bold text-lg">
            {data.title}({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && (
          <ItemList key={data.title + data.itemCards} items={data.itemCards} />
        )}
      </div>
    </div>
  );
};

export default RestaurantCategories;
