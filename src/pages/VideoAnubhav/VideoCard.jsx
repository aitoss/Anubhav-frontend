import React from 'react'
import { Badge } from 'react-bootstrap'
import './index.scss'


const VideoCard = ({ videoURL, videoID, title, description, tags }) => {
    return (
        <>
            <a href={videoURL} target="_blank" rel="noreferrer" className="video-card" >
                <div className="thumbnail">
                    <img src={`https://img.youtube.com/vi/${videoID}/0.jpg`} alt="hj" class="img-fluid" ></img>
                  <span> </span>
                   
                </div>
                <div className="title">
                    {title}
                </div>
                <div className="description">
                    {description}
                </div>

                <div className="tags">
                    {
                        tags.map((item, index) =>
                            <Badge variant="success" key={index}>{item}</Badge>
                        )
                    }

                </div>

            </a>
        </>
    )
}

export default VideoCard
