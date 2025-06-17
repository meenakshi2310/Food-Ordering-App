import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  //   let btnName = "Login";
  const [btnNameReact, setBtnNameReact] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Burger Logo" />
      </div>
      <div className="nav-items">
        <ul>
           <li>Home</li>
          <li>About us</li>
          <li>Content Us</li>
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
