import React from 'react'
import VideoCard from './VideoCard'
import './index.scss'
import videoArray from './videoData'
const VideoAnubhav = () => {
    return (
        <>
        <div class="d-flex video-card-list flex-wrap" >
            {videoArray.map((item,index)=>
              <VideoCard key={index} videoURL={item.url} videoID={item.videoID} title={item.title} description={item.description} tags={item.tags} />
            )}
          
        </div>
       </>
    )
}

export default VideoAnubhav
