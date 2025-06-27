import React, { useEffect, useState } from "react";
import { CDN_Link, Menu_Link, Swiggy_Link } from "../utils/content";
import { useParams } from "react-router";

const useRestaraurantMenu = () => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const { resId } = useParams();

  const fetchMenusData = async () => {
    try {
      const data = await fetch(Menu_Link + resId);
      const json = await data.json();

      setRestaurantInfo(json?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchMenusData();
  }, [resId]);

  return restaurantInfo;
};

export default useRestaraurantMenu;
