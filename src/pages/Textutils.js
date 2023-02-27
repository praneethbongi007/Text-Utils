import React, { useState } from "react";

function Textutils(props) {
  const [Text, setText] = useState("");
  const handleOnchange = (event) => {
    setText(event.target.value);
  };

  const handleUp = () => {
    let text = Text.toUpperCase();
    setText(text);
    props.showAlert("Conveted to uppercase", "success");
  };

  const handleLo = () => {
    let text = Text.toLowerCase();
    setText(text);
    props.showAlert("Conveted to lowercase", "success");
  };

  const handleClear = () => {
    let text = "";
    setText(text);
    props.showAlert("cleared", "success");
  };

  const handleCopy = () => {
    let text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("copied to clipboard", "success");
  };

  const handleExtraSpace = () => {
    let text = Text.split(/[ ]+/);
    setText(text.join(" "));
    props.showAlert("Removed extra spaces", "success");
  };

  const handleWord = (str) => {
    let words;
    if (Text == "") {
      words = 0;
    } else {
      words = str.trim().split(/s+/).length;
    }
    return words;
  };

  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? "white" : "black" }}
    >
      <h2>Enter the text</h2>
      <textarea
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="8"
        value={Text}
        style={{
          backgroundColor: props.mode === "dark" ? "black" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
        onChange={handleOnchange}
      ></textarea>
      <button
        type="button"
        class="btn btn-primary mx-2 my-2"
        onClick={handleUp}
      >
        content to uppercase
      </button>
      <button
        type="button"
        class="btn btn-primary mx-2 my-2"
        onClick={handleLo}
      >
        content to lowercase
      </button>
      <button
        type="button"
        class="btn btn-primary mx-2 my-2"
        onClick={handleClear}
      >
        clear
      </button>
      <button
        type="button"
        class="btn btn-primary mx-2 my-2"
        onClick={handleCopy}
      >
        copy
      </button>
      <button
        type="button"
        class="btn btn-primary mx-2 my-2"
        onClick={handleExtraSpace}
      >
        Remove extra spaces
      </button>
      <p>
        {Text.length} charecters {Text.split(" ").length}words
      </p>
      <h2>Preview</h2>
      <p>
        {Text.length > 0
          ? Text
          : "enter the text in input to show preview here"}
      </p>
    </div>
  );
}

export default Textutils;
