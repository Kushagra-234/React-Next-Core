import React, { useState } from "react";

const DataTable2 = ({ data }) => {
  const [localData, setLocalData] = useState(data);
  const [originalData, setOriginalData] = useState(data);
  const [ascVal, setascVal] = useState(true);
  const [inputVal, setInputVal] = useState("");
  // const /
  const handleSort = () => {
    const nayadata = [...localData];
    console.log("hello");
    if (ascVal == true) nayadata.sort((a, b) => a.name.localeCompare(b.name));
    if (ascVal === false) nayadata.sort((a, b) => b.name.localeCompare(a.name));
    setascVal(!ascVal);

    console.log(nayadata);

    setLocalData(nayadata);
  };

  const handleKeyDown = (e) => {
    if (!inputVal) {
      setLocalData(originalData);
      return;
    }
    if (e.key === "Enter" && inputVal) {
      const nayaFilterArr = localData.filter((item) => {
        return item.name.toLowerCase().includes(inputVal.toLowerCase());
      });

      setLocalData(nayaFilterArr);
    }
  };
  return (
    <div className="flex justify-center w-full items-center flex-col gap-3 ">
      <h3>Data Table</h3>
      <div className="flex flex-col border-2 justify-center items-center w-[60%]">
        <div className="flex w-full justify-between">
          <div>FIlter</div>
          <input
            onKeyDown={(e) => handleKeyDown(e)}
            onChange={(e) => setInputVal(e.target.value)}
            className="border-2"
          />
        </div>

        <table className="w-full  border-black">
          <thead>
            <tr>
              <th className="flex justify-start gap-3">
                <div>Name</div>
                <button onClick={() => handleSort()}>
                  Sort {ascVal ? "asc" : "dsc"}
                </button>
              </th>
              <th className="text-start">Age</th>
              <th className="text-start">role</th>
            </tr>
          </thead>
          <tbody>
            {localData.map((node) => {
              return (
                <tr key={node.id} style={{ textAlign: "start" }}>
                  <td>{node.name}</td>
                  <td>{node.age}</td>
                  <td>{node.role}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable2;
