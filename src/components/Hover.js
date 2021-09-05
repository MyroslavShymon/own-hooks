import React, { useRef } from "react";
import { useHover } from "../hooks/useHover";

const Hover = () => {
  const ref = useRef();
  const isHovering = useHover(ref);

  console.log(isHovering);

  return (
    <div
      ref={ref}
      style={{
        width: "50px",
        height: "50px",
        background: isHovering ? "greenyellow" : "yellow",
      }}
    ></div>
  );
};

export default Hover;
