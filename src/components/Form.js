import React, { useState } from "react";
import data from "../data";

export default function Meme() {
    const memes = data.data.memes;
    function getRandomIndex() { return Math.floor(Math.random() * memes.length) }

    const [url, setUrl] = useState(memes[getRandomIndex()].url);
    const [topText, setTopText] = useState();
    const [bottomText, setBottomText] = useState();
    const [fontSize, setFontSize] = useState("32px");
    const [textStroke, setTextStroke] = useState("2px black");

    // gets 1 random image URL out of 100
    function getRandomUrl() {
        let newUrl = memes[getRandomIndex()].url;        
        setUrl(newUrl);
    }

    // fired when either "top text" or "bottom text" input fields are changed
    // and checks which one of them was changed to render text accordingly
    function handleInputChange(event) {
        if(event.target.className === "top-text-input") {
            setTopText(event.target.value)
        }
        else if(event.target.className === "bottom-text-input") {
            setBottomText(event.target.value)
        }
    }

    // removes all whitespace and replaces commas with periods
    function formatInput(string) {
        string = string.replace(/\s/g, "");
        return string.replace(/,/g, ".")
    }

    function applyFontSize(event) {
        // prevents page reload
        event.preventDefault();

        const input = document.querySelector("#font-size-input").value
        // checks if the unit (px, rem, em...) is specified
        const regexUnitSpecified = /^\s*\d+\s*([.,]\s*\d+)?\s*(px|rem|em|cm|mm|in|pt|pc|ex|ch|vw|vh|vmin|vmax|%)\s*$/i

        // checks if the unit (px, rem, em...) is NOT specified
        const regexUnitUnspecified = /^\s*\d+\s*([.,]\s*\d+)?\s*$/

        // if user has specified the unit ("33px" or "2.5em")
        if(regexUnitSpecified.test(input)) {
            // removes all whitespaces
            setFontSize(formatInput(input))
       }  
       // if user left the unit unspecified ("55" instead of "55px"),
       // defaults to using px
       else if(regexUnitUnspecified.test(input)) {
            setFontSize(formatInput(input) + "px")
       } 
       else console.error("Invalid input!")
   }

   function applyStroke(event) {
        event.preventDefault();

        const input = document.querySelector("#stroke-input").value
        // checks if the user typed "px" after numeric value of text-stroke
        const regexUnitSpecified = /^\s*\d+\s*([.,]\s*\d+)?\s*px\s*$/i
        // checks if the user did NOT type "px" after numeric value of text-stroke
        const regexUnitUnspecified = /^\s*\d+\s*([.,]\s*\d+)?\s*$/

        if(regexUnitSpecified.test(input)) {
            setTextStroke(formatInput(input) + " black")
        }
        else if(regexUnitUnspecified.test(input)) {
            setTextStroke(formatInput(input) + "px black");
        }
        else console.error("Text stroke can only use 'px' values")
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

            <div className="customization-wrapper">
                <form className="cust-option-wrapper">
                    <input 
                        className="cust-input"
                        id="font-size-input"
                        placeholder="Font size (default 32px)"
                    />
                    <button 
                        className="apply-button"
                        onClick={applyFontSize}
                    >
                    Apply
                    </button>
                </form>

                <form className="cust-option-wrapper">
                    <input 
                        className="cust-input"
                        id="stroke-input"
                        placeholder="Font stroke (default 2px)"
                    />
                    <button 
                        className="apply-button"
                        onClick={applyStroke}
                    >
                    Apply
                    </button>
                </form>
            </div>    

            <button 
            className="get-meme-btn"
            onClick={getRandomUrl}>
                Get a new image
            </button>
            <div className="image-text-wrapper">
                <div 
                    className="top-text"
                    style={{
                        fontSize: fontSize,
                        WebkitTextStroke: textStroke,
                    }}
                >
                    {topText}
                </div>
                <div 
                    className="bottom-text"
                    style={{
                        fontSize: fontSize,
                        WebkitTextStroke: textStroke,
                    }}
                >
                    {bottomText}
                </div>
                <img src={url} className="meme-img" alt="the funny" />
            </div>
        </main> 
    )
}
