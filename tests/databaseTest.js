const tape = require('tape');
const setAccessToken = require('../src/database/setAccessToken.js').setAccessToken;
const getAccessToken = require('../src/database/getAccessToken.js').getAccessToken;
const fakeredis = require("fakeredis");
const fakeclient = fakeredis.createClient();

tape('test redis will set access_token correctly', (t) => {
  const fakeToken = {
    user_id: 'i-am-playlist',
    access_token: 'hdsfkjasaew4658734sfdjks',
    refresh_token: 'sdhfkjasfhh3q458fhjw43oa',
  };
  const testSetAccessToken = (err, reply) => {
    t.equal(reply.access_token, fakeToken.access_token, 'sets access_token');
    t.equal(reply.refresh_token, fakeToken.refresh_token, 'sets refresh_token');
    t.end();
  };
  setAccessToken(fakeclient, fakeToken, testSetAccessToken);
});

tape('test redis will get access_token correctly', (t) => {
  const fakeToken = {
    user_id: 'pursuit-of-hapiness',
    access_token: 'sdjklgsdhkjgsdy78ey4twegh',
    refresh_token: 'zdfngskldrgjklsrhgjse4yt3hsr',
  };
  const testGetAccessToken = (setErr, setReply) => {
    getAccessToken(fakeclient, fakeToken.user_id, (getErr, getReply) => {
      t.equal(getReply.access_token, fakeToken.access_token, 'gets access_token');
      t.equal(getReply.refresh_token, fakeToken.refresh_token, 'gets refresh_token');
      t.end();
    });
  };
  setAccessToken(fakeclient, fakeToken, testGetAccessToken);
});
