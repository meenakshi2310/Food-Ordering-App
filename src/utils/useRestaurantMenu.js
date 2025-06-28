import { useEffect, useState } from "react";
import { MenuAPI } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  //fetech data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MenuAPI + resId);
    const json = await data.json();
    console.log("datttaaaa ", json.data);
    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestaurantMenu;
