'use strict'

require('env2')('config.env');

const hapi = require('hapi');

const routes = [
  'index',
  'login',
  'welcome',
];

const routesArray = routes.map((el) => require(`./routes/${el}`));
const server = new hapi.Server();

server.connection({ port: 3000 });

server.start((startErr) => {
  if (startErr) throw startErr;
  console.log('Server running at port:', server.info.uri);
});

server.register([require('inert'), require('vision')], (regErr) => {
  if (regErr) throw regErr;
  server.route(routesArray);
});

module.exports = server;
