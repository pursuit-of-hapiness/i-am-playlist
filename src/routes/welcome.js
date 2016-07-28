'use strict'

const getAccessToken = require('../helpers/getAccessToken');

const getUserInfo = require('../helpers/getUserInfo');
const getUserPlaylists = require('../helpers/getUserPlaylists');
const getDiscoverWeekly = require('../helpers/getDiscoverWeekly');
const redis = require('redis');

module.exports = {
  method: 'GET',
  path: '/callback/',
  handler: (req, reply) => {
    getAccessToken(
      req, getUserInfo(
        getUserPlaylists(
          getDiscoverWeekly(
            (err, response, body) => {
              const username = response.request.username;
              const client = redis.createClient();
              client.set(username, body);
              client.expire(username, 10);
              client.quit();
              return reply().redirect(`/myPlaylist?user=${username}`);
            }
          )
        )
      )
    )();
  },
};
