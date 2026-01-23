// jaise hi window ke end pe aajae scroll krwa do
// uss scroll pe page bhi change krdo uss hisaab se data load hona chahiye
// mtlb jab tk window end nhi hui page 1 and jab scoll ho gyi page 2

import React, { useEffect, useState } from "react";

const ALL_DATA = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  title: `Item ${i + 1}`,
}));

const ITEMS_PER_PAGE = 10;

const InfiniteScroll = () => {
  const [page, setPage] = useState(1);
  const [result, setResult] = useState<any[]>([]);
  const [hasMore, setHasMore] = useState(true);

  const getData = (pageNaya) => {
    const start = (pageNaya - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    return ALL_DATA.slice(start, end);
  };

  useEffect(() => {
    const returnedArr = getData(page);
    setResult([...result, ...returnedArr]);

    if (returnedArr.length === 0) {
      setHasMore(false);
    }
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      const { clientHeight, scrollTop, scrollHeight } =
        document.documentElement;
      //   clientHeight screen height
      //   scrollTop kitna upar se scroll kiya

      if (scrollTop + clientHeight >= scrollHeight - 50 && hasMore) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore]);

  return (
    <div className="w-full flex flex-col">
      <div>Infinite scroll</div>
      <div>
        {result.map((item) => {
          return <div>{item?.title}</div>;
        })}
      </div>
    </div>
  );
};

export default InfiniteScroll;
