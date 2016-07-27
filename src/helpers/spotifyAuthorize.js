'use strict';

const qs = require('querystring');
const env = require('env2')('config.env');

module.exports = (reply) => {
  const query = qs.stringify({
    client_id: process.env.SPOTIFY_CLIENT_ID,
    response_type: 'code',
    redirect_uri: 'http://localhost:3000/callback/',
    scope: process.env.SCOPES,
  });
  reply.redirect(`https://accounts.spotify.com/authorize?${query}`);
};
