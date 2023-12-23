import React, { useState } from "react";

export default function Textarea(props) {
    const [text, setText] = useState('');
    //we can change the text using setText method.

    const handleUpClick = () => {
        const newText = text.toUpperCase();
        setText(newText);
    }

    const handlelowerClick = () => {
        const newText = text.toLowerCase();
        setText(newText);
    }

    const clearText = () => {
        setText(" ");
    }
    
    //this function will run when we change something inside textarea.
    const handleOnChange = (event) => {
        //when we change something inside the textarea we'll set 
        // this changed value to the value of 'text'.
        setText(event.target.value)
    }

    let textarr = text.split(" ");
    const totalWords = textarr.length;
    
    let longestWord = textarr.reduce((acc, curr) => {
        if(curr.length > acc){
            acc = curr.length;
        }
        return acc;
    }, 0)

    let totalWordsLength = textarr.reduce((acc, curr) => {
        acc += curr.length;
        return acc;
    }, 0)

    const avgWordLength = Math.floor(totalWordsLength/totalWords);

    return (
        <>
        <div>
            <h1>{props.text} </h1>
            <div className="mb-3">
            <textarea name="text" id="textArea" onChange={handleOnChange} cols="200" rows="10" placeholder="Enter text here" value={text}></textarea>
            </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-success mx-1" onClick={handlelowerClick}>Convert to Lowercase</button>
        <button className="btn btn-success mx-1" onClick={clearText}>Clear text</button>

        </div>
        <div className="container my-3">
            <h2>Text summary:</h2>
            <p>{text.length}<b> characters</b></p>
            <p>{text.split(' ').length} <b>words</b></p>
            <p>{longestWord} <b>longest Word Length</b></p>
            <p>{avgWordLength} <b>Average Word Length</b></p>
        </div>
        <div className="container my-3">
            <h2>Preview:</h2>
            <p>{text}</p>
        </div>
        </>
  );
}