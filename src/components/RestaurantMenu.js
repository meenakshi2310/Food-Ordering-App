import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MenuAPI } from "../utils/constants";
const RestaurauntMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  console.log("resID " + resId);
  useEffect(() => {
    fetechMenu();
  }, []);
  const fetechMenu = async () => {
    const data = await fetch(MenuAPI + resId);
    console.log("API " + MenuAPI + resId);
    const json = await data.json();
    setResInfo(json.data);
    console.log(json?.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  console.log(
    resInfo?.cards[4]?.groupedCard.cardGroupMap?.REGULAR?.cards[1]?.card?.card
  );
  let { itemCards } =
    resInfo?.cards[4]?.groupedCard.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log("Hi " + itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {" Rs."}
            {item.card.info.price / 100 || item.card.info.dafaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurauntMenu;
