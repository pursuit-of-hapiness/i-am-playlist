'use strict';

const crypto = require('crypto');

module.exports = {
  create: (header, payload, secret) => {
    const head = new Buffer(JSON.stringify(header)).toString('base64');
    const payl = new Buffer(JSON.stringify(payload)).toString('base64');
    let key = `${head}.${payl}`;
    let signature = crypto.createHmac('sha256', secret);
    signature.update(key);
    key = signature.digest('base64');
    const jwt = `${head}.${payl}.${key}`;
    return jwt;
  },
  verify: (jwt, secret) => {
    const parts = jwt.split('.');
    let key = `${parts[0]}.${parts[1]}`;
    let signature = crypto.createHmac('sha256', secret);
    signature.update(key);
    key = signature.digest('base64');
    return key === parts[2] ? true : false;
  },
  extractPayload: (jwt, secret) => {
    const parts = jwt.split('.');
    const payload = new Buffer(JSON.stringify(parts[1]), 'base64').toString('ascii');
    return payload;
  }
};
