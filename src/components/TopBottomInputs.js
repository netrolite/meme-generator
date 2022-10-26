import React from "react";

export default function TopBottomInputs(props) {
    return (
        <form className="top-bottom-inputs">
                <input 
                    className="top-text-input" 
                    placeholder="Top text"
                    onChange={props.handleInputChange}
                />
                <input 
                    className="bottom-text-input" 
                    placeholder="Bottom text"
                    onChange={props.handleInputChange}
                />
            </form>
    )
}