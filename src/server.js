'use strict';

require('env2')('config.env');

const hapi = require('hapi');
const Handlebars = require('handlebars');

const routes = [
  'index',
  'login',
  'welcome',
  'myPlaylist',
  'submitPlaylist',
];

const routesArray = routes.map((el) => require(`./routes/${el}`));
const server = new hapi.Server();

server.connection({ port: 3000 });

server.state('session', {
  path: '/',
  encoding: 'none',
});

server.start((startErr) => {
  if (startErr) throw startErr;
  console.log('Server running at port:', server.info.uri);
});

server.register([require('inert'), require('vision')], (regErr) => {
  if (regErr) throw regErr;
  server.route(routesArray);

  server.views({
    engines: {html: Handlebars},
    relativeTo: __dirname,
    path: './views',
    layout: 'default',
    layoutPath: './views/layout',
    partialsPath: './views/partials',
    helpersPath: './views/helpers',
  });
});

module.exports = server;
