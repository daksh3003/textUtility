import React,{useState} from "react";

export default function TextForm(props) {
  const handleUpClick=()=>{
    setText(text.toUpperCase());
  }
  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
    const[text,setText] = useState("Enter text here!");
  return (
    <div>
      <div className="mb-3">
      <h2>{props.heading}</h2>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="7"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert To UpperCase</button>
    </div>
  );
}
