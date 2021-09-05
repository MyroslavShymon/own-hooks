import React, { useState } from "react";
import { useInput } from "../hooks/useInput";

const Input = () => {
  const username = useInput("");
  const password = useInput("");
  const [visible, setVisible] = useState(false);

  return (
    <>
      <input type="text" {...username} placeholder="username" />
      <input type="text" {...password} placeholder="password" />
      <br />
      {visible ? password.value : username.value}
      <br />
      <button onClick={() => setVisible(!visible)}>Show value</button>{" "}
    </>
  );
};

export default Input;
