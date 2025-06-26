import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { RestaurantMenuShimmer } from "./Shimmer";
import { MdStarRate } from "react-icons/md";
import useRestaraurantMenu from "../utils/useRestaraurantMenu";
import { CDN_Link } from "../utils/content";

const RestaurantMenu = () => {
  const resId = useParams();
  const restaurantInfo = useRestaraurantMenu(resId);
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

  const categories = cards.filter((c) => c?.card?.card?.["@type"]);
  console.log(categories);

  return (
    <div className="menu w-[60%] px-4">
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
            <div
              key={id}
              className="menu-items flex justify-between items-center px-10 border-b-2 gap-12 border-solid border-b-gray-200"
            >
              <div className="left flex flex-col gap-[5px]">
                <h2>{name}</h2>
                <h4>₹{price / 100 || defaultPrice / 100}</h4>
                <p>{(description && description.slice(0, 60)) || "Dummy"}</p>
                <h4 className="rating flex">
                  <MdStarRate
                    className="rating-logo"
                    style={{
                      backgroundColor:
                        ratings?.aggregatedRating?.rating >= 4.0
                          ? "var(--green)"
                          : "var(--red)",
                    }}
                  />
                  <span>
                    {ratings?.aggregatedRating?.rating || 3.8} (
                    {ratings?.aggregatedRating?.ratingCountV2 || 6})
                  </span>
                </h4>
              </div>
              <div className="right flex flex-col items-center justify-center py-1">
                <img
                  className="w-[150px] h-[120px] object-cover rounded-2xl border-[2px]"
                  src={CDN_Link + imageId}
                  alt={name}
                />
                <button className="add-btn h-[30px] text-black w-[50px] border-[1px] rounded-full px-2  cursor-pointer border-none relative bottom-5  font-medium  bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700">
                  ADD
                </button>
              </div>
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
//
