'use strict';

const request = require('request');

module.exports = (getUserPlaylistsCB) => {
  return (err, response, body) => {
    const accessToken = JSON.parse(body).access_token;
    const refreshToken = JSON.parse(body).refresh_token;
    const token = {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
    const options = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      token,
    };
    request.get('https://api.spotify.com/v1/me', options, getUserPlaylistsCB);
  };
};
