import React, { useState, useEffect } from "react";

const InfiniteScrollbest = () => {
  const [usersData, setUsersData] = useState([]);
  const [curPage, setCurpage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [errorState, setErrorState] = useState("");
  const ITEMS_PER_PAGE = 10;
  const start = (curPage - 1) * ITEMS_PER_PAGE;
  const end = ITEMS_PER_PAGE + start;
  const slicedData = usersData.slice(0, end);
  const totalPages = Math.ceil(usersData.length / ITEMS_PER_PAGE);

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

  const hanldeScroll = (e) => {
    const { scrollHeight, clientHeight, scrollTop } = e.target;
    console.log(scrollHeight, clientHeight, scrollTop);

    if (scrollTop + clientHeight >= scrollHeight - 50 && curPage < totalPages) {
      setCurpage((prev) => prev + 1);
    }
  };

  return (
    <div className="flex flex-col gap-3 justify-center items-center w-full h-full ">
      <h3>Infinite SCroll</h3>
      <div
        className="h-48 p-2 overflow-y-auto border"
        onScroll={(e) => hanldeScroll(e)}
      >
        {slicedData.map((items) => {
          return <div>{items.title}</div>;
        })}
      </div>
    </div>
  );
};

export default InfiniteScrollbest;

function debounce(fn, delay) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function throttle(fn, delay) {
  let isThrottling = false;

  return function (...args) {
    if (isThrottling) return;
    fn.apply(this, args);
    isThrottling = true;

    setTimeout(() => {
      isThrottling = false;
    }, delay);
  };
}

const arr = [1, 2, 2, 3, 4];

function removeDuplicate(arr) {
  let map = {};
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] === undefined) {
      map[arr[i]] = true;
      result.push(arr[i]);
    }
  }

  return result;
}
