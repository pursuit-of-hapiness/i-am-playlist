'use strict';

const request = require('request');
const getDiscoverWeekly = require('./getDiscoverWeekly');
module.exports = (req, reply) => {
  return (err, response, body) => {
    const header = response
    console.log(header);
    const user = JSON.parse(body).id;
    const options = {
      headers: header,
    };
    request.get(`https://api.spotify.com/v1/users/${user}/playlists`, options, getDiscoverWeekly(req, reply));
  };
};
