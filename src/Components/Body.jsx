import RestaurantCard from "./RestaurantCardList";
import ResData, { CDN_Link } from "../utils/content";

const Body = () => (
  <div className="body">
    <div className="search">Search</div>
    <div className="res-container">
      {ResData.map((info, index) => {
        return <RestaurantCard key={index} {...info.info} />;
      })}
    </div>
  </div>
);

export default Body;
