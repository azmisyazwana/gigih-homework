import logo from './logo.svg';
import './App.css';
import Song from './component/Song';
import data from './Data/data';
import Track from './component/Track';

function App() {
  return (
    <div className="App">
      <Song img={data.album.images[1].url} title={data.album.name} artist={data.artists[0].name} />
      <Track />
    </div>
  );
}

export default App;
