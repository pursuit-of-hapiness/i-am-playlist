'use strict';

const request = require('request');
const getDiscoverWeekly = require('./getDiscoverWeekly');
module.exports = (req, reply) => {
  return (err, response, body) => {
    const headerObj = Object.assign({}, response);
    const headers = headerObj.request.headers;
    const user = JSON.parse(body).id;
    const options = {
      headers: headers,
    };
    request.get(`https://api.spotify.com/v1/users/${user}/playlists`, options, getDiscoverWeekly(req, reply));
  };
};
