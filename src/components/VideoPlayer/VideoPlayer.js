import React from "react";
import "./VideoPlayer.scss";

const VideoPlayer = ({ selectedVideo }) => {
  return (
    <>
      <section className="video-player">
        <div className="video">
          <video controls poster={selectedVideo.image}>
            <source src={selectedVideo} />
          </video>
        </div>
      </section>
    </>
  );
};

export default VideoPlayer;
