'use strict';

module.exports = (client, tokenObject, callback) => {
  client.on('error', (err) => {
    callback(err);
  });
  client.hmset(tokenObject.user_id, 'access_token', tokenObject.access_token,
  'refresh_token', tokenObject.refresh_token, 'date_created', Date.now());
  client.hgetall(tokenObject.user_id, (err, reply) => {
    const updatedReply = reply;
    updatedReply.user_id = tokenObject.user_id;
    callback(err, reply);
  });
};
