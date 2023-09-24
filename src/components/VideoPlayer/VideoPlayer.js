import React from "react";
import "./VideoPlayer.scss";


const VideoPlayer = ({selectedVideo}) => {
  console.log("VideoPlayer: selectedVideo", selectedVideo);

  return (
    <>
      <section className="video-player">
        <video controls poster={selectedVideo.image}>
          <source src={selectedVideo} />
        </video>
      </section>

    </>
  );
};

export default VideoPlayer;
