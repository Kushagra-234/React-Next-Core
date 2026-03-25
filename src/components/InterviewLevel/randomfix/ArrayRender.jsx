const mockObjectArr = [
  {
    name: "New York",
    temperature: 50,
    humidity: 10,
    windPressure: 20,
  },
  {
    name: "Los Angeles",
    temperature: 50,
    humidity: 20,
    windPressure: 20,
  },
  {
    name: "Kolkata",
    temperature: 30,
    humidity: 20,
    windPressure: 10,
  },
];

import React, { useState } from "react";

const ArrayRender = () => {
  const [inputVal, setInputVal] = useState("");
  const [renderedData, setRenderedData] = useState();
  const [totalData, setTotalData] = useState([]);
  const [notFound, setNotFound] = useState(false);

  console.log(totalData, "totalData");

  const handleSearch = (searchVal, isPresent) => {
    const filteredDataObject = mockObjectArr.find((item) => {
      return item.name === searchVal;
    });

    if (!filteredDataObject) {
      setRenderedData(undefined);
      setNotFound(true);
      return;
    }

    setRenderedData(filteredDataObject);
    setNotFound(false);

    if (!isPresent) {
      const findItem = totalData.find((item) => item.name === searchVal);

      if (!findItem) {
        setTotalData([...totalData, filteredDataObject]);
      }
    }
  };

  return (
    <div className="flex flex-col w-full gap-5 items-center justify-center">
      <h3>Mock Object Search</h3>
      <div className="flex gap-5">
        <input
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          className="border-2"
        />
        <button
          onClick={() => handleSearch(inputVal, false)}
          className="border-2 px-2"
        >
          Search
        </button>
      </div>

      {renderedData && !notFound && (
        <div className="flex flex-col gap-2">
          <div>city:{renderedData.name}</div>
          <div>Temperature:{renderedData.temperature}</div>
          <div>Humidity:{renderedData.humidity}</div>
        </div>
      )}

      {notFound && <div>No city Found</div>}

      {totalData &&
        totalData.map((item) => {
          return (
            <button
              onClick={() => {
                handleSearch(item.name, true);
                setInputVal(item.name);
              }}
              className="border-2"
            >
              {item.name}
            </button>
          );
        })}
    </div>
  );
};

export default ArrayRender;
