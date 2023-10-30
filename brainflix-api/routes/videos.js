const fs = require("fs");
const router = require("express").Router();

function readBasicVideosList() {
  const basicVideosFile = fs.readFileSync("./data/videos.json");
  const basicVideosData = JSON.parse(basicVideosFile);
  return basicVideosData;
}

function filterDetailedVideosList(videoId) {
  const detailedVideosFile = fs.readFileSync("./data/video-details.json");
  const detailedVideosData = JSON.parse(detailedVideosFile);
  const filteredList = detailedVideosData.filter((video) => {
    return video.id == videoId;
  });
  return JSON.stringify(filteredList);
}

function writeBasicVideosList(data) {
  const stringifiedData = JSON.stringify(data);
  fs.writeFileSync("../data/videos.json", stringifiedData);
}

//routes

router.get("/", (req, res) => {
  console.log("Basic Videos List requested");
  res.json(readBasicVideosList());
});

router.get("/:videoId", (req, res) => {
  const videoId = req.params.videoId;
  let selectedVideo = filterDetailedVideosList(videoId);
  res.send(selectedVideo);
});

module.exports = router;
