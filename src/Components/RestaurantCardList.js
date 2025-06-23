import ResData, { CDN_Link } from "../utils/content";


const RestaurantCard = ({
  name,
  locality,
  cuisines,
  costForTwo,
  avgRating,
  cloudinaryImageId,
}) => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_Link + cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <h4>{locality}</h4>
      <h4>{cuisines}</h4>
      <h5>{costForTwo}</h5>
      <h5>{avgRating}</h5>
    </div>
  );
};

export default RestaurantCard;
