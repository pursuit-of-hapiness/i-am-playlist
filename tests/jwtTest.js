'use strict';

const tape = require('tape');
const jwt = require('../src/auth/jwt');
const testSecret = 'okjgs934glklsd';

tape('test create', (t) => {
  const header = { typ: 'JWT', alg: 'HS256' };
  const payload = { iat: Date.now(), iss: 'spotifyServer', username: 'matthewiiv' };

  const token = jwt.create(header, payload, testSecret);
  console.log(token);
  const valid = jwt.verify(token, testSecret);
  console.log(valid);
  const payl = jwt.extractPayload(token, testSecret);
  console.log(payl);
});
