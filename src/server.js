const hapi = require('@hapi/hapi');
const Joi = require('@hapi/joi');
const todoRoutes = require('./src/routes/toDoRoutes');
const dbPlugin = require('./plugins/db');

 const server=()=>{
  const server = hapi.Server({
    host: 'localhost',
    port: 8080,
  })}

  const configServer = async ()=> {
  await server.validator(Joi);
  server.route(todoRoutes);
  await server.register(dbPlugin);
  return server;
};


module.exports = { configServer, server };