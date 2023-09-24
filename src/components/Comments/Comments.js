import { useState } from "react";
import React from "react";
import "./Comments.scss";
import videoDetails from "../../data/video-details.json";
import videoData from "../../data/videos.json";
import { relativeTimestamp } from "../../App";

import addCommentIcon from "../../assets/icons/add_comment.svg";
import profilePhoto from "../../assets/images/Mohan-muruge.jpg";


console.log("selectedVideo", videoDetails);
console.log("nextVideos", videoData);

const Comments = (props) => {
  const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);
  
  return (
    <>
        <div className="comments__comments">
          {selectedVideo.comments.length} Comments
        </div>

        <div className="comments__add-comment-container">
          <div className="comments__add-comment-user-img">
            <img src={profilePhoto} alt="user avater here" />
          </div>
          <div className="comments__add-comment-form-container">
            <h1>JOIN THE CONVERSATION</h1>
            <textarea placeholder="Add a new comment" />
            <button>
              <img src={addCommentIcon} alt="comment icon" />
              COMMENT
            </button>
          </div>
        </div>

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
