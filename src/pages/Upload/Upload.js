import "./Upload.scss";
import Header from "../../components/Header/Header";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import NextVideos from "../../components/NextVideos/NextVideos";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import videoDetailsObject from "../../data/video-details.json";
import videoData from "../../data/videos.json";

function Upload() {
  const [selectedVideo, setSelectedVideo] = useState(videoDetailsObject[0]);
  const [videosList, setVideosList] = useState(videoData);

  let modifiedVideoList = videosList.filter(
    (video) => video.id !== selectedVideo.id
  );

  return (
    <div className="App">
      <main className="main">
        <section className="main-section">
          <div className="left-section">
          </div>
          <NextVideos
            videosList={modifiedVideoList}
            setSelectedVideo={setSelectedVideo}
          />
        </section>
      </main>
    </div>
  );
}

export default Upload;
