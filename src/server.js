const hapi = require('@hapi/hapi');
const urlRoutes = require('./routes/urlRoutes');

const createServer=async()=>{
    const server=hapi.server({
        host:'localhost',
        port:8080
    })
    server.route(urlRoutes);
    console.log('Hey');
    return server;
}

module.exports = createServer;