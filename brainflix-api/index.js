const express = require("express");
const app = express();
const cors = require("cors");
const uuidv4 = require("uuid");

// setting up env

require("dotenv").config();
let { PORT, BACKEND_URL, CORS_ORIGIN } = process.env;

PORT = process.env.PORT || 8081;

console.log("PORT: ", PORT);
console.log("BACKEND_URL: ", BACKEND_URL);

// CORS

app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());

// setting up routes

const videosRoutes = require("./routes/videos");
app.use("/videos", videosRoutes);

app.get("/", (req, res) => {
  console.log("here");
  console.log(uuidv4.v4());
  res.send("Welcome to the videos API");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
