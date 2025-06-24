import { useState } from "react";
import { Logolink } from "../utils/content";


const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logoContainer">
        <img className="logo" src={Logolink} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
          <li>Contact</li>
          <button
            className="btn-login"
            onClick={() => {
              btnName==="Login" ?  setBtnName("Logout"): setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
