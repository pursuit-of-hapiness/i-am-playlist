module.exports = {
  getAccessToken: (client, user_id, callback) => {
    client.on('error', (err) => {
      callback(err);
    });
    client.hgetall(user_id, (err, reply) => {
      callback(err, reply);
    });
  },
};
