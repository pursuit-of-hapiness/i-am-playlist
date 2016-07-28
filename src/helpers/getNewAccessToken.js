'use strict';
const request = require('request');

module.exports = (tokenObject, handleNewToken) => {
  const client_id = process.env.SPOTIFY_CLIENT_ID;
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
  const data = {
    form: {
      grant_type: 'refresh_token',
      refresh_token: tokenObject.refresh_token,
    },
    headers: {
        Authorization: `Basic ${new Buffer(client_id + ':' + client_secret).toString('base64')}` 
    },
  };
  request.post('https://accounts.spotify.com/api/token', data, handleNewToken);
};
