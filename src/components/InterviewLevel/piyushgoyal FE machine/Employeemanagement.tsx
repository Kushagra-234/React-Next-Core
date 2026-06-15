import React, { useState } from "react";

interface UserObject {
  id: number | null;
  name: string;
  address: string;
  profileImageUrl: string;
  phoneNumber: number;
}

const Employeemanagement = () => {
  const [userArray, setUserArray] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [newUserObj, setNewUserObj] = useState<UserObject>({
    id: null,
    name: "",
    address: "",
    profileImageUrl: "",
    phoneNumber: 0,
  });

  const handleAddEmployee = () => {
    setShowModal(true);
  };

  const saveInfo = () => {
    if (!newUserObj) return;

    setUserArray([
      ...userArray,
      {
        id: Date.now(),
        ...newUserObj,
      },
    ]);
    setNewUserObj({
      id: null,
      name: "",
      address: "",
      profileImageUrl: "",
      phoneNumber: 0,
    });
    setShowModal(false);
  };

  const handleDelete = () => {};
  return (
    <div className="flex relative w-full gap-5 p-5 flex-col">
      <div className="flex justify-between">
        <div>Employee Management</div>
        <button
          className="border px-2 cursor-pointer"
          onClick={handleAddEmployee}
        >
          Add Employee
        </button>
      </div>
      <div className="w-full  border border-black h-full flex">
        <div className="flex items-start w-[40%] border-r flex-col gap-5">
          {userArray &&
            userArray.map((userItem) => {
              return (
                <div className="flex py-2 w-full border bg-amber-50 justify-around">
                  <div>{userItem.name}</div>
                  <button onClick={handleDelete}>Delete</button>{" "}
                </div>
              );
            })}

          {userArray.length === 0 && <div>No user Added</div>}
        </div>

        {/* second container showing profile */}
        <div></div>
      </div>
      {showModal && (
        <div className="w-62.5 absolute top-50 left-150 border border-black">
          <div className="flex p-2 w-full gap-5 flex-col">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <label>Name</label>
                <input
                  value={newUserObj?.name}
                  onChange={(e) =>
                    setNewUserObj({ ...newUserObj, name: e.target.value })
                  }
                  className="border"
                />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <label>Address</label>
                <input
                  value={newUserObj?.address}
                  onChange={(e) =>
                    setNewUserObj({ ...newUserObj, address: e.target.value })
                  }
                  className="border"
                />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <label>ProfileImage URL</label>
                <input
                  value={newUserObj?.profileImageUrl}
                  onChange={(e) =>
                    setNewUserObj({
                      ...newUserObj,
                      profileImageUrl: e.target.value,
                    })
                  }
                  className="border"
                />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <label>Mobile Number</label>
                <input
                  value={newUserObj?.phoneNumber}
                  onChange={(e) =>
                    setNewUserObj({
                      ...newUserObj,
                      phoneNumber: Number(e.target.value),
                    })
                  }
                  className="border"
                />
              </div>
            </div>

            <button onClick={saveInfo} className="border cursor-pointer">
              Save Info
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Employeemanagement;
