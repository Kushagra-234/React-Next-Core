import React, { useState } from "react";

export const products = [
  { id: 1, name: "Margherita Pizza", price: 249, category: "Pizza" },
  { id: 2, name: "Farmhouse Pizza", price: 349, category: "Pizza" },
  { id: 3, name: "Veg Burger", price: 129, category: "Burger" },
  { id: 4, name: "Chicken Burger", price: 179, category: "Burger" },
];

const CartSystem = () => {
  const [cartVal, setCartVal] = useState([]);

  const handleAddCart = (item) => {
    const updatedItem = cartVal.find((p) => p.id === item.id);

    if (updatedItem) {
      const updatedCart = cartVal.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, qty: cartItem.qty + 1 };
        } else {
          return cartItem;
        }
      });
      setCartVal(updatedCart);
    } else {
      setCartVal([...cartVal, { ...item, qty: 1 }]);
    }
  };

  const handleRemoveCart = (item) => {
    const updated = cartVal.find((p) => p.id === item.id);

    if (!updated) return;

    if (updated.qty === 1) {
      setCartVal(cartVal.filter((p) => p.id !== item.id));
    } else {
      const nayaArr = cartVal.map((nayaCartItem) => {
        return nayaCartItem.id === item.id
          ? { ...nayaCartItem, qty: nayaCartItem.qty - 1 }
          : nayaCartItem;
      });
      setCartVal(nayaArr);
    }
  };

  const getQty = (id) => {
    const updated = cartVal.find((p) => p.id === id)?.qty || 0;
    return updated;
  };

  return (
    <div className="flex flex-col gap-5 w-full">
      <h3>Cart Syatem</h3>
      {products.map((cartItem) => {
        return (
          <div className="flex justify-between border">
            <div className="flex flex-col gap-3">
              <div>{cartItem.name}</div>
              <div className="flex gap-3">
                <div>{cartItem.price}</div>
                <div>{cartItem.category}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 mr-4">
              <button
                onClick={() => handleRemoveCart(cartItem)}
                className="border flex items-center justify-center py-1 px-2"
              >
                -
              </button>
              <button>{getQty(cartItem.id)}</button>
              <button
                onClick={() => handleAddCart(cartItem)}
                className="border flex items-center justify-center py-1 px-2"
              >
                +
              </button>
            </div>
          </div>
        );
      })}

      <div className="Cart System">
        {cartVal.map((cartItem) => {
          return (
            <div className="flex gap-10">
              <div className="flex flex-col gap-3">
                <div>{cartItem.name}</div>
                <div>
                  {cartItem.price} x {cartItem.qty}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CartSystem;
