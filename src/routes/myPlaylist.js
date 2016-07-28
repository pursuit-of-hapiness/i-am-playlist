'use strict';

const trackObjectHelper = require('../helpers/trackObjectHandler');
const redis = require('redis');
const jwt = require('../auth/jwt');

module.exports = {
  path: '/myPlaylist',
  method: 'GET',
  handler: (request, reply) => {
    const user = request.query.user;
    const client = redis.createClient();
    client.get(user, (err, response) => {
      if (err) throw err;
      const tracks = trackObjectHelper(JSON.parse(response).items);
      client.quit();
      const header = { typ: 'JWT', alg: 'HS256' };
      const payload = { iat: Date.now(), iss: 'spotifyServer', username: user };
      const token = jwt.create(header, payload, process.env.JWT_SECRET);
      reply.view('home', {myVar: tracks}).state('session', token);
    });
  }
};
