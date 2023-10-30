const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
const uuidv4 = require("uuid");

function uuid() {
  uuidv4.v4();
}

// setting up env

require("dotenv").config();
let { PORT, BACKEND_URL, CORS_ORIGIN } = process.env;

PORT = process.env.PORT || 8081;

console.log("PORT: ", PORT);
console.log("BACKEND_URL: ", BACKEND_URL);

// CORS

app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());

function readBasicVideosList() {
  const basicVideosFile = fs.readFileSync("data/videos.json");
  const basicVideosData = JSON.parse(basicVideosFile);
  return basicVideosData;
}

function filterDetailedVideosList() {
  const detailedVideosFile = fs.readFileSync("data/video-details.json");
  const basicVideosData = JSON.parse(basicVideosFile);
  return basicVideosData;
}

function writeBasicVideosList(data) {
  const stringifiedData = JSON.stringify(data);
  fs.writeFileSync("data/videos.json", stringifiedData);
}

// setting up routes

app.get("/", (req, res) => {
  console.log("here");
  console.log(uuidv4.v4());
  res.send("Welcome to the videos API");
});

app.get("/videos", (req, res) => {
  console.log("Basic Videos List requested");
  res.json(readBasicVideosList());
});

app.get("/videos/:videoId", (req, res) => {
  console.log("Video ID provided");
  const videoId = req.params.videoId;
  console.log(videoId);

  const detailedVideosFile = fs.readFileSync("data/video-details.json");
  const detailedVideosData = JSON.parse(detailedVideosFile);
  console.log(detailedVideosData);

  const filteredList = detailedVideosData.filter((video) => {
    return video.id == videoId;
  });

  console.log("FILTERED LIST: ", filteredList);
  const selectedVideo = JSON.stringify(filteredList);
  res.send(selectedVideo);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
