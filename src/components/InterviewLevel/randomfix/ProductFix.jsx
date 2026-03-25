// Question: Product Search + Favourites Panel

// Ek mock products array diya hoga:

// const products = [
//   { id: 1, name: "iPhone 15", category: "Mobile", price: 80000 },
//   { id: 2, name: "Samsung S24", category: "Mobile", price: 75000 },
//   { id: 3, name: "MacBook Air", category: "Laptop", price: 110000 },
//   { id: 4, name: "Dell XPS", category: "Laptop", price: 95000 },
//   { id: 5, name: "Boat Rockerz", category: "Audio", price: 2500 },
// ];
// Tujhe ye features banana hai:
// Ek search input ho jo product name ke basis pe filter kare.
// Ek category dropdown ho jisse category filter ho.
// Matching products ki list render ho.
// Har product ke saamne “Add to Favourites” button ho.
// Jo products favourite ho chuke hain unhe alag Favourites section me dikhana hai.
// Favourite item pe click karne par uski full info upar detail panel me render honi chahiye.
// Same product favourites me duplicate nahi aana chahiye.
// Agar search/category ke basis pe kuch nahi milta, show: “No products found”
// Ek “Clear Filters” button bhi ho jo search aur category reset kar de.
const products = [
  { id: 1, name: "iPhone 15", category: "Mobile", price: 80000 },
  { id: 2, name: "Samsung S24", category: "Mobile", price: 75000 },
  { id: 3, name: "MacBook Air", category: "Laptop", price: 110000 },
  { id: 4, name: "Dell XPS", category: "Laptop", price: 95000 },
  { id: 5, name: "Boat Rockerz", category: "Audio", price: 2500 },
];

import React, { useEffect, useState } from "react";

const ProductFix = () => {
  const [inputval, setInputVal] = useState("");
  const [category, setCategory] = useState("all");
  const [favouriteArray, setFavouriteArray] = useState([]);
  const [renderedArray, setRenderedArray] = useState(products);

  const filteredArray = products.filter((arritem) => {
    return arritem.name.toLowerCase().includes(inputval.toLowerCase());
  });

  //   setRenderedArray(filteredArray);

  const categoryArray = filteredArray.filter((categoryItem) => {
    if (category === "all") {
      return categoryItem;
    } else return category === categoryItem.category;
  });

  useEffect(() => {
    setRenderedArray(categoryArray);
  }, [filteredArray]);

  //   setRenderedArray(
  //     categoryArray ? categoryArray : filteredArray ? filteredArray : products
  //   );

  const handleFavourites = (id) => {
    const matchedItem = products.find((item) => item.id === id);

    const findMatchedItem = favouriteArray.find((item) => item.id === id);
    if (!findMatchedItem) {
      setFavouriteArray([...favouriteArray, matchedItem]);
    }
  };

  return (
    <div className="flex flex-col w-full justify-center items-center h-full">
      <h3>Product Fix</h3>

      <div className="flex gap-5">
        <input
          value={inputval}
          onChange={(e) => setInputVal(e.target.value)}
          className="border-2 my-5 mt-3"
        />
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value={"all"}>All</option>
          <option value={"Mobile"}>Mobile</option>
          <option value={"Laptop"}>Laptop</option>
          <option value={"Audio"}>Audio</option>
        </select>

        <button
          onClick={() => {
            setRenderedArray(products);
          }}
          className="border-2 px-2 py-0"
        >
          Clear Filters
        </button>
      </div>

      <div className="flex  w-[80%] justify-between">
        {renderedArray &&
          renderedArray.map((productItem) => {
            return (
              <div className="flex flex-col">
                <div>Name:{productItem.name}</div>
                <div>category : {productItem.category}</div>
                <div>Price : {productItem.price}</div>
                <button
                  onClick={() => handleFavourites(productItem.id)}
                  className="border-2 mt-3 px-2 py-1"
                >
                  Add to favourite
                </button>
              </div>
            );
          })}
      </div>

      <div className="flex mt-15 flex-col">
        <h3>Favourite Section</h3>
        <div className="flex w-[50%] gap-20 justify-between">
          {favouriteArray &&
            favouriteArray.map((favouriteItem) => {
              return (
                <div className="flex gap-4 flex-col">
                  <div>{favouriteItem.name}</div>
                  <div>{favouriteItem.category}</div>
                  <div>{favouriteItem.price}</div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ProductFix;
