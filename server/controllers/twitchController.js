const request = require('superagent')
    , config  = require('../config/config')

    // constants
const API_DOMAIN  = 'https://api.twitch.tv/helix'
    , CLIENT_ID   = process.env.TWITCH_CLIENT_ID

const requestTwitchApi = (endpoint) => {
  return new Promise((resolve, reject) => {
    request
      .get(`${API_DOMAIN}${endpoint}`)
      .set('Client-ID', CLIENT_ID)
      .then(r => resolve(r.body))
      .catch(e => reject(e))
  })
}

exports.requestGamesTop = (req, res, next) => {
  requestTwitchApi(`/games/top`)
    .then(r => res.send(r))
    .catch(err => next(err))
}

exports.requestGameStreamsById = (req, res, next) => {
  requestTwitchApi(`/streams?game_id=${req.params.id}`)
    .then(r => res.send(r))
    .catch(err => next(err))
}

exports.requestVideoByUserId = (req, res, next) => {
  requestTwitchApi(`/videos?user_id=${req.params.id}`)
    .then(r => res.send(r))
    .catch(err => next(err))
}