import React,{useState} from "react";

export default function TextForm(props) {
  const handleUpClick=()=>{
    setText(text.toUpperCase());
    props.showAlert("Converted to upper case","success");
  }
  const handleLowClick=()=>{
    setText(text.toLowerCase());
    props.showAlert("Converted to lower case","success");
  }
  const handleClearClick=()=>{
    setText('');
    props.showAlert("Text has been cleared","success");
  }
  const handleCopyClick=()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard","success");
  }
  const handleSpacesClick=()=>{
    // This is a reg ex expression that is used to check for one and more spaces between words and then we join
    // new array with single spaces which ulitmately removes all the extra spaces.
    let newText = text.split(/[ ]+/); 
    setText(newText.join(" "));
    props.showAlert("Removed extra spaces","success");
  }
  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
    const[text,setText] = useState("");
    let words = text.split(/\s+/).filter((element)=>{return element.length!==0}).length; 
    const characters = text.length;
    const readTime = 0.008 * words;
  return (
    <>
    <div className="container" style={{
      color:props.mode==='dark'?"white":"black"
    }}>
      <div className="mb-3">
      <h2>{props.heading}</h2>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor:props.mode==='dark'?"#074173":"white",
          color:props.mode==='dark'?"white":"black",
          '::placeholder': { color: props.mode === 'dark' ? "white" : "black" }}}
          id="myBox"
          rows="7"
          placeholder="Enter your text here"
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
      <button disabled={text.length===0}  className="btn btn-primary mx-2" onClick={handleLowClick}>Convert To LowerCase</button>
      <button disabled={text.length===0}  className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
      <button disabled={text.length===0}  className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy To Clipboard</button>
      <button disabled={text.length===0}  className="btn btn-primary mx-2" onClick={handleSpacesClick}>Remove Extra Spaces</button>
    </div>
    <div className="container my-4" style={
      {
        color:props.mode==='dark'?"white":"black"
      }
    }>
      <h2>Your Text Summary.</h2>
      <p>{words} words and {characters} characters</p>
      <p>{readTime} Minutes read!</p>
      <h2 className="my-3">Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
