import React, { useState } from "react";
import ItemList from "./ItemList";
import { v4 as uuidv4 } from 'uuid';
import uniqid from "uniqid";

const RestaurantCategories = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div key={uuidv4()}>
      <div className="w-8/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className=" flex justify-between cursor-pointer "
          onClick={() => handleClick()}
        >
          <span className="font-bold text-lg">
            {data.title}({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <ItemList key={uniqid()+uniqid()} items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategories;
