'use strict';
const request = require('request');

module.exports = (checkForDiscoverPlaylist) => {
  return (err, reply) => {
    const user = reply.user_id;
    const header = {
      Authorization: `Bearer ${reply.access_token}`
    };
    const options = {
      headers: header,
    };
    console.log('Got to get token');
    request.get(`https://api.spotify.com/v1/users/${user}/playlists?limit=50`, options, checkForDiscoverPlaylist);
  };
};
