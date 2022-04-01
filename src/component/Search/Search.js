import Track from '../Track/index';
import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
import Song from '../Song';
import './search.css'

function Search() {

    const [query, setQuery] = useState("");
    const [token, setToken] = useState("");
    const [track, setTrack] = useState([]);
    const [selectList, setSelectList] = useState([]);


    useEffect(() => {
        if (window.localStorage.getItem("token")) {
            setToken(window.localStorage.getItem("token"));
        }
    }, []);

    const getData = () => {
        if(!query){
            return;
        }
        axios.get(`https://api.spotify.com/v1/search?q=${query}&type=track`, {
            headers: {Authorization: "Bearer " + token}
        }).then((response) => {
            setTrack(response.data.tracks.items);
        }).catch((err) => {
            console.log(err);
        }) ;
    }

    const handleSearch = (e) => {
        e.preventDefault();
        setQuery(e.target.value)
        console.log(e.target.value)
        // getData(query)
    }
    console.log(track)

    const addSongSelectedToList = (id) => {
        const songSelected = selectList;
        songSelected.push(id);
        setSelectList(songSelected);
    }

    const unselectSongFromList = (id) => {
        const songSelected = selectList;
        let i;
        for (i = 0; i <= selectList.length - 1; i++){
            if(selectList[i] === id){
                songSelected.splice(i, 1);
            }
        }
        setSelectList(songSelected);    
    }

    const getStatus = (id) => {
        let status = false;
        let i;
        for(i = 0; i <= selectList.length - 1; i++){
            if (selectList[i] === id){
                status = true;
            }
        }
        return status;
    }

    return (
        <>
            <h1 className='title'>Track</h1>
            <div className='input'>
                <input type='text'onChange={(e) => handleSearch(e)}
                >
                </input>
                <button value='Search' type='submit' onClick={getData}>
                    Search
                </button>
            </div>
            <div className='grid'>
            {
                track.length > 0 ? (
                <table className='table'>
                    <thead className='table-head'>
                        <tr>
                            {/* <th>No</th> */}
                            <th>Name</th>
                            <th>Album</th>
                            <th>Artist</th>
                            <th></th>
                        </tr>
                    </thead>
                    {track.map((item) => {
                        let status = getStatus(item.uri)
                        return (
                            <Song key={item.uri}
                            // no={index+1}
                            title={item.name}
                            img={item.album.images[2].url} 
                            artist={item.artists[0].name} 
                            album={item.album.name} 
                            id={item.uri}
                            addSongSelectedToList = {addSongSelectedToList}
                            unselectSongFromList = {unselectSongFromList}
                            selectStatus={status}
                            /> )
                        })}
                </table> 
                ):(
                    <table>
                    </table>
                )
            }
            </div>
        </>
    )
}

export default Search;