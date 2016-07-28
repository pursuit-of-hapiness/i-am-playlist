'use strict';

const request = require('request');

module.exports = (addToPlaylist) => {
  return (userId, response) => {
    const header  = response.request.headers;
    header['Content-Type'] = 'application.json'  ;
    const data = {
      form: {
        name: 'My Discover Weekly Picks',
        public: true,
      },
      headers: header,
    };
    request.post(`https://api.spotify.com/v1/users/${userId}/playlists`, data, addToPlaylist);
  };
};
