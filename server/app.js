const express = require('express')
const cors = require('cors')

// const multer = require("multer");

const {
    downloadVideo,
} = require("./models");

const app = express()


// const storage = multer.diskStorage({
//   destination: function(req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename: function(req, file, cb) {
//     cb(null, file.originalname);
//   }
// });

// const upload = multer({ storage: storage });


app.use(cors())

app.get('/', downloadVideo)

// app.post('/upload', upload.single("video"), (req, res) => {
//   console.log("Received video: ", req.file.originalname);

//   Do something with the video, such as saving it to a database
//   ...

//   res.send("Video uploaded successfully");
// }).catch((err) =>
// {
//     console.log(err)
// })

app.listen(4000)



