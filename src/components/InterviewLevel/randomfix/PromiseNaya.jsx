import React, { useEffect } from "react";

const PromiseNaya = () => {
  //   const promise = new Promise((resolve, reject) => {
  //     resolve("hey");
  //   });

  const rejectPromise = new Promise((resolve, reject) => {
    reject("fail hua ");
  });

  const resolvePromise = Promise.resolve("hey");

  resolvePromise.then((res) => {
    console.log(res);
  });

  useEffect(() => {}, []);

  rejectPromise.then(

    (err) => console.log(err)
  );

  //   promise.then((res) => {
  //     console.log(res);
  //   });

  return <div>Hey</div>;
};

export default PromiseNaya;
