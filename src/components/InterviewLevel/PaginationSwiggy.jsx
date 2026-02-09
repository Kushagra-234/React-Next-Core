import React, { useEffect, useState } from "react";

const PaginationSwiggy = () => {
  const [curPage, setCurPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [dummyData, setDummyData] = useState([]);
  const ITEMS_PER_PAGE = 10;
  const start = (curPage - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const dataToRender = dummyData.slice(start, end);
  const totalPages = Math.ceil(dummyData.length / ITEMS_PER_PAGE);

  const pages = [];

  for (var i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  useEffect(() => {
    setIsLoading(true);
    const fetchAPI = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products?limit=200"
        );

        if (!response.ok) throw new Error("API failed");

        const data = await response.json();
        setDummyData(data.products);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAPI();
  }, []);

  useEffect(() => {
    console.log("dummyData", dummyData);
  }, [dummyData]);

  if (isLoading) {
    return (
      <div className="w-full flex  h-full justify-center items-center">
        Loading data{" "}
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <h3>Pagination Cart</h3>
      <div>
        {dataToRender.map((items) => {
          return <div>{items.title}</div>;
        })}
      </div>

      <div className="flex mt-5 gap-3">
        {pages.map((i) => {
          return (
            <button
                className={i === curPage ? "border-2 px-2" : ""}
              onClick={() => setCurPage(i)}
            >
              {i}
            </button>
          );
        })}
      </div>

      {/* <div className="flex gap-3 mt-5">
        <button
          className={curPage === totalPages ? "opacity-30" : ""}
          disabled={totalPages === curPage}
          onClick={() => setCurPage((prev) => prev + 1)}
        >
          Next
        </button>
        <button
          className={curPage === 1 ? "opacity-30" : ""}
          disabled={curPage === 1}
          onClick={() => setCurPage((prev) => prev - 1)}
        >
          Previous
        </button>
      </div> */}
    </div>
  );
};

export default PaginationSwiggy;
