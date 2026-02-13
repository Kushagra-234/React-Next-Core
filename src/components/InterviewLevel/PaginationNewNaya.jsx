import React, { useState,useEffect } from "react";

const PaginationNewNaya = () => {
  const [dummyData, setDummyData] = useState([]);
  const [curPage, setCurPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const ITEMS_PER_PAGE = 10;
  const start = (curPage - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;

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

  const data = dummyData.slice(start, end);

  return (
    <div className="flex flex-col gap-3 h-full justify-center items-center">
      <h3>Pagination Naya</h3>
      {data.map((item) => {
        return <div>{item.title}</div>;
      })}

      <button onClick={() => setCurPage((prev) => prev - 1)}>Previous</button>
      <button onClick={() => setCurPage((prev) => prev + 1)}>Next</button>
    </div>
  );
};

export default PaginationNewNaya;
