import React, { useState } from "react";

const TabsSection = () => {
  const ActiveTab = {
    profile: "Profile",
    name: "Name",
    settings: "Settings",
  };
  const [activeTab, setActiveTab] = useState(ActiveTab.profile);

  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      TabList
      <div className="flex border-2 p-2 px-5 gap-3">
        <button
          onClick={() => setActiveTab(ActiveTab.profile)}
          className="cursor-pointer"
        >
          Profile
        </button>
        <button
          onClick={() => setActiveTab(ActiveTab.name)}
          className="cursor-pointer"
        >
          Name
        </button>
        <button
          onClick={() => setActiveTab(ActiveTab.settings)}
          className="cursor-pointer"
        >
          Settings
        </button>
      </div>
      {activeTab === ActiveTab.profile ? (
        <div>this is profile Tab</div>
      ) : activeTab === ActiveTab.name ? (
        <div>this is Name tab</div>
      ) : (
        <div>this is settings tab</div>
      )}
    </div>
  );
};

export default TabsSection;

const debounce = (fn, delay) => {
  let timerid;
  return function (...args) {
    clearTimeout(timerid);

    timerid = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};
