'use strict';

const request = require('request');

module.exports = (addToPlaylist) => {
  return (userId, response) => {
    console.log('Got to create Playlist');
    const header  = response.request.headers;
    header['Content-Type'] = 'application/json';
    
    const data = {
      form: JSON.stringify({ name: 'My Discover Weekly Picks',
        public: true,
      }),
      headers: header,
    };
    console.log(data);
    request.post(`https://api.spotify.com/v1/users/${userId}/playlists`, data, addToPlaylist);
  };
};
