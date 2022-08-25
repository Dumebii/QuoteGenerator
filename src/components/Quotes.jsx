import React from "react";
import Button from "./Button";

function Quotes(props) {
  return (
    <div>
      <h3>{props.quote}</h3>
      <p>{props.author}</p>
    </div>
  );
}

export default Quotes;
