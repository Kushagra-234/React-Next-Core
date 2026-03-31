// Question: User Management Dashboard
// Mock data

// Requirements
// Ek search input ho jo name pe filter kare.
// Ek role dropdown ho: All / Admin / User / Moderator
// Ek status dropdown ho: All / Active / Inactive
// Filtered users ki list render ho.
// Har user ke saamne ek button ho:
// agar status Active hai to button: Deactivate
// agar status Inactive hai to button: Activate
// Button click pe user ka status toggle ho jana chahiye.
// Ek Selected User panel ho:
// user row pe click karne par uski full info upar render ho
// Ek Add User section ho:
// Name input
// Role select
// Add button
// naya user default Inactive status ke saath add ho
// Duplicate name allow mat karna
// Agar filters ke baad kuch na mile to show:
// No users found
// Ek Clear Filters button ho jo search, role, status reset kare

import React, { useState } from "react";

const users = [
  { id: 1, name: "Aman", role: "Admin", status: "Active" },
  { id: 2, name: "Riya", role: "User", status: "Inactive" },
  { id: 3, name: "Karan", role: "Moderator", status: "Active" },
  { id: 4, name: "Sneha", role: "User", status: "Active" },
  { id: 5, name: "Rohit", role: "Admin", status: "Inactive" },
];

const UsersManagementDashboard = () => {
  const [usersData, setUsersData] = useState(users);
  const [inputVal, setInputVal] = useState("");
  const [role, setRole] = useState("All");
  const [status, setStatus] = useState("All");
  const [addUserState, setAddUserState] = useState(false);
  const [newUserState, setNewuserState] = useState({
    name: "",
    role: "",
    status: "Inactive",
  });

  const handleAddUser = () => {
    const newUser = {
      id: Date.now(),
      ...newUserState,
    };
    // console.log(newUserState);
    const alreadyExists = usersData.find((item) => item.name === newUser.name);
    if (alreadyExists) {
      alert("This Name already exists");
      return;
    }
    setUsersData([...usersData, newUser]);
    setAddUserState(false);

    // setUserRenderedArray(false);
  };

  const handleStatus = (id) => {
    const updatedArray = usersData.map((activeItem) => {
      if (activeItem.id === id) {
        return {
          ...activeItem,
          status: activeItem.status === "Active" ? "Inactive" : "Active",
        };
      } else return activeItem;
    });

    setUsersData(updatedArray);
  };

  //   console.log(userRenderedArray);

  const searchedArray = usersData.filter((item) => {
    return item.name.toLowerCase().includes(inputVal.toLowerCase());
  });

  const roleArray = searchedArray.filter((roleItem) => {
    if (role === "All") {
      return roleItem;
    } else return roleItem.role === role;
  });

  const ActiveArray = roleArray.filter((activeItem) => {
    if (status === "All") {
      return activeItem;
    } else return activeItem.status === status;
  });

  return (
    <div className="flex flex-col gap-4 justify-center items-center w-full">
      <h3>Users management Dashboard</h3>
      <div className="flex m-2 w-[80%] justify-between">
        <input
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          className="border"
        />
        <select onChange={(e) => setRole(e.target.value)} className="border">
          <option value={"All"}>All</option>
          <option value={"Admin"}>Admin</option>
          <option value={"User"}>User</option>
          <option value={"Moderator"}>Moderator</option>
        </select>

        <select onChange={(e) => setStatus(e.target.value)} className="border">
          <option value={"All"}>All</option>
          <option value={"Active"}>Active</option>
          <option value={"Inactive"}>Inactive</option>
        </select>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => setAddUserState(!addUserState)}
            className="border px-3"
          >
            Add User
          </button>

          {addUserState && (
            <div className="flex flex-col gap-3 border p-4 rounded w-[300px]">
              <div className="flex flex-col gap-1">
                <label>Name</label>
                <input
                  value={newUserState.name}
                  onChange={(e) =>
                    setNewuserState({ ...newUserState, name: e.target.value })
                  }
                  className="border px-2 py-1 rounded"
                  placeholder="Enter name"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label>Role</label>
                <select
                  value={newUserState.role}
                  onChange={(e) =>
                    setNewuserState({ ...newUserState, role: e.target.value })
                  }
                  className="border px-2 py-1 rounded"
                >
                  <option value="">Select role</option>
                  <option value="Admin">Admin</option>
                  <option value="User">User</option>
                  <option value="Moderator">Moderator</option>
                </select>
              </div>

              <button
                onClick={handleAddUser}
                className="border rounded px-3 py-1"
              >
                Submit
              </button>
            </div>
          )}
        </div>

        <div className="">
          <button
            onClick={() => {
              setInputVal("");
              setRole("All");
              setStatus("All");
            }}
            className="border"
          >
            Clear Filters
          </button>
        </div>
      </div>
      <table className="border-2 w-[80%]">
        <thead>
          <tr>
            <th className="p-3 text-left text-sm font-semibold border">Name</th>
            <th className="p-3 text-left text-sm font-semibold border">Role</th>
            <th className="p-3 text-left text-sm font-semibold border">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {ActiveArray.length === 0 && <td>No Such entry Found</td>}
          {ActiveArray &&
            ActiveArray.map((userItem) => {
              return (
                <tr key={userItem.id}>
                  <td className="p-3 border">{userItem.name}</td>
                  <td className="p-3 border">{userItem.role}</td>
                  <td className="p-3 flex gap-12 justify-start border">
                    <div>{userItem.status}</div>
                    <div>
                      <button
                        onClick={() => handleStatus(userItem.id)}
                        className="border px-1"
                      >
                        {userItem.status === "Active"
                          ? "Deactivate"
                          : "Activate"}
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default UsersManagementDashboard;
