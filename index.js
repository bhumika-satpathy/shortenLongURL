const createServer=require('./src/server');

const start=async()=>{
    const server=createServer();
    await server.start();
}
start();
console.log('Server Started!!')