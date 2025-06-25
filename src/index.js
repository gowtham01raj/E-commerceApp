import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header.jsx";
import { Footer } from "./Components/Footer.jsx";
import Body from "./Components/Body.jsx";
import About from "./Components/About.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Error from "./Components/Error.js";
import Cart from "./Components/Cart.js";
import Contact from "./Components/Contact.js";
import RestaurantMenu from "./Components/RestaurantMenu.js";
const AppLayout = () => (
  <div className="app">
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
