'use strict'

const request = require('request');

module.exports = (callback) => {
  return (err, response, body) => {
    const usernameTemp = response.request.path.substring(10);
    const username = usernameTemp.substring(0, usernameTemp.indexOf('/'));
    const user = 'spotifydiscover';
    const header = response.request.headers;
    const playlists = JSON.parse(body).items;
    const spotifyWeekly = playlists.filter((el) => {
      return el.owner.id === user;
    })[0];
    const playlistId = spotifyWeekly.id;
    const options = {
      headers: header,
      username,
    };
    request.get(`https://api.spotify.com/v1/users/${user}/playlists/${playlistId}/tracks`, options, callback);
  };
};
