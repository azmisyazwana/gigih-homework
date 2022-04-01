import React from 'react';
import { useState, useEffect } from 'react';
import Search from '../component/Search/Search';
import Login from '../pages/Login';

function Home() {

    const [token, setToken] = useState("");
    useEffect(() => {
        const hash = window.location.hash;
        window.location.hash = "";

        if(!token && hash) {
            const _token = hash.split("&")[0].split("=")[1];
            window.localStorage.setItem("token", _token);
            setToken(_token)
        }}, [token]
    );

    return token ? (
        <div className="App">
          {/* <Song img={data.album.images[1].url} title={data.album.name} artist={data.artists[0].name} />
          <Track /> */}
          <Search/>
        </div>
      ):(
        <div className="App">
          <Login />
        </div>
      )
}

export default Home;
