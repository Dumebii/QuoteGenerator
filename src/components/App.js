import React from "react";
import "../styles.css";
import quotes from "../quotes";
import Quotes from "./Quotes";
import Button from "./Button";

export default function App() {
  const [value, setValue] = React.useState(0);

  function updateQuote(props) {
    setValue(Math.floor(Math.random() * 2));
    console.log(value);
  }

  return (
    <div className="App">
      <Quotes quote={quotes[value].quote} author={quotes[value].author} />
      <Button onClick={updateQuote} />
    </div>
  );
}
