let client_id = process.env.REACT_APP_SPOTIFY_API_KEY;
let redirect_uri = 'http://localhost:3000'
let scope = 'playlist-modify-private'
let endpoint = `https://accounts.spotify.com/authorize?client_id=${encodeURIComponent(client_id)}&scope=${encodeURIComponent(scope)}&redirect_uri=${encodeURIComponent(redirect_uri)}&response_type=token&show_dialog=${encodeURIComponent(true)}`

export {endpoint};