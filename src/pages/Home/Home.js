import "./Home.scss";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import NextVideos from "../../components/NextVideos/NextVideos";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {
  const [selectedVideo, setSelectedVideo] = useState([null]);
  const [videosList, setVideosList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [videoDetailsList, setVideoDetailsList] = useState([]);

  const { videoLinkId } = useParams();
  
  let modifiedVideoList = [];
  

  useEffect(() => {
    axios
      .get(
        "https://project-2-api.herokuapp.com/videos/?api_key=e8ea54d0-3cd7-4281-8936-65a324902fec"
      )
      .then((response) => {
        setVideosList(response.data);
      })
      .then((response) => {
        const detailsArray = [];
        videosList.map((video) => {
          axios
            .get(
              `https://project-2-api.herokuapp.com/videos/${video.id}/?api_key=e8ea54d0-3cd7-4281-8936-65a324902fec`
            )
            .then((res) => {
              detailsArray.push(res.data);
              console.log("details array: ", detailsArray);
              setVideoDetailsList(detailsArray);
            })
            .then(() => {
              setSelectedVideo(videoDetailsList[0]); 
              modifiedVideoList = videosList.filter(
                (video) => video.id !== selectedVideo.id
              );
            
            //   const specifiedVideo = videoDetailsList.filter((video) => {
            //     return video.id === videoLinkId;
            //   });
            //   console.log("filter spec: ", specifiedVideo);
            //   setSelectedVideo(specifiedVideo);
            });
        });
      });
  }, []);


  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        videoLinkId
          ? `https://project-2-api.herokuapp.com/videos/${videoLinkId}/?api_key=e8ea54d0-3cd7-4281-8936-65a324902fec`
          : "https://project-2-api.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8/?api_key=e8ea54d0-3cd7-4281-8936-65a324902fec"
      )
      .then((response) => {
        console.log("api data: ", response.data)
        setSelectedVideo(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        navigate("/video/notfound/error");
      });
  }, []);

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
