'use strict';

const request = require('request');

module.exports = (trackId, userId) => {
  return (err, response, body, playlistId) => {
    let playlist = '';
    if (!playlistId) {
      playlist = body.playlistId;
    } else {
      playlist = playlistId;
    } 
    const data = {
      headers: response.request.headers,
    };
    request.post(`https://api.spotify.com/v1/users/${userId}/playlists/${playlist}/tracks?uris:spotify.track:${trackId}`, data, (e, r, b) => {
      console.log(b);
    });
  };
};
