'use strict'

module.exports = {
  path: '/myPlaylist',
  method: 'GET',
  handler: (request, reply) => {
    console.log(request);
    reply.view('home', {myVar: ['some content','some more content','even more content']})
  }
};
