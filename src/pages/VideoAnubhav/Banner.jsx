import React from 'react'
import './banner.scss'


function Banner() {
    return (
        <div className="interview-banner-container">
            <div class="interview-banner">
                <div class="interview-banner__overlay"></div>
                <div class="interview-banner__content">
                    <div class="interview-banner__header">
                        <h1 class="interview-banner__title">Anubhav Video Interview Series</h1>
                        <h4 class="interview-banner__info">BY OSS club</h4>
                    </div>
                    <p class="interview-banner__desc">Explore the variety of experiences from your beloved seniors. We have created AIT exclusive series to help the juniors, to get better insights into various aspects of college life. Hope you will love this😄. Check full playlist link <a href="https://www.youtube.com/playlist?list=PL4REmU9xh1P14Qv0zmwjve_myZI_rOguU" target="_blank" rel="noreferrer">here</a> or easy search by tag with the filter. <br></br>
            <span id="name">- <a href="https://www.linkedin.com/in/arpit-kumar-mishra/" target="_blank" rel="noreferrer"> Arpit  </a> </span> </p>
                   
                </div>
            </div>
        </div>
    )
}

export default Banner
