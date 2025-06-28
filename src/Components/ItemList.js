import React from "react";
import { CDN_Link } from "../utils/content";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { v4 as uuidv4 } from 'uuid';
import uniqid from "uniqid";






const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };



  return (
    <div key={uniqid()}>
      <ul key={uniqid()}>
        {items.map((item) => (
          <>
            <div
              key={uniqid()}
              className=" text-left justify-between p-2 m-2 border-gray-200 border-b-2 flex"
            >
              <div className="w-9/12 text-left flex-wrap mx-2">
                <span className="font-bold">{item?.card?.info?.name}- </span>
                <span>₹{item?.card?.info?.price / 100}</span>
                <p className="text-xs">{item?.card?.info?.description}</p>
              </div>
              <div>
                <div className="absolute flex ">
                  <button
                    onClick={()=>handleAddItem(item)}
                    className=" p-2 mx-10 top-10 rounded-lg bg-black text-white shadow-lg hover:bg-amber-400"
                  >
                    Add+
                  </button>
                </div>
                <img
                  className=" w-30  rounded-2xl"
                  src={CDN_Link + item.card.info.imageId}
                />
              </div>
            </div>
          </>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
