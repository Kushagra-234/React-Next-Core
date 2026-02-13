import React, { useEffect, useState } from "react";

const AutoCompleteNaya = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    let timerId;

    timerId = setTimeout(() => {
      setDebouncedValue(inputVal);
    }, 300);

    return () => clearTimeout(timerId);
  }, [inputVal]);

  useEffect(() => {
    if (!debouncedValue) {
      setData([]);
      return;
    }

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://dummyjson.com/products/search?q=${debouncedValue}`
        );
        const finalRes = await response.json();
        setData(finalRes.products);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [debouncedValue]);

  return (
    <div className="flex flex-col w-full h-full justify-center items-center gap-3">
      <h3>Autocomplete</h3>
      <input
        value={inputVal}
        className="border-2"
        onChange={(e) => setInputVal(e.target.value)}
      />
      {data.map((item) => {
        return <div>{item.title}</div>;
      })}

      {debouncedValue && data.length === 0 && <div>No entries Found</div>}
    </div>
  );
};

export default AutoCompleteNaya;
