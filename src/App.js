import "./App.scss";
import Header from "./components/Header/Header";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import videoDetailsTOBEDELETED from "./video-details.json";

//pages
import Home from "./pages/Home/Home";
import Upload from "./pages/Upload/Upload";
import NotFound from "./pages/NotFound/NotFound";
import VideoPage from "./pages/VideoPage/VideoPage";
import axios from "axios";

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
    if (month.toString().length === 2) {
      monthTimestamp = month.toString();
    } else {
      monthTimestamp = `0${month}`;
    }

    let dateNumTimestamp;
    if (date.toString().length === 2) {
      dateNumTimestamp = date.toString();
    } else {
      dateNumTimestamp = `0${date}`;
    }

    const dateTimestamp = `${monthTimestamp}/${dateNumTimestamp}/${year}`;
    return dateTimestamp;
  }
};

function App() {
  const [videosList, setVideosList] = useState(null);

  const [videoDetailsList, setVideoDetailsList] = useState([]);

  const [selectedVideo, setSelectedVideo] = useState([null]);

  const [isLoading, setIsLoading] = useState(true);
  const [detailsArrayCompiling, setDetailsArrayCompiling] = useState(true);

  




  setVideoDetailsList(videoDetailsTOBEDELETED);

  

  let modifiedVideoList = [];


  //this useEffect gets the basic videos list used in NextVideos component and sets videoList state
  useEffect(() => {
    axios
      .get(
        "https://project-2-api.herokuapp.com/videos/?api_key=e8ea54d0-3cd7-4281-8936-65a324902fec"
      )
      .then((response) => {
        setVideosList(response.data);
      })
      .catch((error) =>
        console.log("error on first axios call: ", error.response)
      );
  }, []);



  const { videoLinkId } = useParams();






  return (
    <BrowserRouter>
      <Header />

      <Routes>
        {!isLoading ? (
          <Route
            path="/"
            element={
              <Home
                videosList={videosList}
                videoDetailsList={videoDetailsList}
                setSelectedVideo={setSelectedVideo}
                selectedVideo={selectedVideo}
              />
            }
          />
        ) : null}
        {!isLoading ? (
          <Route
            path="/video/:videoLinkId"
            element={
              <Home
                videosList={videosList}
                videoDetailsList={videoDetailsList}
                setSelectedVideo={setSelectedVideo}
                selectedVideo={selectedVideo}
              />
            }
          />
        ) : null}
        {!isLoading ? <Route path="upload" element={<Upload />} /> : null}
        {!isLoading ? <Route path="*" element={<NotFound />} /> : null}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
