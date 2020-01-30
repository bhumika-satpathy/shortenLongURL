const Sequelize = require('sequelize');
//const server=require('../server');

module.exports = {
  name: 'DBPlugin',
  register: (server, options) => {
    const noteSequelize = new Sequelize('postgres://Bhumika_Satpathy:@localhost:5432/notes');
    console.log('Established Connection');
    server.decorate('server', 'sequelize', noteSequelize);
  },
};