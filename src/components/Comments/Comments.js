import { useState } from "react";
import React from "react";
import "./Comments.scss";
import videoDetails from "../../data/video-details.json";
import videoData from "../../data/videos.json";

import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";
import addCommentIcon from "../../assets/icons/add_comment.svg";

import profilePhoto from "../../assets/images/Mohan-muruge.jpg";

import NextVideos from "../NextVideos/NextVideos";

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

const Comments = (props) => {
  const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);
  
  return (
    <>
      {selectedVideo.comments.map((comment) => (
        <div className="comments-card" key={comment.id}>
          <div className="comments-card-user-img"></div>
          <div className="comments-card-container">
            <div className="comments-card-header">
              <div className="comments-card-author">
                {comment.name}
              </div>
              <div className="comments-card-date">
                {relativeTimestamp(comment.timestamp)}
              </div>
            </div>
            <div className="comments-card-comment">
              {comment.comment}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Comments;
