'use strict';

const request = require('request');
const getUserPlaylists = require('./getUserPlaylists');

module.exports = (req, reply) => {
  return (err, response, body) =>  {
    const accessToken = JSON.parse(body).access_token;
    const options = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    request.get('https://api.spotify.com/v1/me', options, getUserPlaylists(req, reply));
  };
};

