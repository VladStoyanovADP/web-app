const express = require('express')
const cors = require('cors')
const {
    downloadVideo,
} = require("./models");

const app = express()

app.use(cors())

app.get('/', downloadVideo)

app.listen(4000)