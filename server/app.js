const express     = require('express')
const bodyParser  = require('body-parser')

const port = process.env.PORT || 3000
const app = express()

const twitchApi = require('./routes/twitch')

// 미들웨어
const api = express.Router()
const client = express.Router()

// 스태틱 라우트
app.use(express.static('temp'))
app.use(bodyParser.json())

// client 라우트

// api라우트
api.use('/twitch', twitchApi)
app.use('/api', api);

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.sendStatus(500)
});

app.listen(port)
