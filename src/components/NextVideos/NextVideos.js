import React from "react";
import "./NextVideos.scss";
import VideoDetails from "../../data/video-details.json";

const NextVideos = ({ videosList, setSelectedVideo }) => {
  const handleClick = (video) => {
    let selectedVideo = VideoDetails;

    selectedVideo = VideoDetails.filter((object) => object.id === video.id);
    setSelectedVideo(selectedVideo[0]);
  };

  return (
      <div className="right-section">
        <section className="next-videos">
          <h2>NEXT VIDEOS</h2>

          {videosList.map((video) => (
            <div
              className="next-videos__card"
              key={video.id}
              onClick={() => handleClick(video)}
            >
              <div className="next-videos__image">
                <img src={video.image} alt=""/>
              </div>
              <div className="next-videos__details">
                <div className="next-videos__details-title">{video.title}</div>
                <div className="next-videos__details-channel">
                  {video.channel}
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
  );
};

export default NextVideos;
