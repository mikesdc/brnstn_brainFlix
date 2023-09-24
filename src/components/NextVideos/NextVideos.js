import { useState } from "react";
import React from "react";
import "./NextVideos.scss";
import videoDetails from "../../data/video-details.json";
import videoData from "../../data/videos.json";

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
