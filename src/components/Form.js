import React, { useState } from "react";
import data from "../data";

export default function Meme() {
    const memes = data.data.memes;
    function getRandomIndex() { return Math.floor(Math.random() * memes.length ) }

    const [url, setUrl] = useState(memes[getRandomIndex()].url);
    const [topText, setTopText] = useState();
    const [bottomText, setBottomText] = useState();
    const [fontSize, setFontSize] = useState("32px");

    function getRandomUrl() {
        let newUrl = memes[getRandomIndex()].url;        
        setUrl(newUrl);
    }

    function handleInputChange(event) {
        if(event.target.className === "top-text-input") {
            setTopText(event.target.value)
        }
        else if(event.target.className === "bottom-text-input") {
            setBottomText(event.target.value)
        }
    }

    function applyFontSize(event) {
        event.preventDefault();

        const input = document.querySelector(".font-size-input").value
        const regexNotPX = /^\s*\d+\s*(rem|em|cm|mm|in|pt|pc|ex|ch|vw|vh|vmin|vmax|%){1}\s*$/i
        const regexOnlyNumbers = /^\s*\d+\s*$/

        console.log(input, "<-- initial input");
<<<<<<< HEAD

let noSpaces = input.replace(/\s/g, "")

if(regexOnlyNumbers.test) {
   setFontSize(noSpaces + "px")
}
else {
   setFontSize(noSpaces)
}
}

        //if(regexNotPX.test(input) === true) {
=======
        if(regexNotPX.test(input) === true) {
>>>>>>> parent of 8c2adbe (Update Form.js)
            // replaces all white spaces with "" (basically removes them)
            let noSpaces = input.replace(/\s/g, "")
            setFontSize(noSpaces)
        }  
        else if(regexOnlyNumbers.test(input)) {
            let noSpaces = input.replace(/\s/g, "")
            setFontSize(noSpaces + "px");
        } 
        else console.error("Invalid CSS units!")
    }

    return (
        <main className="meme">
            <form className="top-bottom-inputs">
                <input 
                    className="top-text-input" 
                    placeholder="Top text"
                    onChange={handleInputChange}
                />
                <input 
                    className="bottom-text-input" 
                    placeholder="Bottom text"
                    onChange={handleInputChange}
                />
            </form>

            <form className="font-size-wrapper">
                <input 
                    className="font-size-input"
                    placeholder="Font size (default 32px)"
                    onChange={handleInputChange}
                />
                <button 
                    className="font-size-button"
                    onClick={applyFontSize}
                >
                Apply
                </button>
            </form>    

            <button 
            className="get-meme-btn"
            onClick={getRandomUrl}>
                Get a new image
            </button>
            <div className="image-text-wrapper">
                <div 
                    className="top-text"
                    style={{
                        fontSize: fontSize
                    }}
                >
                    {topText}
                </div>
                <div 
                    className="bottom-text"
                    style={{
                        fontSize: fontSize
                    }}
                >
                    {bottomText}
                </div>
                <img src={url} className="meme-img" alt="the funny" />
            </div>
        </main> 
    )
}
