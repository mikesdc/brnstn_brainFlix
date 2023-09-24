import { useState } from "react";
import React from "react";
import "./VideoDetails.scss";
import videoDetails from "../../data/video-details.json";

import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";

import { relativeTimestamp } from "../../App";

import Comments from "../Comments/Comments";

const VideoDetails = (props) => {
  const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);

  return (
    <>
      <section className="video-details">
        <div className="video-details__title">
          <h1>{selectedVideo.title}</h1>
        </div>
        <div className="video-details__stats">
          <div className="video-details__channel">By {selectedVideo.channel}</div>
          <div className="video-details__date">
            {relativeTimestamp(selectedVideo.timestamp)}
          </div>
          <div className="video-details__views">
            <img src={viewsIcon} alt="views icon" />
            {selectedVideo.views}
          </div>
          <div className="video-details__likes">
            <img src={likesIcon} alt="likes icon" />
            {selectedVideo.likes}
          </div>
        </div>
        <div className="video-details__description">{selectedVideo.description}</div>

        <Comments />
      </section>
    </>
  );
};

export default VideoDetails;
