import React, { useEffect, useState } from "react";

let cart = [
  {
    id: 1,
    name: "iPhone 15",
    price: 80000,
    quantity: 0,
  },
  {
    id: 2,
    name: "AirPods Pro",
    price: 25000,
    quantity: 0,
  },
  {
    id: 3,
    name: "Apple Watch",
    price: 45000,
    quantity: 0,
  },
];

const CarNEWOutline = () => {
  const [cartValue, setCartValue] = useState([]);

  const handleIncrease = (item) => {
    const updatedItem = cartValue.find((cartItem) => cartItem.id === item.id);
    // wo item hai merepaas yaani ek object

    if (updatedItem) {
      const updatedCart = cartValue.map((itemCart) => {
        if (itemCart.id === item.id) {
          return { ...itemCart, quantity: itemCart.quantity + 1 };
        } else return itemCart;
      });
      setCartValue(updatedCart);
    } else {
      setCartValue([...cartValue, { ...item, quantity: 1 }]);
    }
  };

  useEffect(() => {
    console.log(cartValue, "cartValue");
  }, [cartValue]);

  const getQty = (item) => {
    return cartValue.find((cartItem) => cartItem.id === item.id)?.quantity ?? 0;
  };

  const handleDecrease = (item) => {
    const updatedItem = cartValue.find((cartItem) => cartItem.id === item.id);

    if (updatedItem.quantity === 1) {
      const updatedCartItem = cartValue.filter((cartItem) => {
        return cartItem.id !== item.id;
      });

      setCartValue(updatedCartItem);
    } else {
      const updatedItemNew = cartValue.map((itemVal) => {
        if (itemVal.id === item.id) {
          return { ...itemVal, quantity: itemVal.quantity - 1 };
        } else return itemVal;
      });
      setCartValue(updatedItemNew);
    }
  };

  return (
    <div className="flex flex-col h-full  justify-center items-center w-full">
      <h3>Cart System</h3>
      <table className="border-2">
        <thead className="bg-red-400">
          <tr className="">
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Price</th>
            <th className="p-3 border">Quantity</th>
            {/* <th className="p-3 border">Action</th> */}
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => {
            return (
              <tr>
                <td className="p-3 border">{item.name}</td>
                <td className="p-3 border">{item.price}</td>
                <td className="p-3 gap-4 justify-center items-center flex border">
                  <button
                    onClick={() => handleDecrease(item)}
                    className="border px-2 cursor-pointer"
                  >
                    -
                  </button>
                  <div>{getQty(item)}</div>
                  <button
                    onClick={() => handleIncrease(item)}
                    className="border px-2 cursor-pointer"
                  >
                    +
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex mt-10 flex-col">
        {cartValue &&
          cartValue.map((item) => {
            return (
              <div className="flex gap-3">
                <div>Name:{item.name}</div>
                <div>Price:{item.price}</div>
                <div>Quantity:{item.quantity}</div>
                <div>Total:{item.price * item.quantity}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CarNEWOutline;
