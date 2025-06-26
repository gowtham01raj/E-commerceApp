import { useState } from "react";
import { Logolink } from "../utils/content";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserOffline from "./UserOffline";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const isOnline = useOnlineStatus();
  return (
    <div className="flex bg-pink-50 justify-between">
      <div className="flex items-center">
        <a href="/">
          <img
            className="h-24 w-24 p-5 items-center"
            src={Logolink}
            alt="Logo"
          />
        </a>
        <Link to="/">
          <h1 className="font-bold text-orange-600 hover:text-amber-600 ">
            Swiggy
          </h1>
        </Link>
      </div>
      <div className="">
        <ul className="flex py-5">
          <li className="px-2">{isOnline ? "✅" : "❌"}</li>
          <Link to="/instamart">
            <button className="px-2 cursor-pointer hover:bg-amber-700 rounded-full shadow-2xl">Instamart</button>
          </Link>
          <Link to="/">
            <li className="px-2 hover:bg-amber-700 rounded-full shadow-2xl">Home</li>
          </Link>
          <Link to="/contact">
            <li className="px-2 hover:bg-amber-700 rounded-full shadow-2xl">Contact</li>
          </Link>
          <Link to="/cart">
            <li className="px-2 hover:bg-amber-700 rounded-full shadow-2xl">Cart</li>
          </Link>
          <Link to="/about">
            <li className="px-2 hover:bg-amber-700 rounded-full shadow-2xl">About</li>
          </Link>
          {isLoggedIn ? (
            <button className="px-2 hover:bg-amber-700 rounded-full shadow-2xl" onClick={() => setIsLoggedIn(false)}>
              Login
            </button>
          ) : (
            <button className="px-2 hover:bg-amber-700 rounded-full shadow-2xl" onClick={() => setIsLoggedIn(true)}>
              Logout
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
