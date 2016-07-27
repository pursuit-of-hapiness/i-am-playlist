'use strict'

const requestmodule = require('request');
const spotifyAuthorize = require('../helpers/spotifyAuthorize')

module.exports = {
  method: 'GET',
  path: '/login',
  handler: (req, reply) => {
    spotifyAuthorize(reply);
  },
};
