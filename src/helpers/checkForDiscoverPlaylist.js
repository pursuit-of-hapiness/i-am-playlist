'use strict';

const request = require('request');

module.exports = (userId, trackId, createPlaylist, addToPlaylist) => {
  return (err, response, body) => {
    console.log('Got to check for Discover Playlist');
    const playlists = JSON.parse(body).items;
    const discoverAccumulatorPlaylist = playlists.filter((el) => {
      return el.name === 'My Discover Weekly Picks';
    });
    if (discoverAccumulatorPlaylist.length === 0) {
      createPlaylist(addToPlaylist)(userId, response);
    } else {
      const playlistId = discoverAccumulatorPlaylist[0].id; 
      addToPlaylist(err, response, body, playlistId);
    }
  };
};
