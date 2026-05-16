import React, { useEffect, useState } from "react";

const CryptoWebSocket = () => {
  const [tokensData, setTokensData] = useState([]);

  useEffect(() => {
    const ws = new WebSocket(
      "wss://stream.binance.com:9443/stream?streams=btcusdt@ticker/ethusdt@ticker/bnbusdt@ticker/solusdt@ticker/xrpusdt@ticker"
    );

    ws.onopen = () => {
      console.log("ws connected");
    };

    ws.onmessage = (event) => {
      console.log("message received");
      //   console.log(event.data);
      const res = JSON.parse(event.data);
      const jsonFiedResponse = res.data;

      const formatted = {
        symbol: jsonFiedResponse.s,
        price: jsonFiedResponse.c,
        volume: jsonFiedResponse.v,
      };

      console.log(formatted, "formatted");

      setTokensData((oldData) => {
        const isFound = oldData.find(
          (coin) => coin.symbol === formatted.symbol
        );

        if (isFound) {
          return oldData.map((coin) => {
            if (coin.symbol === formatted.symbol) {
              return  formatted ;
            } else return coin;
          });
        } else {
          return [...oldData, formatted];
        }
      });
    };

    return () => {
      ws.close();
    };
    // console.log(ws);
  }, []);

  useEffect(() => {
    console.log(tokensData, "tokensData");
  }, [tokensData]);

  return (
    <div className="w-full flex justify-center items-center">
      <h3>Binance Websocket List</h3>
      <div></div>
    </div>
  );
};

export default CryptoWebSocket;
