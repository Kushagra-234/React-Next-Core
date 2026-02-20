import React, { useState, useEffect } from "react";

const DataTable2 = ({ data }) => {
  const [localData, setLocalData] = useState(data);
  const [ascVal, setAscVal] = useState(true);
  const [inputVal, setInputVal] = useState("");

  // 🔥 FILTER (real-time)
  useEffect(() => {
    if (!inputVal.trim()) {
      setLocalData(data);
      return;
    }

    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(inputVal.toLowerCase())
    );

    setLocalData(filtered);
  }, [inputVal, data]);

  // 🔥 SORT
  const handleSort = () => {
    const sorted = [...localData].sort((a, b) =>
      ascVal ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );

    setLocalData(sorted);
    setAscVal(!ascVal);
  };

  return (
    <div className="flex justify-center w-full items-center flex-col gap-5">
      <h3 className="text-xl font-bold">Data Table</h3>

      <div className="flex flex-col border rounded shadow w-[60%] p-4 gap-4">
        {/* FILTER */}
        <div className="flex justify-between items-center">
          <div className="font-semibold">Filter by Name:</div>
          <input
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            className="border px-2 py-1 rounded"
            placeholder="Search name..."
          />
        </div>

        {/* TABLE */}
        <table className="w-full border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="text-left p-2">
                <div className="flex items-center gap-3">
                  <span>Name</span>
                  <button
                    onClick={handleSort}
                    className="border px-2 py-1 rounded text-sm"
                  >
                    Sort {ascVal ? "↑" : "↓"}
                  </button>
                </div>
              </th>
              <th className="text-left p-2">Age</th>
              <th className="text-left p-2">Role</th>
            </tr>
          </thead>

          <tbody>
            {localData.length === 0 ? (
              <tr>
                <td colSpan="3" className="text-center p-3 text-gray-500">
                  No Data Found
                </td>
              </tr>
            ) : (
              localData.map((node) => (
                <tr key={node.id} className="border-t hover:bg-gray-100">
                  <td className="p-2">{node.name}</td>
                  <td className="p-2">{node.age}</td>
                  <td className="p-2">{node.role}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable2;
