import React, { useEffect, useState } from "react";

const DummyTodo = () => {
  const [todoArray, setTodoArray] = useState([]);

  useEffect(() => {
    async function FetchTodos() {
      try {
        const res = await fetch("https://dummyjson.com/todos");
        const jsonFiedRes = await res.json();
        console.log(jsonFiedRes);
        setTodoArray(jsonFiedRes.todos);
      } catch (e) {
        console.log(e);
      } finally {
      }
    }

    FetchTodos();
  }, []);

  useEffect(() => {
    console.log(todoArray, "todoArray");
  }, [todoArray]);

  return (
    <div className="flex justify-center w-full items-center flex-col gap-4">
      <h3>Todo App API Dummy</h3>
    </div>
  );
};

export default DummyTodo;
