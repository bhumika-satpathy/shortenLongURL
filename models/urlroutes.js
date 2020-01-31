'use strict';
module.exports = (sequelize, DataTypes) => {
  const URLroutes = sequelize.define('URLroutes', {
    longURL:DataTypes.STRING,
    time: DataTypes.STRING,
  }, {});
  URLroutes.associate = function(models) {
    // associations can be defined here
  };
  return URLroutes;

};