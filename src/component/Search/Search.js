import Track from '../Track/index';
import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
import Song from '../Song';
import './search.css'

function Search() {

    const [query, setQuery] = useState("");
    const [token, setToken] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        if (window.localStorage.getItem("token")) {
            setToken(window.localStorage.getItem("token"));
        }
    }, []);

    const getData = (query) => {
        axios.get(`https://api.spotify.com/v1/search?q=${query}&type=track`, {
            headers: {Authorization: "Bearer " + token}
        }).then((response) => {
            setData(response.data.tracks.items);
        }).catch((error) => {
            console.log(error);
        }) ;
    }

    const handleSearch = (e) => {
        e.preventDefault();
        setQuery(e.target.value)
        getData(query)
    }
    console.log(data)

    return (
        <>
            <h1 className='title'>Track List<span>.</span></h1>
            <div className='input'>
                <input
                    placeholder='Cari gambar kesukaanmu'
                    type='text'
                    className="search-input"
                    onChange={(e) => setQuery(e.target.value)}
                >
                </input>
                <button value='Search' type='submit' onClick={handleSearch}>
                    Search
                </button>
            </div>
            <div className='grid'>
            <table className='table'>
                <thead className='table-head'>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Album</th>
                        <th>Artist</th>
                        <th className='no-track'></th>
                    </tr>
                </thead>
                {data.map((item,index) => {
                    return (
                        <Song key={index}
                        no={index+1}
                        title={item.name}
                        img={item.album.images[2].url} 
                        artist={item.artists[0].name} 
                        album={item.album.name} 
                        /> )
                    })}
            </table>
            </div>
        </>
    )
}

export default Search;