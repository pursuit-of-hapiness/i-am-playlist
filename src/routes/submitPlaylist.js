'use strict';

const redis = require('redis');
const getAccessToken = require('../database/getAccessToken');
const checkAccessToken = require('../helpers/checkAccessToken');

module.exports = {
  path: '/submitPlaylist',
  method: 'POST',
  handler: (request, reply) => {
    //request.payload is the track id
    const client = redis.createClient();
    //const user = request.query.user;
    const user = 'matthewiiv';
    getAccessToken(client, user, checkAccessToken((reply) => {
      console.log('I GOT THERE!');
    }));
    reply('<h1>OKAY</h1>');
  },
};
