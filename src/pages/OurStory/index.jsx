import React from 'react'
import ourStoryImage from '../../assets/our_story.png'
import './index.scss'

const OurStory = () => {
    return (
        <div className="our-story">
          <div className="container">
            <div className="row d-flex flex-wrap">
            <div className="col-md-6 col-sm-12 d-flex flex-column align-self-center ">
            <div className="title">
               OUR STORY
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam provident cum impedit consequuntur dolorum fugiat cupiditate debitis non, consectetur, delectus quasi officia alias dicta ut. Autem natus repellat cupiditate quis!
            </p>
            </div>
            <div className="col-md-6 col-sm-12">
            <img src={ourStoryImage} alt="illustration" className="mw-100"></img>
            </div>
            </div>  
            </div>  
        </div>
    )
}

export default OurStory
