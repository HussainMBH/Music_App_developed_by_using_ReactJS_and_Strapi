import React from 'react'

const Details = ({currSong}) => {
  return (
    <div className='my-player--details'>
        <div className='details-img'>
            <img src={currSong.img_src} alt="Music"></img>
        </div>
        <h3 className='details-title'> {currSong.title}</h3>
        <h4 className='details-artist'> {currSong.artist}</h4>
      
    </div>
  )
}

export default Details
