import React, { useEffect, useState } from "react";

const ProgressBarNaya = () => {
  const [progressBarArray, setProgressBarArray] = useState([]);
  //   const [width, setWidth] = useState(0);

  const handleClick = () => {
    console.log("hey");
    const newProgressBar = {
      id: Date.now(),
      width: 0,
    };

    setProgressBarArray([...progressBarArray, newProgressBar]);
  };

  useEffect(() => {
    console.log(progressBarArray);
  }, [progressBarArray]);

  useEffect(() => {
    let timerId;

    timerId = setInterval(() => {
      setProgressBarArray((prev) =>
        prev.map((item) => {
          if (item.width === 100) {
            return item;
          } else return { ...item, width: item.width + 20 };
        })
      );
    }, 2000);


    return ()=>clearInterval(timerId)
  }, []);

  return (
    <div className="flex flex-col w-full gap-5 justify-center items-center">
      <h3>Progress Bar</h3>
      <button onClick={handleClick} className="cursor-pointer px-2 border-2">
        Add New Bar{" "}
      </button>
      {progressBarArray &&
        progressBarArray.map((item) => {
          return (
            <div className="w-82.5 h-5 border  rounded-2xl  ">
              <div
                style={{ width: `${item.width}%` }}
                className="bg-red-500  h-full rounded-2xl"
              >
                {item.width}%
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ProgressBarNaya;
