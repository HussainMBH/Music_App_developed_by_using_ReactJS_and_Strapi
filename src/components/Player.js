import React, { useState, useRef, useEffect } from "react";
import Details from "./Details";
import Controls from "./Controls";

const Player = ({
  songs,
  currentSongIndex,
  nextSongIndex,
  setCurrentSongIndex,
}) => {
  const [isPlaying, setPlaying] = useState(false);
  const audioEl = useRef(null);

  useEffect(() => {
    if (audioEl.current) {
      isPlaying ? audioEl.current.play().catch(error => console.log(error)) : audioEl.current.pause();
    }
  }, [isPlaying]);

  const skipSong = (isForward = true) => {
    if (isForward) {
      setCurrentSongIndex(nextSongIndex);
    } else {
      let tmp = currentSongIndex - 1;
      if (tmp < 0) {
        tmp = songs.length - 1;
      }
      setCurrentSongIndex(tmp);
    }
  };

  return (
    <div className="my-player">
      <audio src={songs[currentSongIndex].music_src} ref={audioEl} />
      <h4>Playing Now</h4>
      <Details currSong={songs[currentSongIndex]} />
      <Controls skipSong={skipSong} isPlaying={isPlaying} setPlaying={setPlaying} />
      <button onClick={() => setPlaying(true)}>Play</button>
      <p>
        Next Up:{" "}
        <span>
          {songs[nextSongIndex].title} by {songs[nextSongIndex].artist}
        </span>
      </p>
    </div>
  );
};

export default Player;
