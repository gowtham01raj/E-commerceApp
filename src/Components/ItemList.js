import React from "react";
import { CDN_Link } from "../utils/content";

const ItemList = ({ items }) => {
    console.log(items);
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <>
            <div
              key={item.card.info.id}
              className=" text-left p-2 m-2 border-gray-200 border-b-2 flex"
            >
              <img className="w-20 rounded-2xl" src={CDN_Link + item.card.info.imageId} />
              <div className="text-left flex-wrap mx-2">
                <span className="font-bold">{item?.card?.info?.name}- </span>
                <span>₹{item?.card?.info?.price / 100}</span>
                <p className="text-xs">{item?.card?.info?.description}</p>
              </div>
            </div>
          </>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
