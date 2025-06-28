import React, { useContext } from "react";
import userContext from "../utils/userContext";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart, removeItem } from "../utils/cartSlice";
import { Link } from "react-router";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4 flex-wrap justify-center">
      <div className="">
        <h1 className="text-2xl font-bold">Cart</h1>
        <button
          onClick={handleClearCart}
          className="cursor-pointer bg-white border rounded-2xl p-2  border-black hover:bg-amber-700 focus:outline-sky-800"
        >
          Clear Cart
        </button>
      </div>
      <div className="w-6/12 m-auto">
        {cartItems.length == 0 ? (
          <div className="">
            <h1 className="font-black p-4">
              No Items Available.Please Add Items
            </h1>
            <Link
              className="cursor-pointer border border-black hover:bg-amber-100 rounded-3xl p-2"
              to="/"
            >
              Click here for homepage.
            </Link>
          </div>
        ) : (
          <ItemList items={cartItems} />
        )}
      </div>
    </div>
  );
};

export default Cart;
