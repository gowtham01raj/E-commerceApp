import RestaurantCard, { withTotalRatingStrings } from "./RestaurantCardList";
import ResData, { CDN_Link, Swiggy_Link } from "../utils/content";
import { useState, useEffect } from "react";
import { RestaurantMenuShimmer, Shimmer } from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserOffline from "./UserOffline";
const filterData = (searchText, restaurants) => {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
};

const Body = () => {
  const [searchText, setSearchText] = useState(""); //Searchtxt is a local variable. To create a state variable.
  const [listofRestaurant, setListofRestaurant] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const RestaurantCardStringed = withTotalRatingStrings(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Swiggy_Link);
    const json = await data.json();

    setListofRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(listofRestaurant[0].info.totalRatingsString);
  };
  const isOnline = useOnlineStatus();

  if (isOnline === false) return <UserOffline />;

  return listofRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="">
        <div className="search-container filter flex items-center justify-center  m-4 p-4 ">
          <input
            type="text"
            className="search-input w-3xl border border-solid border-black"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn mx-4 px-4 py-2 bg-green-200 hover:bg-amber-200 rounded-2xl text-center"
            onClick={() => {
              const data = filterData(searchText, listofRestaurant);
              setFilterRestaurant(data);
            }}
          >
            Search
          </button>
        </div>
        <div className="res-container flex flex-wrap ">
          {filterRestaurant.length === 0 ? (
            <h1>Restaurant not available</h1>
          ) : (
            filterRestaurant.map((restaurant) =>
              restaurant.info.totalRatingsString === "10k+" ? (
                <RestaurantCardStringed 
                  key={restaurant?.info?.id}
                  {...restaurant?.info} />
              ) : (
                <RestaurantCard
                  key={restaurant?.info?.id}
                  {...restaurant?.info}
                />
              )
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Body;
