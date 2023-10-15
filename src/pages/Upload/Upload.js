import "./Upload.scss";
import NextVideos from "../../components/NextVideos/NextVideos";
import { useState, useEffect } from "react";
import axios from 'axios';


function Upload() {
  const [selectedVideo, setSelectedVideo] = useState([]);
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
