import React from "react";
import data from "../data";

export default function Meme() {
    const memes = data.data.memes;
    function getRandomIndex() { return Math.floor(Math.random() * memes.length ) }

    const [url, setUrl] = React.useState(memes[getRandomIndex()].url);

    function getRandomUrl() {
        let index = getRandomIndex();
        let newUrl = memes[index].url;
        if(newUrl === url) {
            console.log("URLs are the same. Getting a new one...");
            getRandomUrl();
        }; 
        setUrl(newUrl);
    }

    return (
        <main className="meme">
            <form className="form">
                <input placeholder="Top text"/>
                <input placeholder="Bottom text"/>
            </form>
            <button 
            className="get-meme-btn"
            onClick={getRandomUrl}>
                Get a new meme image
            </button>

            <img src={url} className="meme-img" alt="" />
        </main> 
    )
}