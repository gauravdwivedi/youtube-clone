import './VideoItem.css'
import React from 'react'


const VideoItem =({video})=>{

    return(
        <div className="video-item item">
           <img className="ui image" alt="ok" src={video.snippet.thumbnails.medium.url}/>
           <div className="content">
               <div className="header">
               </div> {video.snippet.title}
           </div>
        </div>
    )

}


export default VideoItem