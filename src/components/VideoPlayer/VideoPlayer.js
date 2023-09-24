import { useState } from "react";
import React from "react";
import "./VideoPlayer.scss";
import videoDetails from "../../data/video-details.json";


const VideoPlayer = (props) => {
  const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);

  console.log(selectedVideo);

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
