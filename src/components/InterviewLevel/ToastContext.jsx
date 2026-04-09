import { createContext, useState } from "react";

export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState([]);

  const addToast = (toastType, position = "bottomLeft", msg) => {
    console.log("hey");
    const id = Date.now();
    setToast((prev) => [...prev, { id, toastType, position, msg }]);

    setTimeout(() => {
      setToast((prev) => prev.filter((item) => item.id !== id));
    }, 1100);
  };

  const value = {
    success: (msg, position = "bottomLeft") =>
      addToast("success", position, msg),
    error: (msg, position = "bottomLeft") => addToast("error", position, msg),
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      {toast.map((toastItem, index) => {
        return (
          <div
            style={{ bottom: `${index * 60 + 10}px` }}
            className={`fixed ${
              toastItem.position === "bottomRight"
                ? `right-0`
                : toastItem.position === "bottomLeft"
                ? "left-0"
                : "top-0 right-0"
            }`}
          >
            {toastItem.msg}
          </div>
        );
      })}
    </ToastContext.Provider>
  );
};
