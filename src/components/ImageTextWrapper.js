import React from "react";

export default function ImageTextWrapper(props) {
    return (
        <div className="image-text-wrapper">
            <div 
                className="top-text"
                style={{
                    fontSize: props.fontSize,
                    WebkitTextStroke: props.textStroke,
                }}
            >
                {props.topText}
            </div>
            <div 
                className="bottom-text"
                style={{
                    fontSize: props.fontSize,
                    WebkitTextStroke: props.textStroke,
                }}
            >
                {props.bottomText}
            </div>
            <img src={props.url} className="meme-img" alt="the funny" />
        </div>
    )
}