'use strict'

const getAccessToken = require('../helpers/getAccessToken');

module.exports = {
  method: 'GET',
  path: '/callback/',
  handler: (req, reply) => {
    getAccessToken(req, reply)();
  }
};
