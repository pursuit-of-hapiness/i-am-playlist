'use strict'

const request = require('request');
const qs = require('querystring');

module.exports = {
  method: 'GET',
  path: '/welcome',
  handler: (request, reply) => {
    reply.file('../../public/welcome.html');
  }
};
