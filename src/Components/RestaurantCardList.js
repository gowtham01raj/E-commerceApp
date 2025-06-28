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
  const data=useContext(userContext);
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
            {name.length > 24 ? name.slice(0, 21) + "..." : name.slice(0, 24)}
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
            <h4>{sla.deliveryTime} mins</h4>
          </div>
          <p className="cousine">
            {cuisines.join(", ").length > 32
              ? cuisines.join(", ").slice(0, 28) + "..."
              : cuisines.join(", ").slice(0, 32)}
          </p>
          <p className="location">{areaName}</p>
          {data.loginUser}
        </div>
      </Link>
    </div>
  );
};

export const withTotalRatingStrings = (RestaurantCard) => {
  return (props) => {
    console.log(props);
    return (
      <div>
        <label>{props.totalRatingsString}</label>
        <RestaurantCard key={props.id} {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
