import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faForward, faPlay, faPause } from '@fortawesome/free-solid-svg-icons'

const Controls = ({ skipSong, isPlaying, setPlaying }) => {
  const handleSkipForward = () => {
    if (isPlaying) {
      setPlaying(false);
    }
    skipSong();
  };

  return (
    <div className='my-player--controls'>
      <button className='skip-btn' onClick={() => skipSong(false)}>
        <FontAwesomeIcon icon={faBackward} />
      </button>
      <button className='play-btn' onClick={() => setPlaying(!isPlaying)}>
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
      </button>
      <button className='skip-btn' onClick={handleSkipForward}>
        <FontAwesomeIcon icon={faForward} />
      </button>
    </div>
  );
}

export default Controls;
