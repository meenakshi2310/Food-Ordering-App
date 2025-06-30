import { useDispatch } from "react-redux";
import { IMG_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";
import Shimmer from "./Shimmer";

const ItemList = ({ items }) => {
  console.log("item List ", items[0].itemCards[0]);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //dispatch an action
    dispatch(addItems(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.itemCards[0].card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="p-2 rounded-lg bg-black text-white shadow-lg"
                onClick={() => handleAddItem(item)}
              >
                Add+
              </button>
            </div>
            <img
              src={IMG_URL + item.itemCards[0].card.info.imageId}
              className="w-full"
            />
          </div>
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.itemCards[0].card.info.name}</span>
              <span>
                {" "}
                - ${" "}
                {item.itemCards[0].card.info.defaultPrice / 100
                  ? item.itemCards[0].card.info.defaultPrice / 100
                  : item.itemCards[0].card.info.price / 100}
              </span>
            </div>
            <p className="font-light text-xs">
              {item.itemCards[0].card.info.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
