module.exports = (client, userId, callback) => {
  client.on('error', (err) => {
    callback(err);
  });
  client.hgetall(userId, (err, reply) => {
    callback(err, reply);
  });
};
