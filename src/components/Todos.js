import React from "react";
import { useRequest } from "../hooks/useRequest";
import axios from "axios";

const Todos = () => {
  const [todos, loading, error] = useRequest(() => {
    return axios.get(`https://jsonplaceholder.typicode.com/todos`);
  });

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error</h2>;
  }

  return (
    <div>
      {todos &&
        todos.map((todo) => (
          <div
            style={{ padding: "20px", border: "2px solid greenyellow" }}
            key={todo.id}
          >
            {todo.id}. {todo.title}
          </div>
        ))}
    </div>
  );
};

export default Todos;
