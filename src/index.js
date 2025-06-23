import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header.jsx";
import {Footer} from "./Components/Footer.jsx"
import Body from "./Components/Body.jsx";


/**
 * Header
 *  -Logo
 *  -NavBar
 * Body
 *      - Searchbar
 *     - Restaruantlist---->Restaurantcard ->img,Name,Rating,Price
 * Footer
 * - Social media icons
 * - Privacy policy
 *  copyright © 2022 Your Website. All rights reserved.
 */
const AppLayout = () => (
  <div className="app">
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
