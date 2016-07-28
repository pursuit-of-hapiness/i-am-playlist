'use strict';

module.exports = (trackArray) => {
  const filteredTrackArray = [];
  trackArray.forEach((object, i) => {
    filteredTrackArray[i] = {};
    filteredTrackArray[i].trackName = object.track.name;
    filteredTrackArray[i].albumName = object.track.album.name;
    filteredTrackArray[i].artistNames = [];
    object.track.artists.forEach(artist => {
      filteredTrackArray[i].artistNames.push(artist.name);
    });
    filteredTrackArray[i].trackId = object.track.id;
  });
  return filteredTrackArray;
};
