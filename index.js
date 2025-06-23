import React from "react";
import ReactDOM from "react-dom/client";

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

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img
          className="logo"
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/meal-menue-logo-design-template-ca4328b873982607c2c66ab6d4f8ae45_screen.jpg?ts=1681605842"
          alt="Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard=()=>(
    <div className="res-card" style={{backgroundColor:"white"}}>
      <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/vkhcohhmqfczycw9vsar"></img>
      <h3>Meghana Foods</h3>
      <h4>Briyani Food</h4>
      <h5>Rs. 250</h5>
      <h5>4.4 Stars</h5>
      <h5>35 minutes away</h5>
    </div>
)

const Body = () => (
  <div className="body">
    <div className="search">Search</div>
    <div className="res-container">
      <RestaurantCard></RestaurantCard>
    </div>
  </div>
);

const Footer = () => <div>Footer</div>;
const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
    <Footer />
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
