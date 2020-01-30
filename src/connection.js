const Sequelize=require('sequelize');
const sequelize = new Sequelize('postgres://Bhumika_Satpathy:@localhost:5432/longToShortURLConverter');

module.exports=sequelize;