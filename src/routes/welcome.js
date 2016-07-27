'use strict'

const requestmodule = require('request');
const qs = require('querystring');

module.exports = {
  method: 'GET',
  path: '/callback/',
  handler: (request, reply) => {
    console.log(request.query.code);
    const data = {
      grant_type: 'authorization_code',
      code: request.query.code,
      redirect_uri: 'http://localhost:3000/callback/',
      client_id: process.env.SPOTIFY_CLIENT_ID,
      client_secret: process.env.SPOTIFY_CLIENT_SECRET,
    };

    requestmodule.post('https://accounts.spotify.com/api/token', { form: data }, (err, response, body) =>{
      const accessToken = JSON.parse(body).access_token;
      const options = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        }
      };
      console.log(options);
      requestmodule.get('https://api.spotify.com/v1/me', options, (error, res, bodypen) => {
        console.log(bodypen);
        return reply('<h1>IT WORKED</h1>');
      })
    })
    console.log('HELLO');
  },

};
