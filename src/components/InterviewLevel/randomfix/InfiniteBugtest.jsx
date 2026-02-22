import React, { useEffect, useState } from "react";
import useDebInputNaya from "./useDebInputNaya";

const InfiniteBugtest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [curPage, setCurPage] = useState(1);
  const [usersData, setUsersData] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const ITEMS_PER_PAGE = 10;
  const start = (curPage - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const dataNew = usersData.slice(start, end);
  const total_pages = Math.ceil(usersData.length / ITEMS_PER_PAGE);

  const { debouncedVal } = useDebInputNaya(inputVal, 300);

  const debouncedData = dataNew.filter((item) => {
    return item.title.toLowerCase().includes(debouncedVal.toLowerCase());
  });

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setUsersData(data);
      } catch (err) {
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h3>Input list with debounce and other shits</h3>
      <input
        onChange={(e) => setInputVal(e.target.value)}
        className="border-2"
      />
      {debouncedData.map((item) => {
        return <div className="">{item.title}</div>;
      })}

      <div className="flex mt-15 gap-5">
        <button
          disabled={curPage === 0}
          onClick={() => setCurPage((prev) => prev - 1)}
          className="border-2 px-3"
        >
          Previous
        </button>
        <button
          disabled={total_pages === curPage}
          onClick={() => setCurPage((prev) => prev + 1)}
          className="border-2 px-3"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default InfiniteBugtest;
