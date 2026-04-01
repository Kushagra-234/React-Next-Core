import React, { useState, useEffect } from "react";

const PaginationBest = () => {
  const [curPage, setCurpage] = useState(1);
  const [usersData, setUsersData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorState, setErrorState] = useState("");

  const ITEMS_PER_PAGE = 10;
  const start = (curPage - 1) * ITEMS_PER_PAGE;

  const end = start + ITEMS_PER_PAGE;
  const data = usersData.slice(start, end);

  const ITEMS_LENGTH = Math.ceil(usersData.length / ITEMS_PER_PAGE);
  console.log(ITEMS_LENGTH);

  useEffect(() => {
    setIsLoading(true);
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        if (!response.ok) {
          throw new Error("Failed to Fetch Users");
        }

        const jsonFiedRes = await response.json();
        console.log(jsonFiedRes);
        setUsersData(jsonFiedRes);
      } catch (e) {
        setErrorState(e.message || "Something Went Wrong");
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    }

    fetchUsers();
  }, []);

  let renderLengthArr = [];

  for (var i = 0; i < ITEMS_LENGTH; i++) {
    renderLengthArr.push(i);
  }

  console.log(renderLengthArr);

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <h3>Pagination </h3>
      <div>
        {data.map((item) => {
          return <div>{item.title}</div>;
        })}
      </div>
      <div className="flex gap-3">
        {renderLengthArr.map((item) => {
          return (
            <button onClick={() => setCurpage(item + 1)}>{item + 1}</button>
          );
        })}
        <button
          disabled={curPage === 1}
          onClick={() => setCurpage((prev) => prev - 1)}
        >
          Previous
        </button>
        <button
          disabled={curPage === ITEMS_LENGTH}
          onClick={() => setCurpage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationBest;
