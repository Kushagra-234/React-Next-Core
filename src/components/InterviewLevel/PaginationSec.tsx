import React, { useEffect, useState } from "react";

const names = [
  "Aarav",
  "Vivaan",
  "Aditya",
  "Vihaan",
  "Arjun",
  "Reyansh",
  "Muhammad",
  "Sai",
  "Arnav",
  "Ayaan",
  "Krishna",
  "Ishaan",
  "Shaurya",
  "Atharva",
  "Rudra",
  "Dhruv",
  "Kabir",
  "Ritvik",
  "Kunal",
  "Yash",
  "Aman",
  "Rohan",
  "Siddharth",
  "Ankit",
  "Nikhil",
  "Rahul",
  "Varun",
  "Akash",
  "Saurabh",
  "Manish",
  "Neeraj",
  "Pankaj",
  "Deepak",
  "Harsh",
  "Mohit",
  "Abhishek",
  "Shubham",
  "Ayush",
  "Prateek",
  "Gaurav",
  "Vikas",
  "Raj",
  "Sumit",
  "Tarun",
  "Kartik",
];

const PaginationSec = () => {
  const [page, setPage] = useState(1);
  const ITEMS_PER_PAGE = 10;
  const start = (page - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const data = names.slice(start, end);
  const totalPage = Math.ceil(names.length / ITEMS_PER_PAGE);

  useEffect(() => {
    console.log(totalPage, "totalPage");
    console.log(names.length);
  }, [totalPage]);

  return (
    <div className="flex flex-col h-full w-full justify-center items-center">
      <h3>Pagination</h3>
      <div>
        {data.map((items) => {
          return <div>{items}</div>;
        })}
        <div className="flex gap-3">
          <button
            className={page === totalPage ? "opacity-20" : ""}
            disabled={page === totalPage}
            onClick={() => setPage((prev) => prev + 1)}
          >
            NEXT
          </button>
          <button
            className={page === 1 ? "opacity-20" : ""}
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
          >
            PREV
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaginationSec;
