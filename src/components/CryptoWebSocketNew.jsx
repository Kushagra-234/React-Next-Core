import React, { useEffect, useState } from "react";

// websocket Render
// search
// sort
// filter
// pagination

const CryptoWebSocketNew = () => {
  const [tokensList, setTokensList] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [sortEnable, setSortEnable] = useState(false);

  useEffect(() => {
    const ws = new WebSocket(
      "wss://stream.binance.com:9443/stream?streams=btcusdt@ticker/ethusdt@ticker/bnbusdt@ticker/solusdt@ticker/xrpusdt@ticker"
    );

    ws.onopen = () => {
      console.log("Socket Conenction Opened ");
    };

    ws.onmessage = (event) => {
      //   console.log(event);

      const resJSON = JSON.parse(event.data);
      const data = resJSON.data;

      //   console.log(data);

      const formattedToken = {
        symbol: data.s,
        price: data.p,
        volume: data.v,
      };

      //   console.log(formattedToken, "formatted");

      setTokensList((oldTokensArr) => {
        const isFound = oldTokensArr.find(
          (coin) => coin.symbol === formattedToken.symbol
        );

        if (isFound) {
          return oldTokensArr.map((coin) => {
            if (coin.symbol === formattedToken.symbol) {
              return formattedToken;
            } else return coin;
          });
        } else {
          return [...oldTokensArr, formattedToken];
        }
      });
    };

    return () => {
      ws.close();
    };
  }, []);

  useEffect(() => {
    console.log(tokensList, "tokensData");
  }, [tokensList]);

  const filteredArray = tokensList.filter((coin) => {
    return coin.symbol.toLowerCase().includes(inputVal.toLowerCase());
  });

  if (sortEnable) {
    filteredArray.sort((a, b) => a.symbol.localeCompare(b.symbol));
  }

  const handleSort = () => {
    setSortEnable(true);
  };

  const slicedArray = filteredArray.slice(0, 1);

  return (
    <div className="w-full flex-col flex justify-center h-full items-center">
      <h3>Binance WebSocket Render NEW </h3>
      <table>
        <input
          onChange={(e) => setInputVal(e.target.value)}
          className="border my-5"
        />
        <thead>
          <tr>
            <th className="p-3 border">
              <div className="flex gap-3">
                <div>Symbol</div>
                <button onClick={handleSort}>||</button>
              </div>
            </th>
            <th className="p-3 border">Price</th>
            <th className="p-3 border">Volume</th>
          </tr>
        </thead>
        <tbody>
          {slicedArray.map((coin) => {
            return (
              <tr>
                <td className="p-3 border">{coin.symbol}</td>
                <td className="p-3 border">{coin.price}</td>
                <td className="p-3 border">{coin.volume}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoWebSocketNew;
