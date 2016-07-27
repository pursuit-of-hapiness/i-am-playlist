'use strict'

const requestmodule = require('request');
const qs = require('querystring');

module.exports = {
  method: 'GET',
  path: '/login',
  handler: (request, reply) => {
    const query = qs.stringify({
      client_id: process.env.SPOTIFY_CLIENT_ID,
      response_type: 'code',
      redirect_uri: 'http://localhost:3000/callback/',
      scope: process.env.SCOPES,
    });

    reply.redirect(`https://accounts.spotify.com/authorize?${query}`);
  },
};
