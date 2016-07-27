'use strict'

const requestmodule = require('request');
const qs = require('querystring');

module.exports = {
  method: ['GET', 'POST'],
  path: '/callback/',
  handler: (request, reply) => {
    return reply('<h1>IT WORKED</h1>');
  }
};
