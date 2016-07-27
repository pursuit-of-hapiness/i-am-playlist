'use strict';

const tape = require('tape');
const server = require('../src/server');

tape('check login route', (t) => {
  const options = {
    method: 'GET',
    url: '/login',
  };

  server.inject(options, (response) => {
  });
});
