import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBackward, faForward, faPlay, faPause} from '@fortawesome/free-solid-svg-icons'

const Controls = ({skipSong, isPlaying, setPlaying}) => {
  return (
    <div className='my-player--controls'>
      <button className='skip-btn' onClick={() => skipSong(false)}>
        <FontAwesomeIcon icon={faBackward} />
      </button>
      <button className='play-btn'onClick={() => setPlaying(!isPlaying)}>
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
      </button>
      <button className='skip-btn' >
        <FontAwesomeIcon icon={faForward} onClick={() => skipSong()} />
      </button>
    </div>
  )
}

export default Controls
