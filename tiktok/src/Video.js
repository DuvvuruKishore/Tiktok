import React from 'react';
import './Video.css';
import ReactPlayer from 'react-player'


function Video() {
    return (
        <div className="video">
        <ReactPlayer
        url="https://youtu.be/luai0p0y2zE"
        controls
        playbackRate = {2}
        width = "500px"
        height = "100vh"
    />  
        </div>
    )
}

export default Video
