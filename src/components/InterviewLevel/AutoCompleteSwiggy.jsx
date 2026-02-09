import React, { useEffect, useState } from "react";

const AutoCompleteSwiggy = () => {
  const [inputVal, setInputVal] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [dummyData, setDummyData] = useState([]);
  const [debouncedCallValue, setDebouncedCallValue] = useState("");

  // Debounce effect
  useEffect(() => {
    const timerId = setTimeout(() => {
        setDebouncedCallValue(inputVal);
    }, 300);

    return () => clearTimeout(timerId);
  }, [inputVal]);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");

        if (!response.ok) {
          throw new Error("APi Call failed");
        }

        const jsonFiedResponse = await response.json();
        setDummyData(jsonFiedResponse.products);
        console.log(dummyData);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredArray = dummyData.filter((items) => {
    return items.title.toLowerCase().includes(debouncedCallValue.toLowerCase());
  });

  return (
    <div className="flex gap-5 flex-col justify-center items-center w-full  ">
      <h3>Auto Complete Search Bar</h3>
      <input
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        className="border-2"
      />
      {filteredArray?.map((items) => {
        return <div>{items.title}</div>;
      })}
    </div>
  );
};

export default AutoCompleteSwiggy;
