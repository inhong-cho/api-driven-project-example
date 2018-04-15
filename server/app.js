const express     = require('express')
    , bodyParser  = require('body-parser')
    , cors        = require('cors')

const port = process.env.PORT || 3000
const app = express()

const twitchApi = require('./routes/twitch')

// 미들웨어
const api = express.Router()
app.use(bodyParser.json())
app.use(cors())

// api라우트
api.use('/twitch', twitchApi)
app.use('/api', api);

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.sendStatus(500)
});

app.listen(port)
