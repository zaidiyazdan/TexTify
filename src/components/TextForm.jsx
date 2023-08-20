import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [data, setData] = useState("No of words and characters");

  const calcWord = (data) => {
    const arr = data.split(" ");
    const words = arr.filter((word) => word !== "").length;
    setData(`No of words: ${words} and ${text.length} characters`);
  };
  const toLower = () => {
    const newtxt = text.toLowerCase();
    setText(newtxt);
    props.showAlert("Text is transformed to LowerCase","success");
  };

  const readText = (e) => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text is transformed to UpperCase","success");
  };

  const handleConchange = (e) => {
    setText(e.target.value);
    calcWord(text);
  };
  function clear() {
    setText("");
    props.showAlert("Text is Cleared","warning");
  }

  function copyTxt() {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard","success");
  }

  function genRen() {
    let length = 45;
    let result = "";
    const characters =
      "ABC DE FGHIJ KLM NOPQ RST UVWX YZabc defg hij klm nop qrs tu vwx yz0 123 4567 89";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    props.showAlert("Text is generated","success");
  
    setText(result);
  }
  return (
    <div className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
      <div >
        <h1>{props.heading}</h1>
        <textarea
          onChange={handleConchange}
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
        ></textarea>
        <h2 className="mt-5">Text preview</h2>
        <p>{text.length>0 ? text : "Enter something to preview"}</p>
      </div>
      <button className={`btn btn-primary m-2`} onClick={readText}>
        Convert To UpperCase
      </button>
      <button className="btn btn-primary m-2" onClick={toLower}>
        Convert To LowerCase
      </button>
      <button className="btn btn-primary m-2" onClick={clear}>
        Clear
      </button>
      <button className="btn btn-primary m-2" onClick={genRen}>
        Genrate Rendom Text
      </button>
      <button className="btn btn-primary m-2" onClick={copyTxt}>
        Copy
      </button>
      <div className="container my-3">
        <h1>Your text summery</h1>
        <p className="my-3">
          No of words: {text.trim() === '' ? 0 : text.match(/\S+/g).length} , No of characters {text.length}
        </p>
      </div>
    </div> 
  );
}

//Always add the use state in the component.
