import React from "react";

const ButtonBlack = (props) => {
  return (
    <div>
      <button className="bg-primary text-white font-medium px-7 rounded-md py-2">{props.Text}</button>
    </div>
  );
};

export default ButtonBlack;
