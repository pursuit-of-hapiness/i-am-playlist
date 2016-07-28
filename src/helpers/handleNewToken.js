'use strict';

const redis = require('redis');
const setAccessToken = require('../database/setAccessToken');

module.exports = (tokenObject, useToken) => {
  return (err, response, body) => {
    const client = redis.createClient();
    const updatedTokenObject = tokenObject;
    updatedTokenObject.access_token = JSON.parse(body).access_token;
    setAccessToken(client, updatedTokenObject, useToken);
  };
};
