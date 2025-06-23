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

const RestaurantCard = (props) => {
  const { Name, hotel, cost, Rating, distance } = props; // destructuring the props to get the values directly.

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/vkhcohhmqfczycw9vsar"
      ></img>
      <h3>{Name}</h3>
      <h4>{hotel}</h4>
      <h5>{cost}</h5>
      <h5>{Rating}</h5>
      <h5>{distance}</h5>
    </div>
  );
};

const Body = () => (
  <div className="body">
    <div className="search">Search</div>
    <div className="res-container">
      <RestaurantCard
        Name="Meghana Foods"
        hotel="Briyani Food"
        cost="Rs.250"
        Rating="4.4 stars"
        distance="35 minutes Away"
      /><RestaurantCard
        Name="Meghana Foods"
        hotel="Briyani Food"
        cost="Rs.250"
        Rating="4.4 stars"
        distance="35 minutes Away"
      /><RestaurantCard
        Name="Meghana Foods"
        hotel="Briyani Food"
        cost="Rs.250"
        Rating="4.4 stars"
        distance="35 minutes Away"
      /><RestaurantCard
        Name="Meghana Foods"
        hotel="Briyani Food"
        cost="Rs.250"
        Rating="4.4 stars"
        distance="35 minutes Away"
      /><RestaurantCard
        Name="Meghana Foods"
        hotel="Briyani Food"
        cost="Rs.250"
        Rating="4.4 stars"
        distance="35 minutes Away"
      /><RestaurantCard
        Name="Meghana Foods"
        hotel="Briyani Food"
        cost="Rs.250"
        Rating="4.4 stars"
        distance="35 minutes Away"
      /><RestaurantCard
        Name="Meghana Foods"
        hotel="Briyani Food"
        cost="Rs.250"
        Rating="4.4 stars"
        distance="35 minutes Away"
      /><RestaurantCard
        Name="Meghana Foods"
        hotel="Briyani Food"
        cost="Rs.250"
        Rating="4.4 stars"
        distance="35 minutes Away"
      /><RestaurantCard
        Name="Meghana Foods"
        hotel="Briyani Food"
        cost="Rs.250"
        Rating="4.4 stars"
        distance="35 minutes Away"
      /><RestaurantCard
        Name="Meghana Foods"
        hotel="Briyani Food"
        cost="Rs.250"
        Rating="4.4 stars"
        distance="35 minutes Away"
      /><RestaurantCard
        Name="Meghana Foods"
        hotel="Briyani Food"
        cost="Rs.250"
        Rating="4.4 stars"
        distance="35 minutes Away"
      /><RestaurantCard
        Name="Meghana Foods"
        hotel="Briyani Food"
        cost="Rs.250"
        Rating="4.4 stars"
        distance="35 minutes Away"
      /><RestaurantCard
        Name="Meghana Foods"
        hotel="Briyani Food"
        cost="Rs.250"
        Rating="4.4 stars"
        distance="35 minutes Away"
      /><RestaurantCard
        Name="Meghana Foods"
        hotel="Briyani Food"
        cost="Rs.250"
        Rating="4.4 stars"
        distance="35 minutes Away"
      /><RestaurantCard
        Name="Meghana Foods"
        hotel="Briyani Food"
        cost="Rs.250"
        Rating="4.4 stars"
        distance="35 minutes Away"
      /><RestaurantCard
        Name="Meghana Foods"
        hotel="Briyani Food"
        cost="Rs.250"
        Rating="4.4 stars"
        distance="35 minutes Away"
      /><RestaurantCard
        Name="Meghana Foods"
        hotel="Briyani Food"
        cost="Rs.250"
        Rating="4.4 stars"
        distance="35 minutes Away"
      />
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
