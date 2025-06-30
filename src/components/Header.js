import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import "../../index.css";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  //   let btnName = "Login";
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlinestatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  //subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between shadow-lg sm:bg-yellow-50 md: bg-green-50 lg:bg-pink-50">
      <div className="">
        <img className="w-20" src={LOGO_URL} alt="Burger Logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlinestatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/About">About us</Link>
          </li>
          <li className="px-4">
            <Link to="/Contact">Content Us</Link>
          </li>
          <li className="px-4">
            <Link to="/Grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/Cart">Cart</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            Cart - ({cartItems.length} items)
          </li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
