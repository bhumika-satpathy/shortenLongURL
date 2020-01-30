const hapi = require('@hapi/hapi');
const Joi = require('@hapi/joi');
const urlRoutes = require('./src/routes/urlRoutes');
const dbPlugin = require('./plugins/db');

 const server=()=>{
  const server = hapi.Server({
    host: 'localhost',
    port: 8080,
  })}

  const configServer = async ()=> {
  await server.validator(Joi);
  server.route(urlRoutes);
  await server.register(dbPlugin);
  return server;
};


module.exports = { configServer, server };