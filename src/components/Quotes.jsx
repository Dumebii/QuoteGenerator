import React from "react";
import Button from "./Button";

function Quotes(props) {
  return (
    <div>
      <blockquote>
        {props.quote}
        <br />
        <cite>{props.author}</cite>
      </blockquote>
    </div>
  );
}

export default Quotes;
