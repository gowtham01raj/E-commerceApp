import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header.jsx";
import { Footer } from "./Components/Footer.jsx";
import Body from "./Components/Body.jsx";
// import About from "./Components/About.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Error from "./Components/Error.js";
// import Cart from "./Components/Cart.js";
// import Contact from "./Components/Contact.js";
import RestaurantMenu from "./Components/RestaurantMenu.js";
import userContext from "./utils/userContext.jsx";
import { lazy, Suspense } from "react";
import { Shimmer } from "./Components/Shimmer.js";
// import Instamart from "./Components/Instamart.js";
const Contact = lazy(() => import("./Components/Contact.js"));
const Instamart = lazy(() => import("./Components/Instamart"));
const About = lazy(() => import("./Components/About.js"));
const Cart = lazy(() => import("./Components/Cart.js"));

const AppLayout = () => {
  const [showName, setShowName] = useState();
  useEffect(() => {
    const data = {
      name: "ECC",
    };
    setShowName(data.name);
  }, []);
  return (
    <div className="app">
      <React.Fragment>
        <userContext.Provider value={{ loginUser: showName, setShowName }}>
          <Header />
          <Outlet />
          <Footer />
        </userContext.Provider>
      </React.Fragment>
    </div>
  );
};

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
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
