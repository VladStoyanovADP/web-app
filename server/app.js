const express = require("express");
const cors = require("cors");
const ffmpeg = require("fluent-ffmpeg");
const axios = require("axios");

const { downloadVideo } = require("./models");

const app = express();

app.use(cors());

let fileName = undefined

app.get('/', (req, res) =>
{
  axios
    .get("http://localhost:8000/test")
    .then((resp) => resp.data[0].mostReplayed)
    .then((startTime) => {
      startTime /= 1000;
      startTime = Math.floor(startTime);
      let min = (startTime - (startTime % 60)) / 60;
      if (min < 10) min = `0${min}`;
      let seconds = startTime % 60;
      if (seconds < 10) seconds = `0${seconds}`;

      ffmpeg(`./uploads/${fileName}`)
        .setStartTime(`00:00:04`)
        .setDuration("10")
        .output("video_out.mp4")
        .on("end", () => {
          res.download("./video_out.mp4");
        })
        .run();
    });
})

const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "./uploads/"),
  filename: (req, file, cb) => {
    fileName = file.originalname;
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("myFileInput"), (req, res) => { });

app.listen(4000);
