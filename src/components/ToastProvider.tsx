import React, { createContext, useState } from "react";

export const ToastContext = createContext<any>(null);

export const getPositionStyle = (position) => {
  switch (position) {
    case "top-right":
      return { top: 10, right: 10 };
    case "top-left":
      return { top: 10, left: 10 };
    case "bottom-right":
      return { bottom: 10, right: 10 };
    case "bottom-left":
      return { bottom: 10, left: 10 };
    default:
      return { top: 10, right: 10 };
  }
};

const ToastProvider = ({ children }) => {
  const [toastArray, setToastArray] = useState<any[]>([]);
  const [position, setPosition] = useState("top-right");

  const addToast = (type: any) => {
    const id = Date.now();
    const newToast = {
      id,
      text: `This is a ${type} toast`,
    };

    setToastArray((prev) => [...prev, newToast]);

    setTimeout(() => {
      setToastArray((prev) => prev.filter((item) => item.id !== id));
    }, 2000);
  };
  return (
    <ToastContext.Provider value={{ toastArray, addToast, position }}>
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
