
const request = require('request');

module.exports = (req, reply) => {
  return (err, response, body) => {
    const headerObj = Object.assign({}, response);
    const headers = headerObj.request.headers;
    const playlist = JSON.parse(body).items;
// to be refactored...
    const result = [];
    playlist.forEach((e) => {
      if (e.uri.includes('spotifydiscover')) {
        result.push(e).uri;
      }
    });
    const playlistId = result[0].id;
    const spotifyUserId = 'spotifydiscover'
    const options = {
      headers: headers,
    };
    request.get(`https://api.spotify.com/v1/users/${spotifyUserId}/playlists/${playlistId}/tracks`, options, (er, res, bodyB) => {
      return reply(`<p>${bodyB}</p>`);
    });
  };
};
