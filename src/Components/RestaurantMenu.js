import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { RestaurantMenuShimmer } from "./Shimmer";
import { MdStarRate } from "react-icons/md";
import useRestaraurantMenu from "../utils/useRestaraurantMenu";
import { CDN_Link } from "../utils/content";
import RestaurantCategories from "./RestaurantCategories";
import uniqid from 'uniqid';
const RestaurantMenu = () => {
  const resId = useParams();
  const restaurantInfo = useRestaraurantMenu(resId);
  const [showIndex,setShowIndex]= useState(0);
  if (restaurantInfo === null) {
    return <RestaurantMenuShimmer />;
  }

  const {
    cloudinaryImageId,
    name,
    avgRatingString,
    totalRatingsString,
    cuisines,
    locality,
    sla,
  } = restaurantInfo?.cards[2]?.card?.card?.info || {};

  const cards =
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
  let { itemCards } =
    cards.find((c) => c?.card?.card?.itemCards)?.card?.card || [];

  const categories =
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    
  return (
    <div key={uniqid()} className="menu  w-[90%] px-10 text-center ">
      <div className="restaurant-header flex align-middle bg-pink-300 p-5 m-2 mb-6 overflow-hidden">
        <img
          className="w-[250px] h-[150px] object-cover rounded-2xl border-sky-100 mr-10 flex flex-wrap "
          src={CDN_Link + cloudinaryImageId}
          alt={name}
        />
        <div className="restaurant-header-details flex-col justify-center gap-[5px] flex">
          <h1 className="font-extrabold text-5xl">{name}</h1>
          <h3>{locality}</h3>
          <p>{cuisines?.join(", ")}</p>
          <h4 className="rating-time">
            <div className="rating flex text-sm">
              <MdStarRate
                className="rating-logo flex "
                style={{
                  backgroundColor:
                    avgRatingString >= 4.0 ? "var(--green)" : "var(--red)",
                }}
              />
              <span>
                {avgRatingString || 3.8} ({totalRatingsString || "1K+ ratings"})
              </span>
              <span>| </span>
              <span className="time">{sla?.slaString}</span>
            </div>
          </h4>
        </div>
      </div>

      {itemCards.length ? (
        itemCards.map((item) => {
          const {
            id,
            name,
            price,
            defaultPrice,
            ratings,
            imageId,
            description,
          } = item.card.info;
          return (
            <div key={uniqid()} className="max-w-full text-center items-center flex-wrap">
              {categories.map((category, index) => (
                <RestaurantCategories
                  key={uniqid()}
                  data={category?.card?.card}
                  showItems={index===showIndex ?true:false}
                  setShowIndex={()=> setShowIndex(index)}
                />
              ))}
            </div>
          );
        })
      ) : (
        <h2>No items available</h2>
      )}
    </div>
  );
};

export default RestaurantMenu;

