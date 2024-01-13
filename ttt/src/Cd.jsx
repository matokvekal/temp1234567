import React, { useEffect } from "react";
const c = () => {
  let color = "red";
  const change_color = () => {
    if (color == "red") {
      color = "blue";
    } else {
      color = "red";
    }
    console.log(`color is ${color}`);
  };

  useEffect(() => {
    console.log("Component did mount");
    return () => {
      console.log("Component unMount");
    };
  }, [color]);

  return (
    <button onClick={change_color} style={{ background: color }}>
      {" "}
      PRESS HERE {color}
    </button>
  );
};

export default c;
