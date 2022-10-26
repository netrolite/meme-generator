import React from "react";

export default function GetMemeButton(props) {
    return (
        <button 
            className="get-meme-btn"
            onClick={props.getRandomUrl}
        >
            Get a new image
        </button>
    )
}