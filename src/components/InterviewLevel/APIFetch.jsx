import React, { useEffect, useState } from "react";

const APIFetch = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleAPI = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      console.log(response, "data");

      if (!response.ok) {
        throw new Error("API failed");
      }

      const data = await response.json();
      console.log(data)
      setPosts(data);
    } catch (err) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleAPI();
  }, []);
  return (
    <div className="w-full h-full justify-center items-center flex flex-col">
      <h3>API Call</h3>
    </div>
  );
};

export default APIFetch;



// uselayouteffect used ofr dom changes before paint blocks UI 