import React, { useContext, useState } from "react";
import { getPositionStyle, ToastContext } from "./ToastProvider";

const ToastNew = () => {
  const { toastArray, addToast, position } = useContext(ToastContext);

  return (
    <div className="w-full gap-5 flex-col relative justify-center items-center flex h-full">
      <h2>Toaster</h2>
      <div className="flex gap-5">
        <button
          className="border px-2 py-1"
          onClick={() => addToast("success")}
        >
          Add Toast Success
        </button>
        <button className="border px-2 py-1" onClick={() => addToast("error")}>
          Add Toast Error
        </button>
      </div>
      <div
        style={{
          position: "fixed",
          ...getPositionStyle(position),
        }}
        className="flex flex-col gap-1"
      >
        {toastArray.map((itemToast) => {
          return (
            <div key={itemToast.id} className="bg-black text-white px-3 py-1">
              {itemToast.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ToastNew;
