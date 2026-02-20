import React, { useEffect, useRef, useState } from "react";

const InfiniteScrollNayaNew = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [dummyData, setDummyData] = useState([]);
  const [curPage, setCurPage] = useState(1);

  const ITEMS_PER_PAGE = 10;
  const containerRef = useRef(null);

  const containerRef2 = useRef(null);
  const end2 = curPage * ITEMS_PER_PAGE;

  const end = curPage * ITEMS_PER_PAGE;
  const dataRender = dummyData.slice(0, end);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) throw new Error("API Call failed");
        const json = await response.json();
        setDummyData(json.products);
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

    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = el;

      // already loaded all
      if (end >= dummyData.length) return;

      if (scrollTop + clientHeight >= scrollHeight - 50) {
        setCurPage((prev) => prev + 1);
      }
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, [end, dummyData.length]); // ✅ important

  return (
    <div className="flex flex-col gap-3 h-[300px] w-full justify-center items-center">
      <h3>Infinite scroll</h3>

      <div
        className="h-[250px] overflow-y-auto border w-[300px] p-2"
        ref={containerRef2}
      >
        {dataRender.map((item) => (
          <div key={item.id} className="border-b py-2">
            {item.title}
          </div>
        ))}

        {isLoading && <div className="py-2">Loading...</div>}

        {!isLoading && end >= dummyData.length && dummyData.length > 0 && (
          <div className="py-2 text-gray-500">No more items</div>
        )}
      </div>
    </div>
  );
};

export default InfiniteScrollNayaNew;
