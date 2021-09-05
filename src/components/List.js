import React, { useState, useEffect, useRef } from "react";
import { useScroll } from "../hooks/useScroll";

const List = () => {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);
  // const [limit, setLimit] = useState()
  const limit = 20;
  const parentRef = useRef();
  const childRef = useRef();
  const intersected = useScroll(parentRef, childRef, () =>
    fetchTodos(page, limit)
  );

  function fetchTodos(page, limit) {
    fetch(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`
    )
      .then((response) => response.json())
      .then((todosRes) => {
        if (todosRes.length) {
          setTodos((prev) => [...prev, ...todosRes]);
          setPage((prev) => prev + 1);
        }
      });
  }

  return (
    <div ref={parentRef} style={{ height: "80vh", overflow: "auto" }}>
      {todos.map((todo) => (
        <div
          style={{ padding: "20px", border: "2px solid greenyellow" }}
          key={todo.id}
        >
          {todo.id}. {todo.title}
        </div>
      ))}
      <div
        ref={childRef}
        style={{ height: "20px", width: "100%", background: "blue" }}
      ></div>
    </div>
  );
};

export default List;
