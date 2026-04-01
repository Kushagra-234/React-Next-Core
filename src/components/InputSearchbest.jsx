import React, { useEffect, useState } from "react";

const InputSearchbest = () => {
  const [usersData, setUsersData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [debouncedVal, setDebouncedVal] = useState("");
  const [errorState, setErrorState] = useState("");

  useEffect(() => {
    let timerId;

    timerId = setTimeout(() => {
      setDebouncedVal(inputVal);
    }, 300);

    return () => clearTimeout(timerId);
  }, [inputVal]);

  useEffect(() => {
    setIsLoading(true);
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Failed to Fetch Users");
        }

        const jsonFiedRes = await response.json();
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

  const filterArray = usersData.filter((itemName) => {
    return itemName.name.toLowerCase().includes(debouncedVal.toLowerCase());
  });

  if (isLoading) {
    return (
      <div className="w-full h-full justify-center items-center flex">
        fetching data{" "}
      </div>
    );
  }

  if (errorState) {
    return <div>{errorState}</div>;
  }

  return (
    <div className="flex flex-col gap-3 justify-center items-center w-full h-full">
      <h3>Input Filter List</h3>
      <input
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        className="border"
      />
      <div className="flex flex-col gap-3">
        {filterArray &&
          filterArray.map((usersItem) => {
            return (
              <div key={usersItem.id}>
                <div> Name:{usersItem.name}</div>
                <div>Email:{usersItem.email}</div>
              </div>
            );
          })}

        {filterArray.length === 0 && <div>No Result Found</div>}
      </div>
    </div>
  );
};

export default InputSearchbest;
