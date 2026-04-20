import React, { useContext, useState } from "react";
import { ToastContext } from "./ToastContext";

const ToastNotification = () => {
  const toast = useContext(ToastContext);

  return (
    <div className="flex flex-col gap-5 justify-center w-full h-full items-center">
      <h3>Toast Notifications</h3>
      <button
        className="border px-2"
        onClick={() => toast.success("Its a success")}
      >
        Show Success Toast bottom right
      </button>
    </div>
  );
};

export default ToastNotification;
