import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MenuAPI } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurauntMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  // console.log("resID " + resId);
  // useEffect(() => {
  //   fetechMenu();
  // }, []);
  // const fetechMenu = async () => {
  //   const data = await fetch(MenuAPI + resId);
  //   console.log("API " + MenuAPI + resId);
  //   const json = await data.json();
  //   setResInfo(json.data);
  //   console.log(json?.data);
  // };

  const resInfo = useRestaurantMenu(resId); //custom hook

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  // console.log(
  //   resInfo?.cards[4]?.groupedCard.cardGroupMap?.REGULAR?.cards[1]?.card?.card
  // );
  let { itemCards } =
    resInfo?.cards[4]?.groupedCard.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log("resInfo" + resInfo?.cards[4]?.groupedCard.cardGroupMap?.REGULAR);

  const categories =
    resInfo?.cards[4]?.groupedCard.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );
  console.log("category ", categories);
  return (
    <div className="text-center">
      <h1 className="font-bold my-10 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* categories accordions */}
      {categories.map((category, index) => (
        <RestaurantCategory //controlled component
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)} //lifting the state up
        />
      ))}
    </div>
  );
};

export default RestaurauntMenu;
