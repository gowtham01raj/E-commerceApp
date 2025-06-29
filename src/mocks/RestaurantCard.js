import ResData, { CDN_Link } from "../utils/content";
import { Link } from "react-router";
import { MdStarRate } from "react-icons/md";
import { useContext } from "react";
import userContext from "../utils/userContext";
const RestaurantCard = ({
  id,
  cloudinaryImageId,
  name,
  areaName,
  sla,
  cuisines,
  costForTwo,
  avgRatingString,
  TotalRatingStrings
}) => {
  
  return (
    <div className="rounded-sm w-[200px] restaurant-card m-2 p-2 border bg-neutral-200 border-solid border-black   hover:bg-green-300 justify-between ">
      <Link  to={`/restaurant/${id}`}>
        <img
          src={CDN_Link + cloudinaryImageId}
          alt={name}
          className="restaurant-image rounded-lg w-[200px]"
        />
        <div className="restaurant-details">
          <h3 className="restaurant-name font-black font-bold py-4 text-lg ">
            {name}
          </h3>
          <div className="esa-rating">
            <h4 className="rating">
              <MdStarRate
                className="rating-logo"
                style={
                  avgRatingString > 4.0
                    ? { backgroundColor: "var(--green)" }
                    : { backgroundColor: "var(--red)" }
                }
              />
              <span>{avgRatingString}</span>
            </h4>
            <h4>{costForTwo}</h4>
            <h4>{sla} mins</h4>
          </div>
          <p className="cousine">
            {cuisines}
          </p>
          <p className="location">{areaName}</p>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
