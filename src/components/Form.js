import React from "react";
import data from "../data";

export default function Meme() {
    const memes = data.data.memes;
    function getRandomIndex() { return Math.floor(Math.random() * memes.length ) }

    // "url" is set using getRandomIndex() only initially
    const [url, setUrl] = React.useState(memes[getRandomIndex()].url);
    const [topText, setTopText] = React.useState();
    const [bottomText, setBottomText] = React.useState();

    function getRandomUrl() {
        let newIndex = getRandomIndex();
        // gets a new random index if old and new URLs are the same
        if(memes[newIndex].url === url) newIndex = getRandomIndex();

        let newUrl = memes[newIndex].url;
        
        setUrl(newUrl);
        setTopText(document.querySelector(".top-text-input").value)
        setBottomText(document.querySelector(".bottom-text-input").value)
    }

    function handleChangeTop() {
        setTopText(document.querySelector(".top-text-input").value)
    }

    function handleChangeBottom() {
        setBottomText(document.querySelector(".bottom-text-input").value)
    }

    return (
        <main className="meme">
            <form className="form">
                <input 
                className="top-text-input" 
                placeholder="Top text"
                onChange={handleChangeTop}
                defaultValue="Hi"/>
                <input 
                className="bottom-text-input" 
                placeholder="Bottom text"
                onChange={handleChangeBottom}
                defaultValue="Hello"/>
            </form>
            <button 
            className="get-meme-btn"
            onClick={getRandomUrl}>
                Get a new image
            </button>
            <div className="image-text-wrapper">
                <div className="top-text">{topText}</div>
                <div className="bottom-text">{bottomText}</div>
                <img src={url} className="meme-img" alt="" />
            </div>
            <input />
        </main> 
    )
}