'use strict'

const request = require('request');
const qs = require('querystring');

module.exports = {
  method: 'GET',
  path: '/login',
  handler: (request, reply) => {
    const query = qs.stringify({
      client_id: process.env.SPOTIFY_CLIENT_ID,
      response_type: 'code',
      redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
      state: 'temporarystatestring',
      scope: process.env.SCOPES,
    });
    console.log(query);
    reply.redirect(`https://accounts.spotify.com/authorize?${query}`);
  }
};
