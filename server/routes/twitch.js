// import packages
const fs                = require('fs')
    , path              = require('path')
    , express           = require('express')

// import controllers
const twitchController  = require('../controllers/twitchController')

const api = express.Router()

api.get('/game/top', twitchController.requestGamesTop)
api.get('/game/:id', twitchController.requestGameStreamsById)
api.get('/video/:id', twitchController.requestVideoByUserId)

module.exports = api