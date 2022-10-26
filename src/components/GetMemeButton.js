import React from "react";

export default function GetMemeButton(props) {
    return (
        <>
        <button 
            className="get-meme-btn"
            onClick={props.getRandomUrl}
        >
            Get a new image
        </button>
        {/* fNi1JyfM3NH7nm--hfEezvqltJN8ULsO_gKrV4wvjZA
        NLd8dBT3ICqziJ8TcuKl40Gg_rFcFjTPAM-K4fSsA5c */}
        </>
    )
}