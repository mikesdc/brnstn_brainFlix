import "./Home.scss";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import NextVideos from "../../components/NextVideos/NextVideos";
import Header from "../../components/Header/Header";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {
  const [selectedVideo, setSelectedVideo] = useState([null]);
  const [videosList, setVideosList] = useState([]);
  const [loading, setLoading] = useState(true);

  //randomKey is used to help set the default video when the brainFlix logo in the Header is clicked
  const [randomKey, setRandomKey] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://project-2-api.herokuapp.com/videos/?api_key=e8ea54d0-3cd7-4281-8936-65a324902fec"
      )
      .then((response) => {
        setVideosList(response.data);
        const firstVideoId = response.data[0].id;
        axios
          .get(
            `https://project-2-api.herokuapp.com/videos/${firstVideoId}/?api_key=e8ea54d0-3cd7-4281-8936-65a324902fec`
          )
          .then((res) => {
            setSelectedVideo(res.data);
            setLoading(false);
          });
      });
  }, [randomKey]);

  let modifiedVideoList = videosList.filter(
    (video) => video.id !== selectedVideo.id
  );

  const { videoLinkId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (videoLinkId) {
      axios
        .get(
          `https://project-2-api.herokuapp.com/videos/${videoLinkId}/?api_key=e8ea54d0-3cd7-4281-8936-65a324902fec`
        )
        .then((response) => {
          setSelectedVideo(response.data);
        })
        .catch((err) => {
          console.error(err);
          navigate("/video/notfound/error");
        });
    }
  }, [videoLinkId, navigate]);

  return (
    <>
      <Header setRandomKey={setRandomKey} />
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
    </>
  );
}

export default Home;
