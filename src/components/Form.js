import React from "react";
import data from "../data";

export default function Meme() {
    function getMeme() {
        const memes = data.data.memes
        let randomIndex = Math.floor(Math.random() * memes.length)
        console.log(memes[randomIndex].url);
    }

    return (
        <main className="meme">
            <form className="form">
                <input placeholder="Top text"/>
                <input placeholder="Bottom text"/>
            </form>
            <button 
            className="get-meme-btn"
            onClick={getMeme}>
                Get a new meme image
            </button>
        </main> 
    )
}