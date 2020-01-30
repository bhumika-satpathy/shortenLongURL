const hapi = require('@hapi/hapi');
const urlRoutes = require('./src/routes/urlRoutes');

const createServer=async()=>{
    const server=hapi.server({
        host:'localhost',
        port:8080
    })
    server.routes(urlRoutes);
    return server;
}

module.exports = createServer();