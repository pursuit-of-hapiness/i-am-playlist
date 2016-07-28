'use strict';

module.exports = (client, userId, callback) => {
  client.on('error', (err) => {
    client.quit();
    callback(err);
  });
  client.hgetall(userId, (err, reply) => {
    client.quit();
    const updatedReply = reply;
    updatedReply.user_id = userId;
    callback(err, updatedReply);
  });
};
