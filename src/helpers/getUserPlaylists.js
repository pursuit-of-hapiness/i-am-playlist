'use strict';

const request = require('request');
const setAccessToken = require('../database/setAccessToken');
const redis = require('redis');

module.exports = (getDiscoverWeeklyCB) => {
  return (err, response, body) => {
    const client = redis.createClient();
    const header = response.request.headers;
    const user = JSON.parse(body).id;
    const options = {
      headers: header,
    };
    const token = response.request.token;
    token.user_id = user;
    setAccessToken(client, token, (dbErr, dbReply) => {
      if (dbErr) throw dbErr;
      client.quit();
      request.get(`https://api.spotify.com/v1/users/${user}/playlists`, options, getDiscoverWeeklyCB);
    });
  };
};
