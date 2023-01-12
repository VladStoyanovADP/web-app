const express = require('express')
const cors = require('cors')
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path
const ffmpeg = require('fluent-ffmpeg')

const app = express()

app.use(cors())

app.get('/', (req, res) =>
{
    ffmpeg.setFfmpegPath(ffmpegPath)
    ffmpeg('./input.mp4')
        .setStartTime('00:00:03')
        .setDuration('10')
        .output('video_out.mp4')
        .on('end', function (err)
        {
            if (!err)
            {
                console.log('conversion Done')
            }
            res.download('./video_out.mp4')
        })
        .on('error', err => console.log('error: ', err))
        .run()
})

app.listen(4000)