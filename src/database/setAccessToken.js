module.exports = {
  setAccessToken: (client, tokenObject, callback) => {
    client.on('error', (err) => {
      callback(err);
    });
    client.hmset(tokenObject.user_id, 'access_token', tokenObject.access_token,
                'refresh_token', tokenObject.refresh_token);
    client.hgetall(tokenObject.user_id, (err, reply) => {
      callback(err, reply);
    });
  },
};
