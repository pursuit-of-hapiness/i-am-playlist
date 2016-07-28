'use strict'

const getAccessToken = require('../helpers/getAccessToken');

const getUserInfo = require('../helpers/getUserInfo')
const getUserPlaylists = require('../helpers/getUserPlaylists')
const getDiscoverWeekly = require('../helpers/getDiscoverWeekly')

module.exports = {
  method: 'GET',
  path: '/callback/',
  handler: (req, reply) => {
    getAccessToken(
      req, getUserInfo(
        getUserPlaylists(
          getDiscoverWeekly(
            (err, response, body) => {
              //console.log(body);
              return reply('<h1>WOOOOOOO</h1>');
            }
          )
        )
      )
    )();
  },
};
