import React, { useEffect, useState } from "react";

const Trello = () => {
  // useState me data ka form ek hi array se sab kro i think wo bdia rhgea
  // [] {id:Date.now(),status}
  const [tasksArray, setTasksArray] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [taskStatus, setTaskStaus] = useState("backlog");
  const [draggedTask, setDraggedTask] = useState(null);

  const handleAddTask = () => {
    // console.log("hello");
    if (!inputVal) return;
    // console.log("hello2");

    // console.log(taskStatus);

    const newTask = {
      id: Date.now(),
      taskName: inputVal,
      status: taskStatus,
    };

    // console.log(newTask);

    setTasksArray([...tasksArray, newTask]);
    setInputVal("");
  };

  function getStatusFromtaskArray(status) {
    return tasksArray.filter((item) => item.status === status);
  }

  useEffect(() => {
    console.log("set", tasksArray);
  }, [tasksArray]);

  const handleDrop = (newStatus) => {
    const updatedArray = tasksArray.map((taskItem) => {
      if (taskItem.id === draggedTask.id) {
        return { ...taskItem, status: newStatus };
      } else return taskItem;
    });
    setTasksArray(updatedArray);
  };

  return (
    <div className="flex flex-col w-full justify-center items-center h-full gap-5">
      <h3>Trello Board</h3>
      <div className="flex gap-3">
        <input
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          className="border"
        />
        <select onChange={(e) => setTaskStaus(e.target.value)}>
          <option value={"backlog"}>backlog</option>
          <option value={"InProgress"}>InProgress</option>
          <option value={"QA"}>QA</option>
          <option value={"Shipped"}>Shipped</option>
        </select>
        <button onClick={handleAddTask} className="border px-2 cursor-pointer">
          Add
        </button>
      </div>
      <div className="flex min-w-200 mt-8 justify-around">
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => handleDrop("backlog")}
          className="flex flex-col"
        >
          <h3>Backlog</h3>
          {getStatusFromtaskArray("backlog").map((taskItem) => {
            return (
              <div draggable onDragStart={() => setDraggedTask(taskItem)}>
                {taskItem.taskName}
              </div>
            );
          })}
        </div>
        <div className="flex flex-col">
          <h3>InProgress</h3>
          {getStatusFromtaskArray("InProgress").map((taskItem) => {
            return (
              <div draggable onDragStart={() => setDraggedTask(taskItem)}>
                {taskItem.taskName}
              </div>
            );
          })}
        </div>
        <div className="flex flex-col">
          <h3>QA</h3>
          {getStatusFromtaskArray("QA").map((taskItem) => {
            return (
              <div draggable onDragStart={() => setDraggedTask(taskItem)}>
                {taskItem.taskName}
              </div>
            );
          })}
        </div>
        <div className="flex flex-col">
          <h3>Shipped</h3>
          {getStatusFromtaskArray("Shipped").map((taskItem) => {
            return (
              <div draggable onDragStart={() => setDraggedTask(taskItem)}>
                {taskItem.taskName}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Trello;

// okay pehle ek array se sab maintain kro
// object of array {id,text:status}
// then render on basis of status using utlity function funtion(status) filter on basis of filter
// input for adding new and select for intiial status onChange on status and value on each dropdown option
// now real game onDragStart on every item set in setDraggedtask(task) now you know which task was drgged 
// now drop it using useDrop={()=>handleDrop(pass column header)}   in handleDrop mao and compare id of item equal to draggedItem.id and update array with new status 
// onDragOver={()=>e.preventDefault()}