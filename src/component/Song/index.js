import React from "react";

function Song(props){
    return(
        <div>
            <img src={props.img} />
            <p>{props.title}</p>
            <p>{props.artist}</p>
            <button>Select</button>
        </div>
    )
}

export default Song;