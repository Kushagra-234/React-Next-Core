import React, { useState } from "react";

const ProgressBar = () => {
  const [curProgress, setCurProgress] = useState(0);

  const handleAdd = () => {
    setCurProgress(Math.min(100, curProgress + 10));
  };

  const handleDecrease = () => {
    setCurProgress(Math.max(0, curProgress - 10));
  };

  const getColor= ()=>{
    if(curProgress<=30){
        return "bg-red-300"
    }

    if(curProgress<=60 && curProgress>30){
        return "bg-green-400"
    }

    if(curProgress<=100 && curProgress>60){
        return "bg-green-900"
    }
  }
  return (
    <div className="flex flex-col justify-center gap-4 items-center w-full h-full">
      <h3>Progress Bar</h3>
      <div className="flex flex-col">
        <div className="border-2 overflow-hidden rounded-2xl h-12 w-120">
          <div
            style={{ width: `${curProgress}%` }}
            className={`h-12 ${getColor()}`}
          ></div>
        </div>
        <div className="flex w-120 mt-4 justify-between">
          <button
            // disabled={curProgress === 100}
            onClick={handleAdd}
            className="cursor-pointer"
          >
            +10%
          </button>
          <button
            // disabled={curProgress === 0}
            onClick={handleDecrease}
            className={`cursor-pointer ${
              curProgress === 0 ? "opacity-30" : ""
            }`}
          >
            -10%
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
