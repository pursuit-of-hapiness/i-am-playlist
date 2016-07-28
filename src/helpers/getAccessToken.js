'use strict'

const request = require('request');
const getUserInfo = require('./getUserInfo');

module.exports = (req, getUserInfoCB) => {
  return () => {
    const data = {
      grant_type: 'authorization_code',
      code: req.query.code,
      redirect_uri: 'http://localhost:3000/callback/',
      client_id: process.env.SPOTIFY_CLIENT_ID,
      client_secret: process.env.SPOTIFY_CLIENT_SECRET,
    };

    request.post('https://accounts.spotify.com/api/token', { form: data }, getUserInfoCB);
  };
};
