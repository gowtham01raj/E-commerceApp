import { useState } from "react";
import { Logolink } from "../utils/content";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserOffline from "./UserOffline";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const isOnline=useOnlineStatus();
  return (
    <div className="header">
      <div className="logoContainer">
        <a href="/">
          <img className="logo" src={Logolink} alt="Logo" />
        </a>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            {isOnline ? "✅" : "❌"}
          </li>
          <Link to="/instamart"><button>Instamart</button></Link>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/cart">
            <li>Cart</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
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
