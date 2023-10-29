import "./Home.scss";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import NextVideos from "../../components/NextVideos/NextVideos";
import { useState, useEffect } from "react";
import {
  useParams,
  useNavigate,
} from "react-router-dom";
import axios from "axios";


function Home() {
  const [selectedVideo, setSelectedVideo] = useState([null]);
  const [videosList, setVideosList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://project-2-api.herokuapp.com/videos/?api_key=e8ea54d0-3cd7-4281-8936-65a324902fec"
      )
      .then((response) => {
        setVideosList(response.data);
      });
  }, []);

  let modifiedVideoList = videosList.filter(
    (video) => video.id !== selectedVideo.id
  );

  const { videoLinkId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        videoLinkId
          ? `https://project-2-api.herokuapp.com/videos/${videoLinkId}/?api_key=e8ea54d0-3cd7-4281-8936-65a324902fec`
          : "https://project-2-api.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8/?api_key=e8ea54d0-3cd7-4281-8936-65a324902fec"
      )
      .then((response) => {
        setSelectedVideo(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        navigate("/video/notfound/error");
      });
  }, [videoLinkId]);

  return (
    <div className="App">
      {!loading && selectedVideo ? (
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
      ) : null}
    </div>
  );
}

export default Home;
