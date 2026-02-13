import React, { useState, useEffect, useRef } from "react";

const InfiniteScrollNayaNew = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [dummyData, setDummyData] = useState([]);
  const [curPage, setCurPage] = useState(1);
  const ITEMS_PER_PAGE = 10;
  const containerRef = useRef(null);

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

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const { clientHeight, scrollHeight, scrollTop } = el;
    const handleScroll = () => {
      if (scrollTop + clientHeight >= scrollHeight - 50) {
        setCurPage((prev) => prev + 1);
      }
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  });

  const dataRender = dummyData.slice(0, end);

  return (
    <div className="flex flex-col gap-3 h-[300px] w-full justify-center items-center">
      <h3>Infinite scroll</h3>
      <div className="h-[250px] overflow-y-auto" ref={containerRef}>
        
        {dataRender.map((items) => {
          return <div>{items.title}</div>;
        })}
      </div>
    </div>
  );
};

export default InfiniteScrollNayaNew;
