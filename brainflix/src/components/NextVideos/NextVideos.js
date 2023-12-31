import React from "react";
import "./NextVideos.scss";
import { Link } from "react-router-dom";

const NextVideos = ({ videosList }) => {
  return (
    <div className="right-section">
      <section className="next-videos">
        <h2>NEXT VIDEOS</h2>

        {videosList.map((video) => (
          <Link to={`/video/${video.id}`} key={video.id}>
            <div className="next-videos__card">
              <div className="next-videos__image">
                <img src={video.image} alt="" />
              </div>
              <div className="next-videos__details">
                <div className="next-videos__details-title">{video.title}</div>
                <div className="next-videos__details-channel">
                  {video.channel}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default NextVideos;
