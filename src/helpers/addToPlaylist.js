'use strict';

const request = require('request');

module.exports = (userId, trackId) => {
  return (err, response, body, playlistId) => {
    console.log('Got to add to playlist');
    let playlist = '';
    if (!playlistId) {
      playlist = body.playlistId;
    } else {
      playlist = playlistId;
    } 
    const data = {
      headers: response.request.headers,
    };
    request.post(`https://api.spotify.com/v1/users/${userId}/playlists/${playlist}/tracks?uris=spotify:track:${trackId}`, data, (e, r, b) => {
      console.log(b);
    });
  };
};
