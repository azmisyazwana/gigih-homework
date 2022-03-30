import React from "react";

function Song(props){
    return(
        // <div>
        <tr>
            <td><p>{props.no}</p></td>
            <td><p>{props.title}</p></td>
            <td><img src={props.img} /></td>
            <td><p>{props.artist}</p></td>
            <td><button>Select</button></td>
        </tr>
        // </div>
    )
}

export default Song;