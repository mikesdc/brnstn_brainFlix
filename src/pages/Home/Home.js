import "./Home.scss";
import Header from "../../components/Header/Header";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import NextVideos from "../../components/NextVideos/NextVideos";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import axios from "axios";

import videoDetailsObject from "../../data/video-details.json";

function Home() {
  const [selectedVideo, setSelectedVideo] = useState(videoDetailsObject[0]);
  const [videosList, setVideosList] = useState([]);

  let modifiedVideoList = videosList.filter(
    (video) => video.id !== selectedVideo.id
  );

  useEffect(() => {
    axios
      .get(
        "https://project-2-api.herokuapp.com/videos/?api_key=e8ea54d0-3cd7-4281-8936-65a324902fec"
      )
      .then((response) => {
        setVideosList(response.data);
      });
  }, []);

  return (
    <div className="App">
      <main className="main">
        <VideoPlayer selectedVideo={selectedVideo} />
        <section className="main-section">
          <div className="left-section">
            <VideoDetails selectedVideo={selectedVideo} />
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

export default Home;
