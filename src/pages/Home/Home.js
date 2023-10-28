import "./Home.scss";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import NextVideos from "../../components/NextVideos/NextVideos";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Home({
  selectedVideo,
  setSelectedVideo,
  videosList,
  videoDetailsList,
}) {

  console.log("homepage: ", videoDetailsList)
  // let modifiedVideoList = videosList.filter(
  //   (video) => video.id !== selectedVideo.id
  // );
 
  return (
    <div className="App">
      (
      <main className="main">
        <VideoPlayer selectedVideo={videoDetailsList[0]} />
        <section className="main-section">
          <div className="left-section">
            <VideoDetails selectedVideo={videoDetailsList[0]} />
          </div>
          <NextVideos
            videosList={videosList}
            setSelectedVideo={setSelectedVideo}
          />
        </section>
      </main>
      )
    </div>
  );
}

export default Home;
