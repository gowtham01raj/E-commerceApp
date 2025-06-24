import { useState } from "react";
import { Logolink } from "../utils/content";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

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
          {isLoggedIn ? (
            <button className="btn-login" onClick={() => setIsLoggedIn(false)}>
              Login
            </button>
          ) : (
            <button className="btn-login" onClick={() => setIsLoggedIn(true)}>
              Logout
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
