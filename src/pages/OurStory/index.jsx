import React from 'react'
import CreatorCard from '../../Component/CreatorCard/index';
import { Tab, Tabs } from 'react-bootstrap'
import ourStoryImage from '../../assets/our_story.png'
import ourStoryChat from '../../assets/ourstory-chat.png'
import './index.scss'
import './timeline.scss'
import { gen2, gen1 } from './details';
import { timeline } from './timeline';


const InfoCard = ({ list }) => {
    return (
        <>
            <div className="mt-4  pt-2 d-flex flex-md-row flex-wrap justify-content-around" style={{ listStyle: "none" }}>
                {list.map((data, index) => (
                    <div className="m-4 pb-2" key={index}>
                        <CreatorCard id={data.id} Name={data.name} image={data.img} designation={data.designation} githubLink={data.githubLink} linkedInLink={data.linkedinLink} instagramLink={data.instagramLink} facebookLink={data.facebookLink} />
                    </div>
                ))
                }
            </div>
        </>
    )
}


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
                        The story of Anubhav, is as interesting as this portal. With lots of brainstorming discussion, and a motivation to improve this at each possible stage. We have created this mind-blowing portal. Explore this page to know about product owners, how it started, and the timeline for various phases of development. 
            </p>
                    </div>
                    <div className="col-md-6 col-sm-12 mx-auto d-flex justify-content-center">
                        <img src={ourStoryImage} alt="illustration" className="mw-100"></img>
                    </div>
                </div>
                <hr />
                <h3 className="text-center pb-2 font-weight-bold ">Product Ownership</h3>
                <p>Anubhav portal is developed and maintained by AIT OSS Club. Club is responsible for the enhancement of the quality of this portal. After its establishment, every year at the start of a new academic session its ownership and control are transferred to next-generation, which mainly consists of third year and final year members. </p>
                <Tabs defaultActiveKey="current" id="uncontrolled-tab-example"
                    mountOnEnter={true} unmountOnExit={true}
                >
                    <Tab eventKey="current" title="Current ">
                        <InfoCard list={gen2} />
                    </Tab>
                    <Tab eventKey="gen-1" title="First Gen">
                        <InfoCard list={gen1} />
                    </Tab>
                </Tabs>

                <hr />

                <div className="row d-flex flex-wrap mb-2">
                    <div className="col-md-5 col-sm-12 d-flex justify-content-center">
                        <img src={ourStoryChat} alt="illustration" className="w-50 "></img>
                    </div>
                    <div className="col-md-7 col-sm-12 d-flex flex-column align-self-center ">
                        <div className="title">
                            How It Started
                    </div>
                        <p>
                        One fine day, while discussing random stuff, I and <a href="https://www.linkedin.com/in/akshaysharma008/" target="_blank" rel="noreferrer"> Akshay </a> thought to create a unique project for our fellow AITians. We both wanted to build a project which should create a bigger impact and eventually help all the students. After ruling out few possibilities. We initially thought to create a blogging platform, but on further discussions, we narrow it down to "Interview experience". And with this journey of anubhav started.....  <br />
                            <span className="float-right"><a href="https://www.linkedin.com/in/arpit-kumar-mishra/" target="_blank" rel="noreferrer"> Arpit</a> (class of 2021)</span>
                        </p>
                    </div>

                </div>
                <hr />
                <h3 className="text-center font-weight-bold ">TimeLine</h3>

                <div className="timeline-container">
                    <div class="timeline">
                        <ul>
                            {timeline.map((item,index)=>
                            <li key={index}>
                                <div class="content">
                                    <h3>{item.title}</h3>
                                    <p>{item.description} </p>
                                    {item.image && <img src={item.image} className="mw-100 border" alt="timeline"></img>}
                                </div>
                                <div class="time">
                                    <h4>{item.time}</h4>
                                </div>
                            </li>
                            )}

                            <div style={{clear:'both'}}></div>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default OurStory
