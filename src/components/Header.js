import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import "../../index.css";

const Header = () => {
  //   let btnName = "Login";
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlinestatus = useOnlineStatus();

  return (
    <div className="flex justify-between">
      <div className="">
        <img className="w-20" src={LOGO_URL} alt="Burger Logo" />
      </div>
      <div className="">
        <ul className="flex p-4 m-4">
          <li>Online Status: {onlinestatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About us</Link>
          </li>
          <li>
            <Link to="/Contact">Content Us</Link>
          </li>
          <li>
            <Link to="/Grocery">Grocery</Link>
          </li>
          <li>Cart</li>
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
