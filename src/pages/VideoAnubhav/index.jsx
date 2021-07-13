import { Component } from 'react';
import VideoCard from './VideoCard'
import './index.scss'
import videoArray from './videoData'
import Select from "react-select";
import Banner from './Banner';



const options = [
    { value: "coding", label: "coding" },
    { value: "hackathon", label: "hackathon" },
    { value: "zeta", label: "zeta" }
];


export class VideoAnubhav extends Component {
    state = {
        selectedOption: null,
        videoList: [],
    }

    componentDidMount() {
        this.setState({ videoList: videoArray });
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        if (selectedOption.length === 0) {
            this.setState({ videoList: videoArray });
            return
        }
        var nameArray = selectedOption.map(function (el) {
            return el.label;
        });

        let finalArr = [];
        nameArray.forEach(function (item) {
            const filter = item;
            const filteredResult = videoArray.filter((item) => {
                return item.tags.indexOf(filter) >= 0;
            });
            finalArr.push(...filteredResult);
        });
        let uniq = [...new Set(finalArr)];
        this.setState({ videoList: uniq });
    };
    render() {
        const { selectedOption, videoList } = this.state;
        return (
            <> <Banner/>
                <div className="container">
                    <div className="row  justify-content-md-center">
                        <div className="col-12 col-lg-6 ">
                            <Select
                                value={selectedOption}
                                isMulti
                                onChange={this.handleChange}
                                options={options}
                            />
                        </div>
                    </div>
                </div>
          
                <div class="d-flex video-card-videoList flex-wrap justify-content-center pt-4" >
                    {videoList.map((item, index) =>
                        <VideoCard key={index} videoURL={item.url} videoID={item.videoID} title={item.title} description={item.description} tags={item.tags} />
                    )}

                </div>
            </>
        )
    }
}

export default VideoAnubhav
