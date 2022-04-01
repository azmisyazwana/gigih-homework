import React from "react";
import SelectButton from '../SelectButton/index'

function Song(props){
    return(
        // <div>
        <tbody>
            <tr>
                {/* <td><p>{props.no}</p></td> */}
                <td><p>{props.title}</p></td>
                <td><img src={props.img} /></td>
                <td><p>{props.artist}</p></td>
                <td><SelectButton selectStatus={props.selectStatus} addSongSelectedToList={props.addSongSelectedToList} unselectSongFromList={props.unselectSongFromList} id={props.id} /></td>
            </tr>
        </tbody>
        // </div>
    )
}

export default Song;