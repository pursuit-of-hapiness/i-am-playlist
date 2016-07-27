'use strict';

const request = require('request');

module.exports = (req, reply) => {
  return (err, response, body) => {
    console.log(body);
    reply('<h1>IM WORKING</h1>');
  };
};
