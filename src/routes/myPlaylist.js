'use strict';

const trackObjectHelper = require('../helpers/trackObjectHandler');
const redis = require('redis');

module.exports = {
  path: '/myPlaylist',
  method: 'GET',
  handler: (request, reply) => {
    const user = request.query.user;
    const client = redis.createClient();
    client.get(user, (err, response) => {
      if (err) throw err;
      const tracks = trackObjectHelper(JSON.parse(response).items);
      console.log(tracks);
      client.quit();
      reply.view('home', {tracks});
    });
  }
};
