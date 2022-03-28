import data2 from "../../Data/data2";
import Song from "../Song"

let songList = data2.map((e, index) => {
    return <Song key={index} img={e.album.images[1].url} title={e.album.name} artist={e.artists[0].name} />
});

function Track(){
    return(
        <div>
            <h1>LOOP TRACK</h1>
            {songList}
        </div>
    )
}

export default Track;