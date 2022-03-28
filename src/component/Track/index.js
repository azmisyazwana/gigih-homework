import data2 from "../../Data/data2";
import Song from "../Song"
import React from "react";

class Track extends React.Component{
    render(){data2.map((e, index) => {
        return (
            <div>
                <img src={e.album.images[1].url} alt="" />
                <p>{e.album.name}</p>
                <p>{e.artists[0].name}</p>
            </div>
        );
    });
}
}

// const loop = data2.map((e, index) => {
//     <Song key={index} img={e.album.images[1].url} title={e.album.name} artist={e.artists[0].name} />
//     console.log(e.album.images[1].url)
//     console.log(e.album.name)
//     console.log(e.artists[0].name)
// })

// console.log(loop)
export default Track;