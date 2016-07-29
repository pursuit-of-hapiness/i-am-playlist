'use strict';

const redis = require('redis');
const jwt = require('../auth/jwt');
const getAccessToken = require('../database/getAccessToken');
const checkAccessToken = require('../helpers/checkAccessToken');
const getUserPlaylistsWithToken = require('../helpers/getUserPlaylistsWithToken');
const checkForDiscoverPlaylist = require('../helpers/checkForDiscoverPlaylist');
const createPlaylist = require('../helpers/createPlaylist');
const addToPlaylist = require('../helpers/addToPlaylist');

module.exports = {
  path: '/submitPlaylist',
  method: 'POST',
  handler: (request, reply) => {
    const token = request.state.session;
    const validJWT = jwt.verify(token, process.env.JWT_SECRET);
    if (validJWT) {
      const client = redis.createClient();
      //const user = request.query.user;
      const user = 'matthewiiv';
      const trackId = '14Zdigity9O3iuDlKifcyr';
      getAccessToken(client, user, checkAccessToken(
        getUserPlaylistsWithToken(
          checkForDiscoverPlaylist(user, trackId, createPlaylist, addToPlaylist(user, trackId, reply)
          )
        )
      ));
    } else {
      reply('<h1>NOT OKAY</h1>');
    }
  },
};
