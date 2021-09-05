import React, { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

const Debounce = () => {
  const [value, setValue] = useState("");
  const debouncedCallback = useDebounce(search, 500);

  function search(query) {
    fetch(`https://jsonplaceholder.typicode.com/todos?query=${query}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      });
  }

  const onChange = (e) => {
    setValue(e.target.value);
    debouncedCallback(e.target.value);
  };
  return <input type="text" value={value} onChange={onChange} />;
};

export default Debounce;
