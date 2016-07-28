'use strict'
const getNewAccessToken = require('./getNewAccessToken');
const handleNewToken = require('./handleNewToken');

module.exports = (callback) => {
  return (err, reply) => {
    const tokenObject = reply;
    if (Date.now() - reply.date_created > 3600) {
      getNewAccessToken(
        tokenObject, handleNewToken
      );
    } else {
      callback(reply);
    }
  };
};
