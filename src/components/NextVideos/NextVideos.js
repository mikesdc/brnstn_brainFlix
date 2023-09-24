import { useState } from "react";
import React from "react";
import "./NextVideos.scss";
import videoDetails from "../../data/video-details.json";
import videoData from "../../data/videos.json";

console.log("selectedVideo", videoDetails);
console.log("nextVideos", videoData);

const NextVideos = (props) => {
  const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);
  const [nextVideos, setNextVideos] = useState(videoData[0]);

  console.log(selectedVideo);

  return (
    <>
        <div className="right-section">
          <section className="next-videos">
            <h2>NEXT VIDEOS</h2>

            {videoData.map((video) => (
              <div className="next-videos__card" key={video.id}>
                <div className="next-videos__image">
                  <img src={video.image} />
                </div>
                <div className="next-videos__details">
                  <div className="next-videos__details-title">
                    {video.title}
                  </div>
                  <div className="next-videos__details-channel">
                    {video.channel}
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
    </>
  );
};

export default NextVideos;
