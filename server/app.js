const express = require('express')
const cors = require('cors')

const {
    downloadVideo,
} = require("./models");

const app = express()

app.use(cors())

// app.get('/', downloadVideo)

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/", upload.single('myFileInput'), function (req, res) {
    console.log(req.body);
    console.log(req.file)
//   ffmpeg(req.file)
//     .output("output.mp4")
//     .on("end", function () {
//       console.log("file has been converted succesfully");
//     })
//     .run();
});

app.listen(4000)



