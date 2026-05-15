import { json } from "node:stream/consumers";
import React, { useEffect, useState } from "react";

const CryptoDashboard = () => {
  const [tokenData, setTokenData] = useState<any[]>([]);
  const [curPage, setCurPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [sortEnabled, setSortEnabled] = useState(false);
  const [watchListData, setWatchListData] = useState<any[]>([]);

  const ITEMS_PER_PAGE = 10;
  const start = (curPage - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;

  useEffect(() => {
    localStorage.setItem("watchListData", JSON.stringify(watchListData));
  }, [watchListData]);

  useEffect(() => {
    const savedData = localStorage.getItem("watchListData");
    if (savedData) {
      setWatchListData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    setIsLoading(true);
    async function fetchPrices() {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
        );
        const jsonFiedRes = await res.json();
        setTokenData(jsonFiedRes);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPrices();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full justify-center items-center flex">Loading</div>
    );
  }

  const filteredArray = tokenData.filter((coin: any) => {
    return coin?.name?.toLowerCase().includes(inputVal.toLowerCase());
  });

  if (sortEnabled) {
    filteredArray.sort((a: any, b: any) => a.name.localeCompare(b.name));
  }

  const handleSort = () => {
    setSortEnabled(true);
  };

  const slicedArray = filteredArray.slice(start, end);
  const totalPages = Math.ceil(filteredArray.length / ITEMS_PER_PAGE);

  const handleWatchList = (coin: any) => {
    const isFound = watchListData.find((item) => item.id === coin.id);

    if (isFound) {
      setWatchListData(watchListData.filter((item) => item.id !== coin.id));
    } else {
      setWatchListData([...watchListData, coin]);
    }
  };

  // const isAdded = watchListData.some((item) => item.id === tokenDataItem.id);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h3>Crypto Dashboard</h3>
      <table className="mt-5">
        <div className="flex w-full gap-5 justify-between my-3">
          <input
            onChange={(e) => {
              setInputVal(e.target.value);
              setCurPage(1);
            }}
            className="border"
          />
        </div>
        <thead>
          <tr>
            <th className="border flex gap-3 p-2 ">
              <div className="flex gap-3">Name </div>
              <button onClick={handleSort}>||</button>
            </th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Market Cap</th>
            <th className="border p-2">24h Change</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {slicedArray.map((tokenDataItem) => {
            const isAdded = watchListData.some(
              (item) => item.id === tokenDataItem.id
            );

            return (
              <tr>
                <td className="border p-3">{tokenDataItem.name}</td>
                <td className="border p-3">{tokenDataItem.current_price}</td>
                <td className="border p-3">{tokenDataItem.market_cap}</td>
                <td className="border p-3">{tokenDataItem.total_volume}</td>
                <td className="border p-3">
                  <button
                    onClick={() => handleWatchList(tokenDataItem)}
                    className="border px-2"
                  >
                    {isAdded ? "Remove" : "Add"}
                  </button>
                </td>
              </tr>
            );
          })}

          {slicedArray.length === 0 && (
            <tr>
              <td colSpan={5}>No coins found</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="flex gap-3">
        <button
          disabled={curPage === 1}
          onClick={() => setCurPage((prev) => prev - 1)}
          className="border"
        >
          Prev
        </button>
        <button
          disabled={curPage === totalPages}
          onClick={() => setCurPage((prev) => prev + 1)}
          className="border"
        >
          Next
        </button>
      </div>

      <div className="flex flex-col gap-5">
        <h3>WatchList data </h3>
        {watchListData.map((watchListDataItem) => {
          return (
            <div className="flex gap-4 justify-between">
              <div>{watchListDataItem.name}</div>
              <div>{watchListDataItem.current_price}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CryptoDashboard;
