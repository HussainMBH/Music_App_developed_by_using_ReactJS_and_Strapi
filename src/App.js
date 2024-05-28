import { useEffect, useState } from "react";
import Player from "./components/Player";
import axios from "axios";

function App() {
  const [songs, setSongs] = useState([]);
  const [nextSongIndex, setNextSongIndex] = useState(0);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  useEffect(() => {
    let tmp = currentSongIndex + 1;
    if (tmp >= songs.length) {
      tmp = 0;
    }
    setNextSongIndex(tmp);
  }, [currentSongIndex, songs.length]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/music-players?populate=*"
        );
        console.log("response data---", response.data);

        // Assuming response.data contains the array of songs
        const songArray = response.data.data.map((song) => ({
          title: song.attributes.title,
          artist: song.attributes.artist,
          img_src:
            "http://localhost:1337" +
            song.attributes.img_src.data[0].attributes.url,
          music_src:
            "http://localhost:1337" +
            song.attributes.music_src.data[0].attributes.url,
        }));

        setSongs(songArray);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {songs.length > 0 && (
      <Player
        songs={songs}
        currentSongIndex={currentSongIndex}
        nextSongIndex={nextSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
      />
    )}
    </div>
  );
}

export default App;
