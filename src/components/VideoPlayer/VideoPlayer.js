import { useState } from "react";
import React from "react";
import "./VideoPlayer.scss";
import videoDetails from "../../data/video-details.json";
import videoData from "../../data/videos.json";

import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";

import profilePhoto from "../../assets/images/Mohan-muruge.jpg";


console.log("selectedVideo", videoDetails);
console.log("nextVideos", videoData);

export const relativeTimestamp = function (timestamp) {
  const rightNow = new Date();
  const pastDate = new Date(timestamp);

  let dateDifference = (rightNow - pastDate) / 1000;

  if (dateDifference < 120) {
    return "A few seconds ago";
  } else if (dateDifference < 3600) {
    return `${Math.ceil(dateDifference / 60)} minutes ago`;
  } else if (dateDifference < 86400) {
    return `${Math.ceil(dateDifference / 60 / 60)} hours ago`;
  } else if (dateDifference < 518400) {
    return `${Math.ceil(dateDifference / 60 / 60 / 24)} days ago`;
  } else if (dateDifference < 1209600) {
    return `${Math.ceil(dateDifference / 60 / 60 / 24 / 7)} weeks ago`;
  } else if (dateDifference < 3628800) {
    return "About a month ago";
  } else if (dateDifference < 4838400) {
    return `${Math.ceil(dateDifference / 60 / 60 / 24 / 30)} months ago`;
  } else {
    const month = pastDate.getMonth() + 1;
    const date = pastDate.getDate();
    const year = pastDate.getFullYear();

    let monthTimestamp;
    if (month.toString().length == 2) {
      monthTimestamp = month.toString();
    } else {
      monthTimestamp = `0${month}`;
    }

    let dateNumTimestamp;
    if (date.toString().length == 2) {
      dateNumTimestamp = date.toString();
    } else {
      dateNumTimestamp = `0${date}`;
    }

    const dateTimestamp = `${monthTimestamp}/${dateNumTimestamp}/${year}`;
    return dateTimestamp;
  }
};

const VideoPlayer = (props) => {
  const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);
  const [nextVideos, setNextVideos] = useState(videoData[0]);

  console.log(selectedVideo);

  return (
    <>
      <section className="video-player">
        <video controls poster={selectedVideo.image}>
          <source src={selectedVideo} />
        </video>
      </section>

      <section className="details">
        <div className="details__title">
          <h1>{selectedVideo.title}</h1>
        </div>
        <div className="details__stats">
          <div className="details__channel">By {selectedVideo.channel}</div>
          <div className="details__date">
            {relativeTimestamp(selectedVideo.timestamp)}
          </div>
          <div className="details__views">
            <img src={viewsIcon} alt="views icon" />
            {selectedVideo.views}
          </div>
          <div className="details__likes">
            <img src={likesIcon} alt="likes icon" />
            {selectedVideo.likes}
          </div>
        </div>
        <div className="details__description">{selectedVideo.description}</div>
        <div className="details__comments">
          {selectedVideo.comments.length} Comments
        </div>

        <div className="details__comments-form-container">
          <div className="details__comments-form-user-img">
            <img src={profilePhoto} alt="user avater here" />
          </div>
          <div className="details__comments-form">
            <h1>JOIN THE CONVERSATION</h1>
            <input type="text" placeholder="Add a new comment" />
            <button>
              <img src="" alt="comment icon" />
              COMMENT
            </button>
          </div>
        </div>

        {/* mapping comments will happen here */}

        {selectedVideo.comments.map((comment) => (
          <div className="details__comments-card" key={comment.id}>
            <div className="details__comments-card-user-img"></div>
            <div className="details__comments-card-container">
              <div className="details__comments-card-header">
                <div className="details__comments-card-author">
                  {comment.name}
                </div>
                <div className="details__comments-card-date">
                  {relativeTimestamp(comment.timestamp)}
                </div>
              </div>
              <div className="details__comments-card-comment">
                {comment.comment}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="next-videos">
        <h2>NEXT VIDEOS</h2>

        {videoData.map((video) => (
          <div className="next-videos__card" key={video.id}>
            <div className="next-videos__image">
              <img
                src={video.image}
                alt="next video image"
                style={{ width: "10rem" }}
              />
            </div>
            <div className="next-video__details">
              <div className="next-video__details-title">{video.title}</div>
              <div className="next-video__details-channel">{video.channel}</div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default VideoPlayer;
